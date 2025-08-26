# Payment Setup Guide for SkilliZee

## Overview
This guide covers the complete setup for Razorpay payment integration with automatic payment capture and webhook handling.

## Payment Capture Configuration

### Why Payments Were Only Authorized
Previously, payments were only getting **authorized** but not **captured**. This happened because:
1. The Razorpay integration was missing the `capture: true` option
2. The webhook wasn't properly configured to handle payment capture events
3. Payment verification was incomplete

### Current Fixes Implemented
1. **Frontend**: Added `capture: true` to Razorpay options
2. **Backend**: Enhanced webhook to handle `payment.captured` events
3. **Backend**: Added payment signature verification in `verifyPaymentAndOnboard`
4. **Backend**: Added payment status verification with Razorpay API

## Webhook Setup

### 1. Generate Webhook Secret
1. Go to Razorpay Dashboard → Settings → Webhooks
2. Create a new webhook or edit existing one
3. Set the webhook URL: `https://your-lambda-api-gateway-url/dev/api/payment-webhook`
4. **Important**: Copy the webhook secret that Razorpay generates

### 2. Set Environment Variables
In your AWS Lambda console, add these environment variables:
```
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_from_razorpay_dashboard
```

### 3. Webhook Events to Handle
The webhook now handles these events:
- `payment.captured` - Payment successfully captured
- `payment.failed` - Payment failed
- `order.paid` - Order marked as paid

## Payment Flow

### 1. Order Creation
- Frontend creates order via `/api/create-order`
- Backend creates Razorpay order and returns order ID

### 2. Payment Processing
- Frontend opens Razorpay gateway with `capture: true`
- User completes payment
- Razorpay automatically captures the payment

### 3. Payment Verification
- Frontend receives payment success response
- Frontend calls `/api/verify-payment-and-onboard` with:
  - `orderId`: Razorpay order ID
  - `paymentId`: Razorpay payment ID
  - `signature`: Payment signature for verification

### 4. Backend Verification
- Backend verifies payment signature
- Backend fetches payment details from Razorpay
- Backend confirms payment status is "captured"
- Backend proceeds with user onboarding

### 5. User Onboarding
- Check if user exists on Graphy LMS
- Create user if doesn't exist
- Enroll user in the course
- Return success response

## Testing Payment Capture

### 1. Test Order Creation
```bash
curl -X POST https://your-api-gateway/dev/api/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9999999999",
    "courseId": "your_course_id",
    "amount": 999
  }'
```

### 2. Test Payment Verification
```bash
curl -X POST https://your-api-gateway/dev/api/verify-payment-and-onboard \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "order_xxx",
    "paymentId": "pay_xxx",
    "signature": "valid_signature",
    "email": "test@example.com",
    "name": "Test User",
    "phone": "9999999999",
    "courseId": "your_course_id",
    "password": "test123"
  }'
```

## Troubleshooting

### Payment Still Not Captured
1. Check if `capture: true` is set in frontend Razorpay options
2. Verify webhook secret is correctly set in AWS Lambda
3. Check Razorpay dashboard for webhook delivery status
4. Review Lambda CloudWatch logs for webhook processing

### Signature Verification Failed
1. Ensure `RAZORPAY_KEY_SECRET` is correct
2. Verify the signature calculation matches Razorpay's format
3. Check if payment ID and order ID are correct

### Webhook Not Receiving Events
1. Verify webhook URL is accessible
2. Check if webhook is active in Razorpay dashboard
3. Ensure CORS is properly configured
4. Review API Gateway logs for webhook requests

## Security Considerations

1. **Webhook Secret**: Never expose the webhook secret in client-side code
2. **Signature Verification**: Always verify webhook signatures
3. **Payment Verification**: Double-check payment status with Razorpay API
4. **Environment Variables**: Use AWS Secrets Manager for production secrets

## Monitoring

### CloudWatch Logs
Monitor these Lambda functions:
- `createOrder` - Order creation logs
- `paymentWebhook` - Webhook processing logs
- `verifyPaymentAndOnboard` - Payment verification logs

### Razorpay Dashboard
- Check webhook delivery status
- Monitor payment success rates
- Review failed payment reasons

## Next Steps

1. Deploy the updated backend code
2. Set the webhook secret in AWS Lambda
3. Test the complete payment flow
4. Monitor webhook events and payment capture
5. Verify user onboarding and enrollment
