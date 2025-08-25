# Frontend API Updates for Lambda Backend

This document outlines the changes made to the frontend to integrate with the new AWS Lambda backend.

## 🔄 What Changed

### Before (ECS Backend)
- Frontend was calling `http://skillizee-alb-1427898180.us-east-1.elb.amazonaws.com`
- CORS errors due to missing headers
- Old Express.js backend endpoints

### After (Lambda Backend)
- Frontend now calls Lambda API Gateway endpoints
- Proper CORS configuration
- Serverless functions with better error handling

## 📁 New Files Created

### 1. `src/utils/api.js`
- **Purpose**: Utility functions for API calls
- **Features**:
  - Generic `apiGet` and `apiPost` functions
  - Specific functions for each endpoint
  - Error handling and logging
  - Bulk testing functionality

### 2. `src/components/APITestComponent.jsx`
- **Purpose**: UI for testing Lambda backend endpoints
- **Features**:
  - Test individual endpoints
  - Test all endpoints at once
  - Configure test data
  - View detailed responses
  - Accessible at `/api-test` route

### 3. `backend/` directory
- **Purpose**: Complete Lambda backend implementation
- **Contents**:
  - `lambda.js` - All Lambda functions
  - `serverless.yml` - Serverless Framework config
  - `package.json` - Dependencies and scripts
  - `deploy-lambda.sh` - Deployment automation
  - `env.example` - Environment variables template
  - `README-LAMBDA.md` - Backend documentation

## 🔧 Files Modified

### 1. `src/config/api.js`
- **Changes**:
  - Updated base URLs to point to Lambda API Gateway
  - Added staging environment configuration
  - Added `testWebhook` endpoint
  - Fixed environment detection logic

### 2. `src/App.jsx`
- **Changes**:
  - Imported `APITestComponent`
  - Added "API Test" navigation link
  - Added `/api-test` route

### 3. `src/hooks/usePayment.js`
- **Status**: Already compatible with new API structure
- **Note**: Uses `API_ENDPOINTS` from config, so automatically works with new URLs

## 🚀 How to Use

### 1. Test the Backend
Navigate to `/api-test` in your frontend to:
- Test individual endpoints
- Run bulk tests
- Verify CORS is working
- Check response formats

### 2. Update API Configuration
When you deploy the Lambda backend:
1. Get the API Gateway URL from deployment
2. Update `src/config/api.js` with the correct URLs
3. Test endpoints using the API Test component

### 3. Deploy Lambda Backend
```bash
cd backend
npm install
# Copy env.example to .env and fill in values
npm run deploy
```

## 🔍 Testing Workflow

### Step 1: Deploy Lambda Backend
```bash
cd backend
npm run deploy
```

### Step 2: Update Frontend Config
Update `src/config/api.js` with the deployed API Gateway URL.

### Step 3: Test Endpoints
Use the API Test component to verify all endpoints work.

### Step 4: Test Payment Flow
1. Go to LinkedIn course page
2. Click "Enroll Now"
3. Fill out the form
4. Verify the enrollment check works
5. Test payment flow (if configured)

## 🚨 Common Issues & Solutions

### 1. CORS Errors
**Problem**: Still getting CORS errors after switching to Lambda
**Solution**: 
- Verify Lambda functions have proper CORS headers
- Check API Gateway CORS settings
- Ensure OPTIONS method is configured

### 2. API Gateway URL Not Working
**Problem**: Frontend can't reach Lambda endpoints
**Solution**:
- Verify the API Gateway URL is correct
- Check if Lambda is deployed and running
- Verify API Gateway has proper permissions

### 3. SSM Parameter Errors
**Problem**: Lambda functions can't read environment variables
**Solution**:
- Verify SSM parameters exist
- Check IAM permissions for Lambda
- Ensure parameter names match exactly

## 📊 API Endpoints Reference

| Endpoint | Method | Purpose | Required Fields |
|----------|--------|---------|-----------------|
| `/api/health` | GET | Health check | None |
| `/api/test-webhook` | POST | Test webhook | Any data |
| `/api/create-order` | POST | Create order | name, email, phone, courseId, amount |
| `/api/check-user-enrollment` | POST | Check enrollment | email, courseId |
| `/api/verify-payment-and-onboard` | POST | Complete enrollment | orderId, email, name, phone, courseId |
| `/api/course-info` | GET | Get course details | None |

## 🔐 Security Considerations

### Environment Variables
- All sensitive data stored in AWS SSM Parameter Store
- No hardcoded secrets in code
- Lambda functions have minimal required permissions

### CORS Configuration
- Configured for development and production
- Allows localhost for development
- Restrictive in production environments

## 📈 Performance Benefits

### Lambda Backend
- **Cold Start**: ~100-200ms first request
- **Warm Start**: ~10-50ms subsequent requests
- **Scalability**: Automatic scaling based on demand
- **Cost**: Pay-per-request, no idle costs

### Frontend
- **Reduced Bundle Size**: No backend code in frontend
- **Better Caching**: Static frontend assets
- **CDN Ready**: Can be deployed to CDN for global performance

## 🔄 Migration Checklist

- [ ] Deploy Lambda backend
- [ ] Update frontend API configuration
- [ ] Test all endpoints using API Test component
- [ ] Verify payment flow works end-to-end
- [ ] Test CORS from localhost
- [ ] Deploy frontend to production
- [ ] Monitor Lambda function logs
- [ ] Set up CloudWatch alarms

## 📞 Support

If you encounter issues:
1. Check the API Test component for endpoint status
2. Review Lambda CloudWatch logs
3. Verify API Gateway configuration
4. Check this documentation
5. Contact the development team

## 🔗 Related Documentation

- [Lambda Backend README](backend/README-LAMBDA.md)
- [Serverless Framework Docs](https://www.serverless.com/framework/docs/)
- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/)
- [API Gateway Docs](https://docs.aws.amazon.com/apigateway/)
