# SkilliZee Lambda Backend

This directory contains the AWS Lambda backend for SkilliZee's payment and enrollment system.

## 🚀 Quick Start

### Prerequisites
- AWS CLI configured with appropriate permissions
- Node.js 18+ installed
- Serverless Framework installed globally

### Installation
```bash
cd backend
npm install
```

### Environment Setup
1. Copy `env.example` to `.env`
2. Fill in your actual values:
   - Razorpay credentials
   - Graphy LMS credentials
   - Course ID
   - AWS configuration

### Deployment
```bash
# Deploy to dev stage
npm run deploy

# Deploy to production
npm run deploy:prod

# Deploy to staging
npm run deploy:staging
```

## 📁 Project Structure

```
backend/
├── lambda.js              # Main Lambda functions
├── serverless.yml         # Serverless Framework configuration
├── package.json           # Dependencies and scripts
├── deploy-lambda.sh       # Deployment script
├── env.example            # Environment variables template
└── README-LAMBDA.md       # This file
```

## 🔧 Lambda Functions

### 1. Health Check (`/api/health`)
- **Method**: GET
- **Purpose**: Verify backend is running
- **Response**: Status and timestamp

### 2. Test Webhook (`/api/test-webhook`)
- **Method**: POST
- **Purpose**: Test webhook functionality
- **Response**: Echo received data

### 3. Create Order (`/api/create-order`)
- **Method**: POST
- **Purpose**: Create payment order
- **Required Fields**: name, email, phone, courseId, amount
- **Response**: Order details with ID

### 4. Check User Enrollment (`/api/check-user-enrollment`)
- **Method**: POST
- **Purpose**: Verify user isn't already enrolled
- **Required Fields**: email, courseId
- **Response**: Enrollment status

### 5. Verify Payment & Onboard (`/api/verify-payment-and-onboard`)
- **Method**: POST
- **Purpose**: Complete enrollment after payment
- **Required Fields**: orderId, email, name, phone, courseId
- **Response**: Onboarding result

### 6. Course Info (`/api/course-info`)
- **Method**: GET
- **Purpose**: Get course details
- **Response**: Course information

## 🌐 API Gateway

The Serverless Framework automatically creates an API Gateway with:
- CORS enabled for all endpoints
- OPTIONS method support for preflight requests
- Automatic endpoint generation

## 🔐 Security

### Environment Variables
Sensitive data is stored in AWS Systems Manager Parameter Store:
- `/skillizee/razorpay/key_id`
- `/skillizee/razorpay/key_secret`
- `/skillizee/graphy/merchant_id`
- `/skillizee/graphy/api_token`
- `/skillizee/course_id`
- `/skillizee/razorpay/webhook_secret`

### IAM Permissions
Lambda functions have minimal required permissions:
- Read access to SSM parameters
- CloudWatch Logs for monitoring

## 📊 Monitoring

### CloudWatch Logs
Each function logs to CloudWatch with structured logging:
- Request/response data
- Error details
- Performance metrics

### Serverless Commands
```bash
# View logs
npm run logs

# Get deployment info
npm run info

# Remove deployment
npm run remove
```

## 🧪 Testing

### Local Testing
```bash
# Start offline mode
npm run offline

# Test endpoints locally
curl http://localhost:3000/dev/api/health
```

### Frontend Integration
Use the API Test component at `/api-test` to test all endpoints:
- Individual endpoint testing
- Bulk testing
- Response validation

## 🔄 CORS Configuration

CORS is configured at multiple levels:
1. **Serverless Framework**: `cors: true` for all endpoints
2. **Lambda Functions**: Manual CORS headers in responses
3. **OPTIONS Support**: Preflight request handling

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Verify CORS headers in Lambda responses
   - Check API Gateway CORS settings
   - Ensure OPTIONS method is configured

2. **SSM Parameter Errors**
   - Verify parameters exist in Parameter Store
   - Check IAM permissions
   - Ensure parameter names match exactly

3. **Deployment Failures**
   - Check AWS CLI configuration
   - Verify Serverless Framework version
   - Review CloudFormation stack events

### Debug Commands
```bash
# Check AWS configuration
aws sts get-caller-identity

# Verify Serverless version
serverless --version

# Check deployment status
serverless info
```

## 📈 Cost Optimization

- **Memory**: Functions use minimal memory (128MB default)
- **Timeout**: Short timeouts (30s default)
- **Cold Starts**: Consider provisioned concurrency for production
- **Logging**: Structured logging reduces CloudWatch costs

## 🔄 Updates and Maintenance

### Adding New Functions
1. Add function to `lambda.js`
2. Update `serverless.yml` with new function definition
3. Deploy with `npm run deploy`

### Updating Dependencies
```bash
npm update
npm run deploy
```

### Environment Changes
1. Update SSM parameters
2. Redeploy affected functions
3. Test thoroughly before production

## 📞 Support

For issues or questions:
1. Check CloudWatch logs
2. Review this README
3. Check Serverless Framework documentation
4. Contact the development team

## 🔗 Useful Links

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
