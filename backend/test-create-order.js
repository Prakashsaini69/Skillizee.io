// Local test script for createOrder function
// Run with: node test-create-order.js

// Mock the Lambda environment
const { createOrder } = require('./lambda.js');

// Mock event object for OPTIONS request
const optionsEvent = {
  httpMethod: 'OPTIONS',
  headers: {
    'access-control-request-method': 'POST',
    'access-control-request-headers': 'content-type'
  },
  body: ''
};

// Mock event object for actual POST request
const postEvent = {
  httpMethod: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    courseId: '68abf3833a374a37e2bcc994',
    amount: 1
  })
};

// Test function
async function testCreateOrder() {
  // Test OPTIONS handling
  console.log('🧪 Testing OPTIONS request...');
  try {
    const optionsResult = await createOrder(optionsEvent);
    console.log('✅ OPTIONS result:', optionsResult);
  } catch (error) {
    console.error('❌ OPTIONS error:', error);
  }

  // Test actual POST request
  console.log('\n🧪 Testing POST request...');
  try {
    const postResult = await createOrder(postEvent);
    console.log('✅ POST result:', postResult);
  } catch (error) {
    console.error('❌ POST error:', error);
  }
}

// Run the test
testCreateOrder().catch(console.error);
