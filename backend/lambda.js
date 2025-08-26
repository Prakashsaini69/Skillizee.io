// Fresh Lambda function for SkilliZee Backend using Razorpay SDK
const Razorpay = require('razorpay');

// Initialize Razorpay client
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Graphy LMS API Helper Functions
const GRAPHY_BASE_URL = 'https://api.ongraphy.com/public';

// A/B Testing function to determine course ID based on distribution
const getCourseIdForEnrollment = (courseSlug, courseIdA, courseIdB) => {
  // Generate random number between 0 and 1
  const random = Math.random();
  
  // 80% chance for CourseID A, 20% chance for CourseID B
  if (random < 0.8) {
    console.log(`🎯 A/B Test: User assigned to CourseID A (80% group): ${courseIdA}`);
    return courseIdA;
  } else {
    console.log(`🎯 A/B Test: User assigned to CourseID B (20% group): ${courseIdB}`);
    return courseIdB;
  }
};

// Check if user exists and is enrolled on Graphy LMS
const checkUserOnGraphy = async (email, courseId) => {
  try {
    // URL encode the email for the query parameter - exactly as per documentation
    const encodedEmail = encodeURIComponent(JSON.stringify({ email: email }));
    
    const url = `${GRAPHY_BASE_URL}/v2/learners?mid=${process.env.GRAPHY_MERCHANT_ID}&key=${process.env.GRAPHY_API_TOKEN}&courseInfo=true&query=${encodedEmail}`;
    
    console.log('Checking user on Graphy:', url);
    
    const response = await fetch(url);
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Graphy user check API returned non-JSON response:', textResponse);
      throw new Error(`Graphy user check API returned non-JSON response: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Graphy API response:', data);
    
    if (data.total === 0) {
      // User doesn't exist - as per documentation response format
      return { exists: false, enrolled: false, user: null };
    }
    
    if (data.total > 0 && data.data.length > 0) {
      const user = data.data[0];
      
      // Check if user is enrolled in the specific course
      // According to documentation, courses array has: id, Title, Assigned Date, progress, totalTime, completed
      const isEnrolledInCourse = user.courses && user.courses.some(course => 
        course.id === courseId || course.Title.toLowerCase().includes(courseId.toLowerCase())
      );
      
      return { 
        exists: true, 
        enrolled: isEnrolledInCourse, 
        user: user 
      };
    }
    
    return { exists: false, enrolled: false, user: null };
  } catch (error) {
    console.error('Error checking user on Graphy:', error);
    throw error;
  }
};

// Create new user on Graphy LMS
const createUserOnGraphy = async (userData) => {
  try {
    // According to documentation: POST https://api.ongraphy.com/public/v1/learners
    // Body: key, email, name, password, sendEmail, mobile
    const formData = new URLSearchParams();
          formData.append('mid', process.env.GRAPHY_MERCHANT_ID);
          formData.append('key', process.env.GRAPHY_API_TOKEN);
    formData.append('email', userData.email);
    formData.append('name', userData.name);
    formData.append('password', userData.password);
    formData.append('sendEmail', 'true');
    formData.append('mobile', userData.phone);
    
    console.log('Creating user on Graphy with form data:', formData.toString());
    
    const response = await fetch(`${GRAPHY_BASE_URL}/v1/learners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    console.log('Graphy API response status:', response.status);
    console.log('Graphy API response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Graphy API returned non-JSON response:', textResponse);
      throw new Error(`Graphy API returned non-JSON response: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Graphy user creation response:', result);
    
    if (response.ok) {
      return result;
    } else {
      throw new Error(`Failed to create user on Graphy: ${result.message || response.statusText}`);
    }
  } catch (error) {
    console.error('Error creating user on Graphy:', error);
    throw error;
  }
};

// Enroll user in specific course on Graphy LMS
const enrollUserOnGraphy = async (email, courseId) => {
  try {
    // According to documentation: https://api.ongraphy.com/public/v1/assign?Content-Type=<string>&mid=aarnasingh&key=...&email=...&productId=...
    const url = `${GRAPHY_BASE_URL}/v1/assign?Content-Type=application/x-www-form-urlencoded&mid=${process.env.GRAPHY_MERCHANT_ID}&key=${process.env.GRAPHY_API_TOKEN}&email=${encodeURIComponent(email)}&productId=${encodeURIComponent(courseId)}`;
    
    console.log('Enrolling user on Graphy with URL:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      // No body needed as per documentation - all parameters are in URL
    });
    
    console.log('Graphy enrollment response status:', response.status);
    console.log('Graphy enrollment response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Graphy enrollment API returned non-JSON response:', textResponse);
      throw new Error(`Graphy enrollment API returned non-JSON response: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Graphy enrollment response:', result);
    
    if (response.ok) {
      return result;
    } else {
      throw new Error(`Failed to enroll user on Graphy: ${result.message || response.statusText}`);
    }
  } catch (error) {
    console.error('Error enrolling user on Graphy:', error);
    throw error;
  }
};

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
const handleOptions = () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Requested-With',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Credentials': 'false'
  },
  body: JSON.stringify({ message: 'OK' })
});

// Health check endpoint
exports.health = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    return createResponse(200, {
      success: true,
      message: 'Lambda backend is healthy and ready for Razorpay SDK',
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

// Test Razorpay credentials endpoint using SDK
exports.testRazorpay = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    console.log('Testing Razorpay credentials with SDK...');
    console.log('Key ID:', process.env.RAZORPAY_KEY_ID);
    console.log('Secret loaded:', process.env.RAZORPAY_KEY_SECRET ? 'YES' : 'NO');
    
         // Test Razorpay authentication by creating a test order
     const testOrder = await razorpay.orders.create({
       amount: 100, // 1 rupee test order
       currency: 'INR',
       receipt: `test_${Date.now().toString().slice(-8)}`,
       notes: {
         test: 'true'
       }
     });
    
    console.log('Test order created successfully:', testOrder);
    
    return createResponse(200, {
      success: true,
      message: 'Razorpay credentials are valid!',
      testOrder: {
        id: testOrder.id,
        amount: testOrder.amount,
        currency: testOrder.currency
      }
    });
  } catch (error) {
    console.error('Razorpay test error:', error);
    return createResponse(400, {
      success: false,
      message: 'Razorpay credentials are invalid',
      error: error.message
    });
  }
};

// Create order endpoint using Razorpay SDK
exports.createOrder = async (event) => {
  // Handle OPTIONS preflight request - check multiple ways since httpMethod might be undefined
  if (event.httpMethod === 'OPTIONS' || 
      event.headers?.['access-control-request-method'] === 'POST' ||
      event.headers?.['access-control-request-headers']) {
    console.log('Handling OPTIONS preflight request');
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    console.log('Raw event body:', event.body);
    console.log('Event headers:', event.headers);
    console.log('Event method:', event.httpMethod);
    
    // Skip processing if no body or empty body
    if (!event.body || event.body === '{}' || event.body === '') {
      return createResponse(400, {
        success: false,
        message: 'Request body is required',
        error: 'Empty or missing request body'
      });
    }
    
    let body;
    try {
      body = JSON.parse(event.body);
      console.log('Parsed body:', body);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      console.error('Raw body that failed to parse:', event.body);
      return createResponse(400, {
        success: false,
        message: 'Invalid JSON in request body',
        error: parseError.message
      });
    }
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'courseId', 'amount'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return createResponse(400, {
        success: false,
        message: 'Missing required fields',
        missingFields
      });
    }

    console.log('Creating Razorpay order for:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      courseId: body.courseId,
      amount: body.amount
    });

    // Create Razorpay order using SDK
    const razorpayOrder = await razorpay.orders.create({
      amount: body.amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `course_${body.courseId.substring(0, 8)}_${Date.now().toString().slice(-8)}`,
      notes: {
        courseId: body.courseId,
        courseName: body.courseName || `Course ${body.courseId}`,
        studentName: body.name,
        studentEmail: body.email
      }
    });

    console.log('Razorpay order created successfully:', razorpayOrder);

    // Create our order object
    const order = {
      id: razorpayOrder.id, // Use Razorpay order ID
      razorpayOrderId: razorpayOrder.id,
      name: body.name,
      email: body.email,
      phone: body.phone,
      courseId: body.courseId,
      amount: body.amount,
      status: 'pending',
      createdAt: new Date().toISOString(),
      razorpayOrder: razorpayOrder
    };

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
    
    console.log('Payment webhook received:', body);
    
    // Verify webhook signature for security
    const signature = event.headers['x-razorpay-signature'];
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    
    if (!signature || !webhookSecret) {
      console.error('Missing signature or webhook secret');
      return createResponse(400, {
        success: false,
        message: 'Invalid webhook signature'
      });
    }
    
    // Verify webhook signature
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(event.body)
      .digest('hex');
    
    if (signature !== expectedSignature) {
      console.error('Invalid webhook signature');
      return createResponse(400, {
        success: false,
        message: 'Invalid webhook signature'
      });
    }
    
    // Process different webhook events
    if (body.event === 'payment.captured') {
      console.log('Payment captured successfully:', body.payload.payment.entity);
      
      // Payment is already captured by Razorpay
      // You can add additional business logic here if needed
      
    } else if (body.event === 'payment.failed') {
      console.log('Payment failed:', body.payload.payment.entity);
      
      // Handle failed payment
      // You can add logic to notify user, update database, etc.
      
    } else if (body.event === 'order.paid') {
      console.log('Order paid successfully:', body.payload.order.entity);
      
      // Order is paid but payment might not be captured yet
      // Razorpay automatically captures payments for orders
      
    }
    
    return createResponse(200, {
      success: true,
      message: 'Webhook processed successfully',
      event: body.event
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
    if (!body.email || !body.courseId) {
      return createResponse(400, {
        success: false,
        message: 'Email and courseId are required'
      });
    }

    console.log('Checking user enrollment:', {
      email: body.email,
      courseId: body.courseId
    });
    
    // Check if user exists and is enrolled on Graphy LMS
    const userCheck = await checkUserOnGraphy(body.email, body.courseId);
    
    console.log('User check result:', userCheck);
    
    if (userCheck.exists && userCheck.enrolled) {
      return createResponse(200, {
        success: true,
        alreadyEnrolled: true,
        message: 'User is already enrolled in this course',
        userData: userCheck.user
      });
    }
    
    if (userCheck.exists && !userCheck.enrolled) {
      return createResponse(200, {
        success: true,
        alreadyEnrolled: false,
        userExists: true,
        message: 'User exists but not enrolled in this course, proceeding with enrollment'
      });
    }
    
    // User doesn't exist
    return createResponse(200, {
      success: true,
      alreadyEnrolled: false,
      userExists: false,
      message: 'User does not exist, will be created and enrolled'
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
    const requiredFields = ['orderId', 'paymentId', 'signature', 'email', 'name', 'phone', 'courseId', 'password'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      console.error('Received body:', body);
      return createResponse(400, {
        success: false,
        message: 'Missing required fields',
        missingFields
      });
    }

    console.log('Verifying payment and starting user onboarding:', {
      orderId: body.orderId,
      paymentId: body.paymentId,
      email: body.email,
      name: body.name,
      courseId: body.courseId
    });
    
    // Verify payment signature with Razorpay
    const crypto = require('crypto');
    const text = body.orderId + '|' + body.paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex');
    
    console.log('Signature verification:', {
      received: body.signature,
      expected: expectedSignature,
      text: text,
      secret: process.env.RAZORPAY_KEY_SECRET ? 'SET' : 'NOT SET'
    });
    
    if (body.signature !== expectedSignature) {
      console.error('Payment signature verification failed');
      return createResponse(400, {
        success: false,
        message: 'Payment verification failed - invalid signature'
      });
    }
    
    // Verify payment status with Razorpay
    try {
      const payment = await razorpay.payments.fetch(body.paymentId);
      console.log('Payment details from Razorpay:', payment);
      
      // If payment is authorized but not captured, capture it automatically
      if (payment.status === 'authorized') {
        console.log('Payment is authorized, attempting auto-capture...');
        try {
          const captureResult = await razorpay.payments.capture(body.paymentId, payment.amount);
          console.log('Auto-capture successful:', captureResult);
          // Update payment status for further processing
          payment.status = captureResult.status;
        } catch (captureError) {
          console.error('Auto-capture failed:', captureError);
          return createResponse(400, {
            success: false,
            message: 'Payment capture failed',
            error: captureError.message
          });
        }
      }
      
      if (payment.status !== 'captured' && payment.status !== 'authorized') {
        console.error('Payment not completed:', payment.status);
        return createResponse(400, {
          success: false,
          message: 'Payment not completed - status: ' + payment.status
        });
      }
      
      // Note: Amount verification removed as it was comparing payment.amount with itself
      console.log('Payment amount:', payment.amount);
      console.log('Payment status:', payment.status);
      
    } catch (razorpayError) {
      console.error('Error fetching payment from Razorpay:', razorpayError);
      return createResponse(400, {
        success: false,
        message: 'Failed to verify payment with Razorpay'
      });
    }
    
    console.log('Payment verified successfully, proceeding with onboarding...');
    
    let onboardingResult = {};
    
    // Check if user already exists on Graphy
    const userCheck = await checkUserOnGraphy(body.email, body.courseId);
    
    if (!userCheck.exists) {
      // User doesn't exist - create new user
      console.log('Creating new user on Graphy LMS...');
      const userCreationResult = await createUserOnGraphy({
        email: body.email,
        name: body.name,
        password: body.password,
        phone: body.phone
      });
      
      console.log('User created on Graphy:', userCreationResult);
      onboardingResult.userCreated = true;
      onboardingResult.userData = userCreationResult;
    } else {
      console.log('User already exists on Graphy LMS');
      onboardingResult.userCreated = false;
      onboardingResult.userData = userCheck.user;
    }
    
    // Enroll user in the course
    console.log('Enrolling user in course...');
    const enrollmentResult = await enrollUserOnGraphy(body.email, body.courseId);
    
    console.log('User enrolled in course:', enrollmentResult);
    onboardingResult.enrollmentData = enrollmentResult;
    onboardingResult.status = 'enrolled';
    onboardingResult.enrolledAt = new Date().toISOString();

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
    // Get course ID from query parameters or request body
    let courseId;
    if (event.httpMethod === 'GET' && event.queryStringParameters) {
      courseId = event.queryStringParameters.courseId;
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      courseId = body.courseId;
    }
    
    if (!courseId) {
      return createResponse(400, {
        success: false,
        message: 'Course ID is required',
        error: 'courseId parameter is missing'
      });
    }
    
    // Course information - can be made dynamic based on courseId
    const courseInfo = {
      id: courseId,
      name: process.env.COURSE_NAME || 'LinkedIn Mastery Course',
      description: process.env.COURSE_DESCRIPTION || 'Master LinkedIn for career growth and networking',
      price: parseInt(process.env.COURSE_PRICE) || 999,
      duration: process.env.COURSE_DURATION || '6 weeks',
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

// A/B Testing endpoint to get course ID for enrollment
exports.getEnrollmentCourseId = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return handleOptions();
  }

  try {
    let courseSlug;
    if (event.httpMethod === 'GET' && event.queryStringParameters) {
      courseSlug = event.queryStringParameters.courseSlug;
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      courseSlug = body.courseSlug;
    }
    
    if (!courseSlug) {
      return createResponse(400, {
        success: false,
        message: 'Course slug is required',
        error: 'courseSlug parameter is missing'
      });
    }

    // Course mapping for A/B testing
    const courseMapping = {
      'gudgum': {
        idA: '688093b21e8aec5c3378ca92',
        idB: '68abf3833a374a37e2bcc994'
      },
      'salty': {
        idA: '6868db3ecf70c7310edcaee2',
        idB: '68abf3833a374a37e2bcc995'
      },
      'startupSprint': {
        idA: '686b892ab27c214b8c9f103d',
        idB: '68abf3833a374a37e2bcc996'
      },
      'bundle1': {
        idA: '68abf3833a374a37e2bcc994',
        idB: '68a300f07020a54adec685da'
      },
      'bundle2': {
        idA: 'bundle2-course-id',
        idB: 'bundle2-course-id-b'
      }
    };

    const course = courseMapping[courseSlug];
    if (!course) {
      return createResponse(400, {
        success: false,
        message: 'Course not found',
        error: `Course slug '${courseSlug}' not found`
      });
    }

    // Use A/B testing to determine course ID
    const selectedCourseId = getCourseIdForEnrollment(courseSlug, course.idA, course.idB);
    
    return createResponse(200, {
      success: true,
      data: {
        courseSlug,
        courseId: selectedCourseId,
        distribution: selectedCourseId === course.idA ? 'A (80%)' : 'B (20%)',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Get enrollment course ID error:', error);
    return createResponse(500, {
      success: false,
      message: 'Failed to get enrollment course ID',
      error: error.message
    });
  }
};
