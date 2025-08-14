// Google Apps Script for LinkedIn Course Landing Page Form
// Instructions:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Replace the default code with this code
// 4. Deploy as a web app
// 5. Set access to "Anyone" or "Anyone with Google Account"
// 6. Copy the web app URL and replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' in SignupModal.jsx

function doPost(e) {
  try {
    // Handle both FormData and JSON data
    let data = {};
    
    if (e.postData.type === 'application/x-www-form-urlencoded') {
      // Handle FormData
      const params = e.parameter;
      data = {
        name: params.name || '',
        phoneNumber: params.phoneNumber || '',
        timestamp: params.timestamp || new Date().toISOString(),
        source: params.source || 'LinkedIn Course Landing Page'
      };
    } else {
      // Handle JSON data
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError);
        data = {
          name: '',
          phoneNumber: '',
          timestamp: new Date().toISOString(),
          source: 'LinkedIn Course Landing Page'
        };
      }
    }
    
    // REPLACE THIS WITH YOUR ACTUAL SPREADSHEET ID
    // To get your spreadsheet ID:
    // 1. Open your Google Sheet
    // 2. Look at the URL: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit
    // 3. Copy the ID part and paste it below
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
    
    // Get the specific spreadsheet by ID
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Form Submissions'); // Change this to your sheet name
    
    // If the sheet doesn't exist, create it
    if (!sheet) {
      const newSheet = spreadsheet.insertSheet('Form Submissions');
      // Add headers
      newSheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Phone Number', 'Source']]);
      
      // Format headers
      newSheet.getRange(1, 1, 1, 4).setFontWeight('bold');
      newSheet.getRange(1, 1, 1, 4).setBackground('#4285f4');
      newSheet.getRange(1, 1, 1, 4).setFontColor('white');
      
      // Auto-resize columns
      newSheet.autoResizeColumns(1, 4);
      
      // Freeze the header row
      newSheet.setFrozenRows(1);
    }
    
    // Prepare the data row
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.phoneNumber || '',
      data.source || 'LinkedIn Course Landing Page'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (optional, for testing)
  return ContentService
    .createTextOutput('LinkedIn Course Landing Page Form Handler is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to create the initial sheet structure (run this once manually)
function setupSheet() {
  // REPLACE THIS WITH YOUR ACTUAL SPREADSHEET ID
  const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
  
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName('Form Submissions');
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Form Submissions');
  }
  
  // Clear existing data and add headers
  sheet.clear();
  sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Phone Number', 'Source']]);
  
  // Format headers
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.getRange(1, 1, 1, 4).setBackground('#4285f4');
  sheet.getRange(1, 1, 1, 4).setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, 4);
  
  // Freeze the header row
  sheet.setFrozenRows(1);
  
  console.log('Sheet setup complete!');
}
