import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { usePayment } from '../../hooks/usePayment';
import { createPortal } from 'react-dom';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  courseData, 
  onSuccess, 
  onError,
  title = "Complete Enrollment",
  subtitle = "Fill in your details to proceed"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    password: '',
    schoolName: '',
    address: '',
    cityState: '',
    pincode: ''
  });

  const [redirectCountdown, setRedirectCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Use the payment hook
  const {
    course,
    isLoading,
    isCheckingUser,
    paymentStatus,
    errors,
    setErrors,
    userCheckResult,
    paymentMessage,
    isRazorpayOpen,
    handlePayment,
    resetPayment
  } = usePayment(courseData);

  // Load RazorPay script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle payment submission
  const handlePaymentSubmit = async () => {
    await handlePayment(formData, onSuccess, onError);
  };

  // Close modal
  const handleClose = () => {
    if (!isLoading && !isCheckingUser) {
      onClose();
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        grade: '', 
        password: '',
        schoolName: '', 
        address: '', 
        cityState: '', 
        pincode: '' 
      });
      resetPayment();
    }
  };

  // Grade options
  const gradeOptions = [
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    'Class 11', 'Class 12'
  ];

  // Prevent body scroll when modal is open and ensure modal covers everything
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Add a class to body for additional styling if needed
      document.body.classList.add('modal-open');
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.classList.remove('modal-open');
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  // Handle redirect countdown when payment is successful
  useEffect(() => {
    if (paymentStatus === 'success') {
      const timer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Redirect to Skillizee dashboard
            try {
              window.location.href = 'https://login.skillizee.io/t/home';
            } catch (error) {
              console.error('Redirect failed:', error);
              // Fallback: open in new tab
              window.open('https://login.skillizee.io/t/home', '_blank');
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setRedirectCountdown(10);
    }
  }, [paymentStatus]);

  // Function to handle manual redirect to dashboard
  const handleRedirectToDashboard = () => {
    setIsRedirecting(true);
    try {
      window.location.href = 'https://login.skillizee.io/t/home';
    } catch (error) {
      console.error('Manual redirect failed:', error);
      // Fallback: open in new tab
      window.open('https://login.skillizee.io/t/home', '_blank');
    }
  };

  // Don't render modal if it's not open
  if (!isOpen) return null;

  // If Razorpay is open, show a minimal loading overlay
  if (isRazorpayOpen) {
    return createPortal(
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-container"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment</h3>
            <p className="text-gray-600">Please complete your payment in the Razorpay gateway...</p>
          </div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  }

  // Use portal to render modal at document body level
  return createPortal(
    <AnimatePresence>
      {/* Double overlay for maximum coverage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
      />
      
      {/* Modal container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-container"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              disabled={isLoading || isCheckingUser}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Course Summary */}
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{course.name}</h3>
                <p className="text-sm text-gray-600">Lifetime access</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">₹{course.price}</p>
                <p className="text-sm text-gray-500 line-through">₹4999</p>
              </div>
            </div>
          </div>



          {/* Enrollment Form */}
          {!paymentStatus && (
            <div className="flex-1 overflow-y-auto">
              <div className="bg-white border-b border-gray-200 rounded-b-xl shadow-sm mx-2 mb-2" style={{ borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
                <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Grade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade/Class *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.grade ? 'border-red-300' : 'border-gray-300'
                    }`}
                    disabled={isLoading}
                  >
                    <option value="">Select your grade</option>
                    {gradeOptions.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                  {errors.grade && (
                    <p className="mt-1 text-sm text-red-600">{errors.grade}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    disabled={isLoading}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                {/* School Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your school name"
                    disabled={isLoading}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your address"
                    disabled={isLoading}
                  />
                </div>

                {/* City State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City, State
                  </label>
                  <input
                    type="text"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Mumbai, Maharashtra"
                    disabled={isLoading}
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your pincode"
                    disabled={isLoading}
                  />
                </div>
              </form>
              </div>
            </div>
          )}

          {/* Messages and Button Section - Sticky at Bottom */}
          {!paymentStatus && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              {/* Messages above button */}
              <div className="mb-4 space-y-3">
                {/* User Check Result Messages */}
                {userCheckResult && (
                  <>
                    {userCheckResult.alreadyEnrolled ? (
                      // User is already enrolled - show only this message
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div className="text-sm">
                          <h4 className="font-semibold text-blue-800">Already Enrolled!</h4>
                          <p className="text-blue-600">You are already enrolled in this course.</p>
                        </div>
                      </div>
                    ) : userCheckResult.userExists && !userCheckResult.alreadyEnrolled ? (
                      // Existing user but not enrolled in this course
                      <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <div className="text-sm">
                          <h4 className="font-semibold text-yellow-800">Existing User Found</h4>
                          <p className="text-yellow-600">Welcome back! You'll be enrolled after payment.</p>
                        </div>
                      </div>
                    ) : !userCheckResult.userExists ? (
                      // Completely new user
                      <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div className="text-sm">
                          <h4 className="font-semibold text-green-800">New User</h4>
                          <p className="text-green-600">You'll be onboarded and enrolled after payment.</p>
                        </div>
                      </div>
                    ) : !userCheckResult.success ? (
                      // User check failed
                      <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <div className="text-sm">
                          <h4 className="font-semibold text-red-800">Check Failed</h4>
                          <p className="text-red-600">{userCheckResult.message}</p>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}


              </div>

              {/* Payment Button - Sticky at Bottom */}
              <button
                type="button"
                onClick={(e) => {
                  // Prevent click if already enrolled
                  if (userCheckResult && userCheckResult.alreadyEnrolled) {
                    e.preventDefault();
                    console.log('🚫 Button click blocked: User already enrolled');
                    return;
                  }
                  handlePaymentSubmit();
                }}
                disabled={isLoading || isCheckingUser || (userCheckResult && userCheckResult.alreadyEnrolled)}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isCheckingUser ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Please Wait...</span>
                  </>
                ) : isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : userCheckResult && userCheckResult.alreadyEnrolled ? (
                  <>
                    <span>Already Enrolled</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹{course.price}</span>
                  </>
                )}
              </button>

              {/* Security Notice */}
              <p className="text-xs text-gray-500 text-center mt-3">
                🔒 Your payment is secured by RazorPay. We never store your payment details.
              </p>
            </div>
          )}

          {/* Payment Status Messages - Show when payment is in progress or completed */}
          {paymentStatus && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="mb-4 space-y-3">
                {paymentStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-green-800 text-base mb-2">
                          🎉 Enrollment Successful!
                        </h4>
                        <p className="text-green-700 mb-3">
                          {paymentMessage || `You have been successfully enrolled in "${course.name}"!`}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          Course: <span className="text-green-800">{course.name}</span>
                        </p>
                        
                        {/* Redirect Information */}
                        <div className="bg-white rounded-lg p-3 border border-green-100">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Next Steps:</span>
                          </p>
                                                        <ul className="text-xs text-gray-500 space-y-1">
                                <li>• Check your email for login credentials</li>
                                <li>• Use the email and password you entered to login</li>
                                <li>• You'll be redirected to Skillizee dashboard shortly</li>
                              </ul>
                              
                              {/* Countdown */}
                              <div className="mt-3 pt-3 border-t border-green-100">
                                <p className="text-xs text-gray-500 text-center">
                                  Redirecting to dashboard in <span className="font-semibold text-green-600">{redirectCountdown}</span> seconds...
                                </p>
                              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentStatus === 'verifying' && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Loader2 className="w-6 h-6 text-blue-600 animate-spin flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-800 text-base mb-2">
                          🔄 Processing Enrollment
                        </h4>
                        <p className="text-blue-700 mb-3">
                          Please wait while we onboard you and enroll you in the course...
                        </p>
                        
                        {/* Processing Info */}
                        <div className="bg-white rounded-lg p-3 border border-blue-100">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">What's happening:</span>
                          </p>
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Verifying your payment with Razorpay</li>
                            <li>• Creating your account on our learning platform</li>
                            <li>• Enrolling you in the course</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-red-800 text-base mb-2">
                          ❌ Payment Failed
                        </h4>
                        <p className="text-red-700 mb-3">
                          We encountered an issue processing your payment. Please try again.
                        </p>
                        
                        {/* Error Details */}
                        <div className="bg-white rounded-lg p-3 border border-red-100">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">What to do:</span>
                          </p>
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Check your payment details and try again</li>
                            <li>• Ensure your card/bank account has sufficient funds</li>
                            <li>• Contact support if the issue persists</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentStatus === 'cancelled' && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-yellow-800 text-base mb-2">
                          ⏸️ Payment Cancelled
                        </h4>
                        <p className="text-yellow-700 mb-3">
                          Your payment was cancelled. No charges were made to your account.
                        </p>
                        
                        {/* Cancellation Info */}
                        <div className="bg-white rounded-lg p-3 border border-yellow-100">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">No worries:</span>
                          </p>
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li>• You can try again anytime</li>
                            <li>• Your enrollment form data is saved</li>
                            <li>• No charges were made to your account</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          {paymentStatus && (
            <div className="p-6 border-t border-gray-200">
              {paymentStatus === 'success' ? (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    You'll be redirected to Skillizee dashboard in {redirectCountdown} seconds
                  </p>
                  <button
                    onClick={handleRedirectToDashboard}
                    disabled={isRedirecting}
                    className="w-full bg-green-100 hover:bg-green-200 disabled:bg-green-300 text-green-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isRedirecting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Redirecting...</span>
                      </>
                    ) : (
                      <span>Go to Dashboard</span>
                    )}
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default PaymentModal;
