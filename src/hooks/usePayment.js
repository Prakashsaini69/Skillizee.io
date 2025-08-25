import { useState } from 'react';
import { API_ENDPOINTS, RAZORPAY_CONFIG } from '../config/api';
import { DEFAULT_COURSE } from '../config/courses';

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

  // Log course data for debugging
  console.log('🎯 Course data for payment:', {
    name: course.name,
    price: course.price,
    courseId: course.courseId,
    description: course.description,
    source: courseData ? 'props' : 'default'
  });

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
      const response = await fetch(API_ENDPOINTS.checkUserEnrollment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          courseId: course.courseId,
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
      // Create order on backend
      const orderResponse = await fetch(API_ENDPOINTS.createOrder, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseId: course.courseId,
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
        amount: orderResult.data.amount,
        currency: RAZORPAY_CONFIG.currency,
        name: RAZORPAY_CONFIG.name,
        description: course.name,
        order_id: orderResult.data.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: RAZORPAY_CONFIG.theme,
        handler: async function (response) {
          // Payment successful
          setPaymentStatus('success');
          console.log('Payment successful:', response);
          
          // Immediately onboard user to Graphy after payment success
          try {
            setPaymentStatus('verifying');
            console.log('🚀 Starting user onboarding to Graphy...');
            
            // Call backend to onboard user
            const onboardResponse = await fetch(API_ENDPOINTS.verifyPaymentAndOnboard, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: orderResult.data.id,
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                grade: formData.grade,
                courseId: course.courseId,
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
                console.log('🎉 Complete success! User onboarded and enrolled');
                
                // Show success message
                setPaymentMessage('🎉 Enrollment Complete! You have been successfully enrolled in the course.');
                
                // Call success callback if provided
                if (onSuccess) {
                  onSuccess(onboardData);
                }
              } else {
                console.error('❌ Onboarding failed:', onboardData.message);
                setPaymentStatus('error');
                if (onError) onError(onboardData.message);
              }
            } else {
              console.error('❌ Onboarding failed with status:', onboardResponse.status);
              setPaymentStatus('error');
              if (onError) onError('Onboarding failed');
            }
          } catch (onboardError) {
            console.error('❌ Error onboarding user:', onboardError);
            setPaymentStatus('error');
            if (onError) onError(onboardError.message);
          }
        },
        modal: {
          ondismiss: function() {
            setPaymentStatus('cancelled');
            setIsLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      if (onError) onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset payment state
  const resetPayment = () => {
    setPaymentStatus(null);
    setErrors({});
    setUserCheckResult(null);
    setPaymentMessage('');
  };

  return {
    // Course data
    course,
    
    // State
    isLoading,
    isCheckingUser,
    paymentStatus,
    errors,
    userCheckResult,
    paymentMessage,
    
    // Functions
    handlePayment,
    checkUserEnrollment,
    resetPayment,
    validateForm
  };
};
