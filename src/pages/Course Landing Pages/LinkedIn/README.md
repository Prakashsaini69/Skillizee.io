# SignupModal Component Setup Instructions

## Overview
The SignupModal component has been successfully integrated into your LinkedIn Course Landing Page. It will automatically pop up after 5 seconds when the page loads and collect user information (name and phone number) to send to Google Sheets.

## What's Been Added

### 1. SignupModal.jsx
- A new component file that handles the signup form
- Automatically appears after 5 seconds
- Includes form validation
- Sends data to Google Sheets
- Shows success message after submission

### 2. Integration
- Imported and added to the main LinkedIn.jsx file
- Positioned at the end of the main component

### 3. Google Apps Script
- A script file that handles form submissions to Google Sheets
- Automatically creates and formats the spreadsheet

## Setup Instructions

### Step 1: Set up Google Sheets
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "LinkedIn Course Signups"

### Step 2: Set up Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Replace the default code with the content from `google-apps-script.js`
4. Save the project with a name like "LinkedIn Form Handler"

### Step 3: Deploy the Script
1. Click on "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to your Google account
4. Set "Who has access" to "Anyone" (or "Anyone with Google Account" for more security)
5. Click "Deploy"
6. Copy the Web app URL that appears

### Step 4: Update the Component
1. Open `SignupModal.jsx`
2. Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace it with your actual Google Apps Script web app URL

### Step 5: Test the Integration
1. Refresh your LinkedIn page
2. Wait 5 seconds for the modal to appear
3. Fill out the form and submit
4. Check your Google Sheet to see if the data appears

## Features

### Modal Behavior
- **Auto-popup**: Appears automatically after 5 seconds
- **Form validation**: Ensures name and phone number are provided
- **Phone validation**: Must be exactly 10 digits
- **Success message**: Shows confirmation after successful submission
- **Auto-close**: Closes automatically after 3 seconds on success

### Data Collection
- **Name**: User's full name
- **Phone Number**: 10-digit phone number
- **Timestamp**: When the form was submitted
- **Source**: Identifies the form as coming from LinkedIn Course Landing Page

### Google Sheets Integration
- **Automatic creation**: Creates the sheet if it doesn't exist
- **Formatted headers**: Professional-looking spreadsheet
- **Real-time updates**: Data appears immediately after submission
- **Error handling**: Graceful fallback if something goes wrong

## Customization Options

### Timing
- Change the popup delay by modifying the `5000` value in the `useEffect` (milliseconds)
- Change the auto-close delay by modifying the `3000` value in the success handler

### Styling
- The component uses Tailwind CSS classes
- Modify colors, sizes, and layout by changing the className values
- The modal image can be changed by updating the `src` attribute

### Form Fields
- Add more fields by extending the `formData` state
- Update validation in the `validateForm` function
- Modify the Google Apps Script to handle additional fields

## Troubleshooting

### Modal Not Appearing
- Check browser console for JavaScript errors
- Ensure the component is properly imported
- Verify the component is rendered in the main component

### Form Not Submitting
- Check the Google Apps Script URL is correct
- Ensure the Google Apps Script is deployed and accessible
- Check browser console for network errors

### Data Not Appearing in Sheets
- Verify the Google Apps Script has permission to access your spreadsheet
- Check the Apps Script execution logs for errors
- Ensure the spreadsheet name matches what's in the script

## Security Notes
- The current setup allows anyone to submit to your form
- Consider adding rate limiting or CAPTCHA for production use
- The Google Apps Script runs with your account permissions
- Review and test thoroughly before going live

## Support
If you encounter any issues:
1. Check the browser console for error messages
2. Verify all setup steps were completed correctly
3. Test with a simple form submission first
4. Check Google Apps Script execution logs
