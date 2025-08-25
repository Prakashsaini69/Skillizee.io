// API Configuration for different environments
// IMPORTANT: Update the production baseURL with your actual AWS Lambda API Gateway domain after deployment
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:3000',
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  },
  staging: {
    baseURL: 'https://nf7jr9dl19.execute-api.us-east-1.amazonaws.com/dev', // Lambda API Gateway URL
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  },
  production: {
    baseURL: 'https://nf7jr9dl19.execute-api.us-east-1.amazonaws.com/dev', // Lambda API Gateway URL
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  }
};

// Get current environment
// Temporarily force production mode to test Lambda backend
const isDevelopment = false; // process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

// Export current config
export const config = API_CONFIG[isDevelopment ? 'development' : 'production'];

// API endpoints
export const API_ENDPOINTS = {
  base: config.baseURL,
  createOrder: `${config.baseURL}/api/create-order`,
  courseInfo: `${config.baseURL}/api/course-info`,
  health: `${config.baseURL}/api/health`,
  checkUserEnrollment: `${config.baseURL}/api/check-user-enrollment`,
  verifyPaymentAndOnboard: `${config.baseURL}/api/verify-payment-and-onboard`,
  getEnrollmentCourseId: `${config.baseURL}/api/get-enrollment-course-id`,
  testWebhook: `${config.baseURL}/api/test-webhook`
};

// RazorPay configuration
export const RAZORPAY_CONFIG = {
  key: config.razorpayKey,
  currency: 'INR',
  name: 'SkilliZee',
  theme: {
    color: '#00308A'
  }
};

export default config;
