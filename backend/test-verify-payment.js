// Local test script for verifyPaymentAndOnboard function
// Run with: node test-verify-payment.js

// Mock the Lambda environment
const { verifyPaymentAndOnboard } = require('./lambda.js');

// Mock event object for payment verification
const verifyEvent = {
  httpMethod: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    orderId: 'order_R9tooB9gLeAHi3',
    paymentId: 'pay_R9tp0j3K1dws3V',
    signature: '6ec698c8a9b7ef0b0bfe22955e4cfc8e25666f23c3dc07c6b92be7e9198a1bc3',
    email: 'sainiprakash69@gmail.com',
    name: 'PRAKASH SAINI',
    phone: '8875430922',
    grade: 'Class 10',
    courseId: '68abf3833a374a37e2bcc994',
    schoolName: 'Test School',
    address: 'Test Address',
    cityState: 'Test City',
    pincode: '123456',
    password: 'testpassword123'
  })
};

// Test function
async function testVerifyPayment() {
  console.log('🧪 Testing payment verification and onboarding...');
  try {
    const result = await verifyPaymentAndOnboard(verifyEvent);
    console.log('✅ Result:', result);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the test
testVerifyPayment().catch(console.error);
