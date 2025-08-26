import { useState, useCallback, useEffect } from 'react';
import { API_ENDPOINTS, RAZORPAY_CONFIG } from '../config/api';
import { DEFAULT_COURSE } from '../config/courses';
import { getSharedCourseIdForEnrollment } from '../config/shared-course-config';

/**
 * Custom hook for handling payments
 * This hook encapsulates all payment logic and can be reused across components
 * 
 * @param {Object} courseData - Course information (name, price, courseId, description)
 * @returns {Object} - Payment state and functions
 */
export const usePayment = (courseData = {}) => {
  // Course data with dynamic fallbacks
  const course = {
    name: courseData?.name || DEFAULT_COURSE.name,
    price: courseData?.price || DEFAULT_COURSE.price,
    courseId: courseData?.courseId || DEFAULT_COURSE.id,
    description: courseData?.description || DEFAULT_COURSE.description,
    ...courseData
  };

  // State management
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingUser, setIsCheckingUser] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [userCheckResult, setUserCheckResult] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState('');
  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);

  // Log course data for debugging (only when courseData changes)
  useEffect(() => {
    console.log('🎯 Course data for payment:', {
      name: course.name,
      price: course.price,
      courseId: course.courseId,
      description: course.description,
      source: courseData ? 'props' : 'default'
    });
  }, [courseData, course.name, course.price, course.courseId, course.description]);

  // Get A/B testing course ID for enrollment
  const getABTestingCourseId = async (courseSlug) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.getEnrollmentCourseId}?courseSlug=${courseSlug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('🎯 A/B Testing result:', result);

      if (result.success) {
        return result.data.courseId;
      } else {
        throw new Error(result.message || 'Failed to get A/B testing course ID');
      }
    } catch (error) {
      console.error('A/B Testing error:', error);
      // Fallback to shared configuration A/B testing
      console.log('🔄 Falling back to shared course configuration...');
      const fallbackCourseId = getSharedCourseIdForEnrollment(courseSlug);
      if (fallbackCourseId) {
        console.log('✅ Using fallback course ID:', fallbackCourseId);
        return fallbackCourseId;
      }
      // Final fallback to default course ID
      console.log('⚠️ Using default course ID as final fallback');
      return course.courseId;
    }
  };

  // Validate form data
  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone?.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!formData.grade?.trim()) newErrors.grade = 'Grade is required';
    if (!formData.password?.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check user enrollment status before payment
  const checkUserEnrollment = async (formData) => {
    if (!validateForm(formData)) return false;

    setIsCheckingUser(true);
    setUserCheckResult(null);

    try {
      // Get A/B testing course ID if courseSlug is available
      let enrollmentCourseId = course.courseId;
      if (courseData?.courseSlug) {
        enrollmentCourseId = await getABTestingCourseId(courseData.courseSlug);
        console.log('🎯 Using A/B testing course ID:', enrollmentCourseId);
      }

      const response = await fetch(API_ENDPOINTS.checkUserEnrollment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          courseId: enrollmentCourseId,
          name: formData.name,
          phone: formData.phone,
          grade: formData.grade,
          password: formData.password,
          schoolName: formData.schoolName,
          address: formData.address,
          cityState: formData.cityState,
          pincode: formData.pincode
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('📊 User check result:', result);
      setUserCheckResult(result);

      if (!result.success) {
        throw new Error(result.message || 'Failed to check user enrollment');
      }

      if (result.alreadyEnrolled) {
        console.log('🚫 User already enrolled, blocking payment');
        return false;
      }

      console.log('✅ User check passed, proceeding to payment');
      return true;
    } catch (error) {
      console.error('Error checking user enrollment:', error);
      setUserCheckResult({
        success: false,
        error: 'Check Failed',
        message: error.message || 'Unable to check enrollment status'
      });
      return false;
    } finally {
      setIsCheckingUser(false);
    }
  };

  // Create order and initiate payment
  const handlePayment = async (formData, onSuccess, onError) => {
    // Additional safety check - prevent payment if already enrolled
    if (userCheckResult && userCheckResult.alreadyEnrolled) {
      console.log('🚫 Payment blocked: User is already enrolled');
      return;
    }

    // First check user enrollment
    const shouldProceed = await checkUserEnrollment(formData);
    if (!shouldProceed) {
      console.log('🚫 Payment blocked: User check failed or user already enrolled');
      return;
    }

    setIsLoading(true);
    setPaymentStatus(null);

    try {
      // Get A/B testing course ID if courseSlug is available
      let enrollmentCourseId = course.courseId;
      if (courseData?.courseSlug) {
        enrollmentCourseId = await getABTestingCourseId(courseData.courseSlug);
        console.log('🎯 Using A/B testing course ID for payment:', enrollmentCourseId);
      }

      // Create order on backend
      const orderResponse = await fetch(API_ENDPOINTS.createOrder, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseId: enrollmentCourseId,
          amount: course.price
        })
      });

      const orderResult = await orderResponse.json();

      if (!orderResult.success) {
        throw new Error(orderResult.message || 'Failed to create order');
      }

      // Initialize RazorPay payment
      const options = {
        key: RAZORPAY_CONFIG.key,
        amount: orderResult.data.amount * 100, // Convert to paise for Razorpay
        currency: RAZORPAY_CONFIG.currency,
        name: RAZORPAY_CONFIG.name,
        description: course.name,
        order_id: orderResult.data.id, // This is now the Razorpay order ID
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: RAZORPAY_CONFIG.theme,
        capture: true, // Ensure payment is captured immediately
        auto_capture: true, // Additional auto-capture flag
        onOpen: function() {
          setIsRazorpayOpen(true);
          console.log('🚀 Razorpay gateway opened');
        },
        handler: async function (response) {
          // Payment successful
          setPaymentStatus('success');
          console.log('Payment successful:', response);
          
          // Immediately onboard user to Graphy after payment success
          try {
            setPaymentStatus('verifying');
            console.log('🚀 Starting user onboarding to Graphy...');
            
            // Call backend to onboard user with payment verification data
            const onboardResponse = await fetch(API_ENDPOINTS.verifyPaymentAndOnboard, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id, // Use Razorpay order ID for signature verification
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                grade: formData.grade,
                courseId: enrollmentCourseId,
                schoolName: formData.schoolName,
                address: formData.address,
                cityState: formData.cityState,
                pincode: formData.pincode,
                password: formData.password
              }),
            });
            
            if (onboardResponse.ok) {
              const onboardData = await onboardResponse.json();
              console.log('✅ Backend onboarding response:', onboardData);
              
                        if (onboardData.success) {
            setPaymentStatus('success');
            setIsRazorpayOpen(false); // Hide Razorpay loading state
            console.log('🎉 Complete success! User onboarded and enrolled');
            
            // Show success message with course name
            setPaymentMessage(`🎉 Enrollment Complete! You have been successfully enrolled in "${course.name}".`);
            
            // Call success callback if provided
            if (onSuccess) {
              onSuccess(onboardData);
            }
                    } else {
            console.error('❌ Onboarding failed:', onboardData.message);
            setPaymentStatus('error');
            setIsRazorpayOpen(false); // Hide Razorpay loading state
            if (onError) onError(onboardData.message);
          }
            } else {
              console.error('❌ Onboarding failed with status:', onboardResponse.status);
              setPaymentStatus('error');
              setIsRazorpayOpen(false); // Hide Razorpay loading state
              if (onError) onError('Onboarding failed');
            }
          } catch (onboardError) {
            console.error('❌ Error onboarding user:', onboardError);
            setPaymentStatus('error');
            setIsRazorpayOpen(false); // Hide Razorpay loading state
            if (onError) onError(onboardError.message);
          }
        },
        modal: {
          ondismiss: function() {
            setPaymentStatus('cancelled');
            setIsLoading(false);
            setIsRazorpayOpen(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      // Set loading state before opening Razorpay
      setIsRazorpayOpen(true);
      
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      setIsRazorpayOpen(false); // Hide Razorpay loading state
      if (onError) onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset payment state
  const resetPayment = useCallback(() => {
    setPaymentStatus(null);
    setErrors({});
    setUserCheckResult(null);
    setPaymentMessage('');
    setIsRazorpayOpen(false);
    setIsLoading(false); // Reset loading state
    setIsCheckingUser(false); // Reset checking user state
  }, []);

  return {
    // Course data
    course,
    
    // State
    isLoading,
    isCheckingUser,
    paymentStatus,
    errors,
    setErrors,
    userCheckResult,
    paymentMessage,
    isRazorpayOpen,
    
    // Functions
    handlePayment,
    checkUserEnrollment,
    resetPayment,
    validateForm
  };
};
