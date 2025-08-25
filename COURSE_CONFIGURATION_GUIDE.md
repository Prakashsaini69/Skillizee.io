# 🎓 Course Configuration Guide

## Overview

We've moved from hardcoded course IDs and prices to a **centralized, dynamic configuration system**. This makes it easy to:

- ✅ **Update course prices** without touching multiple files
- ✅ **Add new courses** with a simple script
- ✅ **Manage course IDs** from one place
- ✅ **Ensure consistency** across the entire application

## 📁 File Structure

```
src/
├── config/
│   └── courses.js          # 🎯 Central course configuration
├── components/
│   └── payment/
│       └── RazorPayModal.jsx  # Uses dynamic config
└── pages/
    ├── Course Landing Pages/
    │   └── GudgumV2/
    │       └── GudgumV2.jsx   # Uses dynamic config
    └── Store/
        └── courseData.js       # Uses dynamic config

scripts/
└── update-course-config.js     # 🛠️ Management script

backend/
├── .env                       # Environment variables
└── server.js                  # Uses env vars
```

## 🔧 How to Update Course Information

### **Option 1: Edit the Config File Directly**

Edit `src/config/courses.js`:

```javascript
export const COURSES = {
  gudgum: {
    id: '688093b21e8aec5c3378ca92',  // ← Change this
    name: 'Gud Gum Internship',       // ← Change this
    price: 2999,                      // ← Change this
    description: '...',               // ← Change this
    type: 'internship'
  },
  // Add more courses here
};
```

### **Option 2: Use the Management Script**

```bash
# Navigate to project root
cd /path/to/your/project

# Run the management script
node scripts/update-course-config.js
```

**Script Options:**
1. **Display current courses** - See all configured courses
2. **Update course configuration** - Regenerate the config file
3. **Add new course** - Interactive course creation
4. **Exit** - Close the script

### **Option 3: Update Backend Environment Variables**

Edit `backend/.env`:

```bash
# Course Information
COURSE_ID=688093b21e8aec5c3378ca92  # ← Change this
COURSE_AMOUNT_IN_PAISE=299900         # ← Change this (price in paise)
```

## 📊 Current Course Configuration

| Course | Slug | ID | Price | Type |
|--------|------|----|-------|------|
| Gud Gum Internship | `gudgum` | `688093b21e8aec5c3378ca92` | ₹2999 | internship |
| Salty Internship | `salty` | `6868db3ecf70c7310edcaee2` | ₹2999 | internship |
| Startup Sprint | `startupSprint` | `686b892ab27c214b8c9f103d` | ₹2999 | internship |
| Bundle #1 | `bundle1` | `bundle1-course-id` | ₹4999 | bundle |
| Bundle #2 | `bundle2` | `bundle2-course-id` | ₹7999 | bundle |

## 🚀 Adding a New Course

### **Step 1: Add to Configuration**

```javascript
// In src/config/courses.js
export const COURSES = {
  // ... existing courses ...
  
  newCourse: {
    id: 'your-graphy-course-id',
    name: 'Your Course Name',
    price: 1999,
    description: 'Your course description',
    type: 'internship' // or 'shortCourse'
  }
};
```

### **Step 2: Create Landing Page**

```javascript
// In your landing page component
import { COURSES } from '../../../config/courses';

const courseData = {
  name: COURSES.newCourse.name,
  price: COURSES.newCourse.price,
  courseId: COURSES.newCourse.id,
  description: COURSES.newCourse.description
};
```

### **Step 3: Update Store**

```javascript
// In src/pages/Store/courseData.js
{
  id: 'newCourse',
  title: COURSES.newCourse.name,
  price: COURSES.newCourse.price,
  // ... other properties
}
```

## 🔍 How It Works

### **Frontend Flow:**

1. **Component receives `courseData` prop** (optional)
2. **Falls back to default course** if no prop provided
3. **Uses centralized configuration** for consistency
4. **Logs course data** for debugging

```javascript
// In RazorPayModal.jsx
const course = {
  name: courseData?.name || DEFAULT_COURSE.name,
  price: courseData?.price || DEFAULT_COURSE.price,
  courseId: courseData?.courseId || DEFAULT_COURSE.id,
  ...courseData
};
```

### **Backend Flow:**

1. **Reads from environment variables**
2. **Uses fallback values** for development
3. **Logs course information** for debugging

```javascript
// In server.js
const COURSE_ID = process.env.COURSE_ID || '688093b21e8aec5c3378ca92';
```

## 🧪 Testing

### **Test Course Configuration:**

```bash
# Display current courses
node scripts/update-course-config.js
# Select option 1

# Test with different course data
# The RazorPayModal will log course information to console
```

### **Test Price Changes:**

1. **Change price in `src/config/courses.js`**
2. **Refresh your landing page**
3. **Open payment modal**
4. **Verify new price is displayed**

### **Test Course ID Changes:**

1. **Change course ID in `src/config/courses.js`**
2. **Make a test payment**
3. **Check backend logs** for course ID
4. **Verify Graphy enrollment** uses correct ID

## 🚨 Important Notes

### **Price Consistency:**
- **Frontend**: Price in INR (e.g., 2999)
- **Backend**: Price in paise (e.g., 299900)
- **RazorPay**: Automatically converts to paise

### **Course ID Format:**
- **Must match Graphy course ID exactly**
- **Case-sensitive**
- **No spaces or special characters**

### **Environment Variables:**
- **Backend only** (not frontend)
- **Restart server** after changes
- **Use `.env.example`** as template

## 🆘 Troubleshooting

### **Price Not Updating:**
- ✅ Check `src/config/courses.js`
- ✅ Clear browser cache
- ✅ Restart frontend dev server

### **Course ID Not Working:**
- ✅ Verify Graphy course ID
- ✅ Check backend logs
- ✅ Restart backend server

### **Configuration Not Loading:**
- ✅ Check import paths
- ✅ Verify file structure
- ✅ Check console for errors

## 📝 Best Practices

1. **Always use the config file** instead of hardcoding
2. **Test price changes** before deploying
3. **Verify course IDs** with Graphy dashboard
4. **Use the management script** for bulk updates
5. **Keep environment variables** in sync with config

## 🔄 Migration from Hardcoded Values

If you find any remaining hardcoded values:

1. **Replace with config reference:**
   ```javascript
   // Before (hardcoded)
   price: 2999
   
   // After (dynamic)
   price: COURSES.gudgum.price
   ```

2. **Update imports:**
   ```javascript
   // Add this import
   import { COURSES } from '../../config/courses';
   ```

3. **Test thoroughly** after changes

---

**🎯 Goal**: All course information should now be managed from one place, making updates quick and error-free!
