# 📊 Google Sheets Integration Guide

## 🎯 Overview
This guide will help you set up Google Sheets integration to automatically capture payment and enrollment data from your SkilliZee payment system.

## 📋 Data Captured
After each successful payment, the following data will be automatically sent to Google Sheets:

| Column | Description | Example |
|--------|-------------|---------|
| **Timestamp** | When the payment was processed | `2024-01-15T10:30:00.000Z` |
| **Order ID** | Razorpay order identifier | `order_ABC123XYZ` |
| **Payment ID** | Razorpay payment identifier | `pay_DEF456UVW` |
| **Course Name** | Name of the course purchased | `Bundle #2 - Premium Learning Pack` |
| **Course ID** | Graphy LMS course identifier | `68ac4ad033717965a02676fb` |
| **A/B Testing Group** | Which course module (A or B) | `A (80%)` or `B (20%)` |
| **Price** | Amount paid in rupees | `3009` |
| **Customer Name** | Student's full name | `John Doe` |
| **Customer Email** | Student's email address | `john@example.com` |
| **Customer Phone** | Student's phone number | `+919876543210` |
| **Customer Grade** | Student's grade/class | `12th` |
| **Customer School** | Student's school name | `ABC School` |
| **Customer Address** | Student's address | `123 Main Street` |
| **Customer City/State** | City and state | `Mumbai, Maharashtra` |
| **Customer Pincode** | Postal code | `400001` |
| **Payment Status** | Payment status from Razorpay | `captured` |
| **Enrollment Status** | Enrollment status on Graphy | `enrolled` |
| **User Created** | Whether new user was created | `true` or `false` |
| **Enrolled At** | When enrollment was completed | `2024-01-15T10:30:00.000Z` |

## 🚀 Setup Steps

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "SkilliZee Payment Data"
4. Add the following headers in row 1:

```
A1: Timestamp | B1: Order ID | C1: Payment ID | D1: Course Name | E1: Course ID | F1: A/B Testing Group | G1: Price | H1: Customer Name | I1: Customer Email | J1: Customer Phone | K1: Customer Grade | L1: Customer School | M1: Customer Address | N1: Customer City/State | O1: Customer Pincode | P1: Payment Status | Q1: Enrollment Status | R1: User Created | S1: Enrolled At
```

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Log the received data for debugging
    console.log('Received data:', data);
    
    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.orderId || 'N/A',
      data.paymentId || 'N/A',
      data.courseName || 'N/A',
      data.courseId || 'N/A',
      data.abTestingGroup || 'N/A',
      data.price || 'N/A',
      data.customerName || 'N/A',
      data.customerEmail || 'N/A',
      data.customerPhone || 'N/A',
      data.customerGrade || 'N/A',
      data.customerSchool || 'N/A',
      data.customerAddress || 'N/A',
      data.customerCityState || 'N/A',
      data.customerPincode || 'N/A',
      data.paymentStatus || 'N/A',
      data.enrollmentStatus || 'N/A',
      data.userCreated || 'N/A',
      data.enrolledAt || 'N/A'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data added to Google Sheets successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing request:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error processing request',
        error: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (optional, for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Google Apps Script is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set **Execute as**: `Me`
4. Set **Who has access**: `Anyone`
5. Click **Deploy**
6. **Copy the Web App URL** - you'll need this for the backend

### Step 4: Configure Backend
1. Add the Google Sheets Web App URL to your environment variables:

```bash
# In your .env file or AWS Lambda environment variables
GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Deploy the updated backend:

```bash
cd backend
serverless deploy
```

## 🧪 Testing the Integration

### Test with A/B Testing Script
```bash
cd backend
node test-ab-testing-simple.js bundle2
```

### Test Payment Flow
1. Make a test payment through your frontend
2. Check the Google Sheet for new data
3. Verify all columns are populated correctly

## 📊 Sample Data Row
After a successful payment, you should see a row like this:

```
2024-01-15T10:30:00.000Z | order_ABC123XYZ | pay_DEF456UVW | Bundle #2 - Premium Learning Pack | 68ac4ad033717965a02676fb | A (80%) | 3009 | John Doe | john@example.com | +919876543210 | 12th | ABC School | 123 Main Street | Mumbai, Maharashtra | 400001 | captured | enrolled | true | 2024-01-15T10:30:00.000Z
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Google Sheets not configured"**
   - Check if `GOOGLE_SHEETS_WEBAPP_URL` is set in environment variables
   - Verify the URL is correct and accessible

2. **"Failed to update Google Sheets"**
   - Check Google Apps Script logs
   - Verify the script has proper permissions
   - Ensure the sheet is accessible

3. **Data not appearing in sheets**
   - Check the Apps Script execution logs
   - Verify the sheet structure matches the expected columns
   - Test the web app URL manually

### Debug Steps:
1. Check CloudWatch logs for backend errors
2. Check Google Apps Script execution logs
3. Test the web app URL in browser
4. Verify environment variables are set correctly

## 🎉 Success Indicators
- ✅ New rows appear in Google Sheet after each payment
- ✅ All columns are populated with correct data
- ✅ A/B testing group shows correct distribution (A vs B)
- ✅ Timestamps are accurate
- ✅ No errors in CloudWatch or Apps Script logs

## 🔒 Security Notes
- The Google Apps Script web app is publicly accessible
- Consider adding authentication if needed
- Monitor the sheet for any suspicious activity
- Regularly backup your payment data

## 📈 Analytics Possibilities
With this data in Google Sheets, you can:
- Track payment trends over time
- Analyze A/B testing performance
- Monitor enrollment patterns
- Generate revenue reports
- Track customer demographics
- Create dashboards with Google Data Studio

---

**Need Help?** Check the CloudWatch logs and Google Apps Script execution logs for detailed error information.
