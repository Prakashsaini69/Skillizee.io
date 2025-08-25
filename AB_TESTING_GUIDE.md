# 🧪 A/B Testing System for SkilliZee

## Overview
This system implements A/B testing for course enrollment, allowing you to distribute users between two different course modules with different pricing/content strategies.

## 🎯 Distribution Strategy
- **80% of users** → Course Module A (Primary module)
- **20% of users** → Course Module B (Test module)

## 📁 Files Modified

### 1. `src/config/courses.js`
- Added `idB` field to each course
- Added A/B testing helper functions
- Each course now has two course IDs

### 2. `backend/lambda.js`
- Added A/B testing logic
- New endpoint: `/api/get-enrollment-course-id`
- Automatic course ID selection based on distribution

### 3. `backend/serverless.yml`
- Added new Lambda function for A/B testing endpoint

### 4. `src/hooks/usePayment.js`
- Integrated A/B testing into payment flow
- Automatic course ID selection during enrollment

### 5. `src/config/api.js`
- Added A/B testing endpoint configuration

## 🚀 How It Works

### Frontend Flow
1. User selects a course/bundle
2. Frontend passes `courseSlug` to PaymentModal
3. `usePayment` hook calls A/B testing endpoint
4. Backend randomly assigns Course ID A or B (80/20 split)
5. User is enrolled in the selected course module

### Backend Flow
1. `/api/get-enrollment-course-id` endpoint receives `courseSlug`
2. Random number generation determines distribution
3. Returns appropriate course ID (A or B)
4. Frontend uses this ID for all subsequent API calls

## 📊 Course Configuration

```javascript
// Example course with A/B testing
bundle1: {
  id: "688093b21e8aec5c3378ca92",     // CourseID A (80% of users)
  idB: "68abf3833a374a37e2bcc997",    // CourseID B (20% of users)
  name: "Bundle #1 - Complete Internship Collection",
  price: 1,
  // ... other properties
}
```

## 🔧 API Endpoints

### GET/POST `/api/get-enrollment-course-id`
**Query Parameters:**
- `courseSlug`: The course identifier (e.g., 'bundle1', 'gudgum')

**Response:**
```json
{
  "success": true,
  "data": {
    "courseSlug": "bundle1",
    "courseId": "688093b21e8aec5c3378ca92",
    "distribution": "A (80%)",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

## 🧪 Testing

### Test A/B Testing Distribution
```bash
cd backend
node test-ab-testing.js
```

This will run 1000 enrollment tests and show the distribution results.

### Expected Results
- Course A: ~800 enrollments (80% ± 5%)
- Course B: ~200 enrollments (20% ± 5%)

## 📝 Implementation Steps

### 1. Update Course IDs
Replace placeholder `idB` values in `courses.js` with actual Graphy LMS course IDs:

```javascript
bundle1: {
  id: "688093b21e8aec5c3378ca92",     // ✅ Real Course ID A
  idB: "68abf3833a374a37e2bcc997",    // ❌ Replace with real Course ID B
  // ...
}
```

### 2. Deploy Backend
```bash
cd backend
serverless deploy
```

### 3. Test Frontend
- Open any course page
- Click "Enroll Now"
- Check browser console for A/B testing logs
- Verify correct course ID is used

## 🔍 Monitoring & Analytics

### Console Logs
The system logs A/B testing decisions:
```
🎯 A/B Test: User assigned to CourseID A (80% group): 688093b21e8aec5c3378ca92
🎯 A/B Test: User assigned to CourseID B (20% group): 68abf3833a374a37e2bcc997
```

### Distribution Tracking
Each enrollment request includes distribution information in the response.

## ⚠️ Important Notes

1. **Course ID B Must Exist**: Ensure all `idB` values point to real courses on Graphy LMS
2. **Consistent Distribution**: The 80/20 split is per-request, not cumulative
3. **Fallback**: If A/B testing fails, system falls back to default course ID
4. **Testing**: Always test with real course IDs before production

## 🚨 Troubleshooting

### Common Issues
1. **Course ID B Not Found**: Update `idB` values with real Graphy LMS course IDs
2. **Distribution Not Working**: Check browser console for A/B testing logs
3. **API Errors**: Verify Lambda function deployment and endpoint configuration

### Debug Steps
1. Check browser console for A/B testing logs
2. Verify course IDs exist on Graphy LMS
3. Test A/B testing endpoint directly
4. Check Lambda function logs in AWS Console

## 📈 Future Enhancements

- **Dynamic Distribution**: Adjust 80/20 split based on performance
- **Analytics Dashboard**: Track enrollment performance by course module
- **Smart Routing**: Route users based on behavior patterns
- **A/B Testing UI**: Admin interface to manage distributions

---

**Need Help?** Check the console logs and verify all course IDs are correctly configured.
