import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { usePayment } from '../../hooks/usePayment';

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

  // Use the payment hook
  const {
    course,
    isLoading,
    isCheckingUser,
    paymentStatus,
    errors,
    userCheckResult,
    paymentMessage,
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
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

          {/* User Check Result */}
          {userCheckResult && (
            <div className="p-6">
              {userCheckResult.alreadyEnrolled && (
                <div className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Already Enrolled!</h4>
                    <p className="text-sm text-blue-600">You are already enrolled in this course with email: {userCheckResult.userData?.email}</p>
                    <p className="text-xs text-blue-500 mt-1">Course ID: {userCheckResult.userData?.id}</p>
                  </div>
                </div>
              )}
              
              {userCheckResult.userExists && !userCheckResult.alreadyEnrolled && (
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Existing User Found</h4>
                    <p className="text-sm text-yellow-600">Welcome back! You'll be enrolled in this course after payment.</p>
                  </div>
                </div>
              )}
              
              {!userCheckResult.userExists && (
                <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">New User</h4>
                    <p className="text-sm text-green-600">You'll be onboarded and enrolled after payment.</p>
                  </div>
                </div>
              )}
              
              {!userCheckResult.success && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-800">Check Failed</h4>
                    <p className="text-sm text-red-600">{userCheckResult.message}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Payment Status */}
          {paymentStatus && (
            <div className="p-6">
              {paymentStatus === 'success' && (
                <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Payment Successful!</h4>
                    <p className="text-sm text-green-600">
                      {paymentMessage || 'User onboarded and enrolled successfully!'}
                    </p>
                  </div>
                </div>
              )}
              
              {paymentStatus === 'verifying' && (
                <div className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Verifying Payment</h4>
                    <p className="text-sm text-blue-600">Onboarding user and enrolling in course...</p>
                  </div>
                </div>
              )}
              
              {paymentStatus === 'error' && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-800">Payment Failed</h4>
                    <p className="text-sm text-red-600">Please try again or contact support.</p>
                  </div>
                </div>
              )}
              
              {paymentStatus === 'cancelled' && (
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Payment Cancelled</h4>
                    <p className="text-sm text-yellow-600">You can try again anytime.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Enrollment Form */}
          {!paymentStatus && (
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

              {/* Payment Button */}
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
              <p className="text-xs text-gray-500 text-center">
                🔒 Your payment is secured by RazorPay. We never store your payment details.
              </p>
            </form>
          )}

          {/* Footer */}
          {paymentStatus && (
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={handleClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PaymentModal;
