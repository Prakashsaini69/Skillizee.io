// API Configuration for different environments
// IMPORTANT: Update the production baseURL with your actual AWS Lambda API Gateway domain after deployment
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:3000',
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  },
  staging: {
    baseURL: 'https://your-api-gateway-id.execute-api.us-east-1.amazonaws.com/staging', // Update with your Lambda API Gateway URL
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  },
  production: {
    baseURL: 'https://your-api-gateway-id.execute-api.us-east-1.amazonaws.com/prod', // Update with your Lambda API Gateway URL
    razorpayKey: 'rzp_live_GuVAJW8fx8JjNi'
  }
};

// Get current environment
// For now, use development to test locally
const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';

// Export current config
export const config = API_CONFIG[isDevelopment ? 'development' : 'production'];

// API endpoints
export const API_ENDPOINTS = {
  createOrder: `${config.baseURL}/api/create-order`,
  courseInfo: `${config.baseURL}/api/course-info`,
  health: `${config.baseURL}/api/health`,
  checkUserEnrollment: `${config.baseURL}/api/check-user-enrollment`,
  verifyPaymentAndOnboard: `${config.baseURL}/api/verify-payment-and-onboard`,
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
