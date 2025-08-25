const AWS = require('aws-sdk');

// Initialize AWS SDK
const ssm = new AWS.SSM();

// Helper function to create response with CORS headers
const createResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Requested-With',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Credentials': 'false'
  },
  body: JSON.stringify(body)
});

// Handle CORS preflight requests
const handleOptions = () => createResponse(200, { message: 'OK' });

// Helper function to get SSM parameter
const getSSMParameter = async (paramName) => {
  try {
    const response = await ssm.getParameter({
      Name: paramName,
      WithDecryption: true
    }).promise();
    return response.Parameter.Value;
  } catch (error) {
    console.error(`Error getting SSM parameter ${paramName}:`, error);
    throw error;
  }
};

// Helper function to generate unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Helper function to validate input
const validateInput = (data, requiredFields) => {
  const errors = [];
  requiredFields.forEach(field => {
    if (!data[field] || data[field].toString().trim() === '') {
      errors.push(`${field} is required`);
    }
  });
  return errors;
};

// Health check endpoint
exports.health = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    return createResponse(200, {
      success: true,
      message: 'Lambda backend is healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.STAGE || 'dev'
    });
  } catch (error) {
    console.error('Health check error:', error);
    return createResponse(500, {
      success: false,
      message: 'Health check failed',
      error: error.message
    });
  }
};

// Test webhook endpoint
exports.testWebhook = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    return createResponse(200, {
      success: true,
      message: 'Webhook test successful',
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Webhook test error:', error);
    return createResponse(500, {
      success: false,
      message: 'Webhook test failed',
      error: error.message
    });
  }
};

// Create order endpoint
exports.createOrder = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'courseId', 'amount'];
    const validationErrors = validateInput(body, requiredFields);
    
    if (validationErrors.length > 0) {
      return createResponse(400, {
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Generate order ID
    const orderId = generateId();
    
    // Create order object
    const order = {
      id: orderId,
      name: body.name,
      email: body.email,
      phone: body.phone,
      courseId: body.courseId,
      amount: body.amount,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    console.log('Order created:', order);

    return createResponse(200, {
      success: true,
      message: 'Order created successfully',
      data: order
    });
  } catch (error) {
    console.error('Create order error:', error);
    return createResponse(500, {
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
};

// Payment webhook endpoint
exports.paymentWebhook = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Verify webhook signature (implement proper verification)
    console.log('Payment webhook received:', body);
    
    return createResponse(200, {
      success: true,
      message: 'Webhook processed successfully'
    });
  } catch (error) {
    console.error('Payment webhook error:', error);
    return createResponse(500, {
      success: false,
      message: 'Webhook processing failed',
      error: error.message
    });
  }
};

// Check user enrollment endpoint
exports.checkUserEnrollment = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Validate required fields
    const requiredFields = ['email', 'courseId'];
    const validationErrors = validateInput(body, requiredFields);
    
    if (validationErrors.length > 0) {
      return createResponse(400, {
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Get Graphy credentials from SSM
    const graphyMerchantId = await getSSMParameter('/skillizee/graphy/merchant_id');
    const graphyApiToken = await getSSMParameter('/skillizee/graphy/api_token');
    const courseId = await getSSMParameter('/skillizee/course_id');

    // Check if user is already enrolled (simplified check)
    // In production, this would call Graphy API to check enrollment
    const isEnrolled = false; // Placeholder - implement actual Graphy API call
    
    if (isEnrolled) {
      return createResponse(200, {
        success: true,
        alreadyEnrolled: true,
        message: 'User is already enrolled in this course'
      });
    }

    return createResponse(200, {
      success: true,
      alreadyEnrolled: false,
      message: 'User is not enrolled, proceeding with payment'
    });
  } catch (error) {
    console.error('Check user enrollment error:', error);
    return createResponse(500, {
      success: false,
      message: 'Failed to check user enrollment',
      error: error.message
    });
  }
};

// Verify payment and onboard user endpoint
exports.verifyPaymentAndOnboard = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Validate required fields
    const requiredFields = ['orderId', 'email', 'name', 'phone', 'courseId'];
    const validationErrors = validateInput(body, requiredFields);
    
    if (validationErrors.length > 0) {
      return createResponse(400, {
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Get Graphy credentials from SSM
    const graphyMerchantId = await getSSMParameter('/skillizee/graphy/merchant_id');
    const graphyApiToken = await getSSMParameter('/skillizee/graphy/api_token');
    const courseId = await getSSMParameter('/skillizee/course_id');

    // Simulate user onboarding to Graphy
    // In production, this would call Graphy API to create user and enroll
    console.log('Onboarding user to Graphy:', {
      email: body.email,
      name: body.name,
      courseId: body.courseId
    });

    // Simulate successful onboarding
    const onboardingResult = {
      userId: generateId(),
      enrollmentId: generateId(),
      status: 'enrolled',
      enrolledAt: new Date().toISOString()
    };

    return createResponse(200, {
      success: true,
      message: 'User successfully onboarded and enrolled',
      data: onboardingResult
    });
  } catch (error) {
    console.error('Verify payment and onboard error:', error);
    return createResponse(500, {
      success: false,
      message: 'Failed to onboard user',
      error: error.message
    });
  }
};

// Course info endpoint
exports.courseInfo = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    // Get course ID from SSM
    const courseId = await getSSMParameter('/skillizee/course_id');
    
    const courseInfo = {
      id: courseId,
      name: 'LinkedIn Mastery Course',
      description: 'Master LinkedIn for career growth and networking',
      price: 999,
      duration: '6 weeks',
      modules: [
        'LinkedIn Profile Optimization',
        'Content Creation Strategy',
        'Networking Best Practices',
        'Personal Branding',
        'Lead Generation',
        'Career Advancement'
      ]
    };

    return createResponse(200, {
      success: true,
      data: courseInfo
    });
  } catch (error) {
    console.error('Course info error:', error);
    return createResponse(500, {
      success: false,
      message: 'Failed to get course info',
      error: error.message
    });
  }
};
