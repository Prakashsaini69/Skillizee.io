// Local test script for Razorpay SDK functionality
require('dotenv').config();
const Razorpay = require('razorpay');

// Initialize Razorpay client
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_GuVAJW8fx8JjNi',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'your_razorpay_secret_here'
});

// Test function
async function testRazorpay() {
  try {
    console.log('🧪 Testing Razorpay SDK locally...');
    console.log('📋 Environment variables:');
    console.log('   RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
    console.log('   RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET ? '***LOADED***' : 'NOT LOADED');
    
    console.log('\n🔑 Testing Razorpay authentication...');
    
    // Test 1: Create a test order
    const testOrder = await razorpay.orders.create({
      amount: 100, // 1 rupee test order
      currency: 'INR',
      receipt: `test_${Date.now()}`,
      notes: {
        test: 'true'
      }
    });
    
    console.log('✅ Test order created successfully!');
    console.log('   Order ID:', testOrder.id);
    console.log('   Amount:', testOrder.amount, 'paise');
    console.log('   Currency:', testOrder.currency);
    
    // Test 2: Fetch the order
    const fetchedOrder = await razorpay.orders.fetch(testOrder.id);
    console.log('✅ Order fetched successfully!');
    console.log('   Fetched Order ID:', fetchedOrder.id);
    
    // Test 3: Create a real course order
    const courseOrder = await razorpay.orders.create({
      amount: 99900, // 999 rupees in paise
      currency: 'INR',
      receipt: `course_linkedin_${Date.now()}`,
      notes: {
        courseId: 'linkedin-mastery',
        courseName: 'LinkedIn Mastery Course',
        studentName: 'Test Student',
        studentEmail: 'test@example.com'
      }
    });
    
    console.log('✅ Course order created successfully!');
    console.log('   Order ID:', courseOrder.id);
    console.log('   Amount:', courseOrder.amount, 'paise');
    console.log('   Receipt:', courseOrder.receipt);
    
    console.log('\n🎉 All tests passed! Razorpay SDK is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.error && error.error.description) {
      console.error('   Error details:', error.error.description);
    }
    
    if (error.statusCode) {
      console.error('   Status code:', error.statusCode);
    }
    
    console.log('\n🔧 Troubleshooting tips:');
    console.log('   1. Check if your .env file has correct Razorpay credentials');
    console.log('   2. Verify your Razorpay account is active');
    console.log('   3. Check if API keys haven\'t been regenerated');
    console.log('   4. Ensure no IP restrictions on your Razorpay account');
  }
}

// Run the test
console.log('🚀 Starting local Razorpay SDK test...\n');
testRazorpay();
