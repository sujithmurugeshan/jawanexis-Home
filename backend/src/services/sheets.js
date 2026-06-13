const { google } = require('googleapis');
const path = require('path');

async function appendApplicationRow(data) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '../../sheets-credentials.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Create a new array representing the row data
    // Date, Name, Email, Phone, Course, Education, Graduation Year, Language
    const values = [
      [
        new Date().toISOString(),
        data.name || 'N/A',
        data.email || 'N/A',
        data.phone || 'N/A',
        data.courseKey || 'N/A',
        data.education || 'N/A',
        data.graduationYear || 'N/A',
        data.language || 'N/A'
      ]
    ];

    const resource = {
      values,
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H', // Adjust 'Sheet1' if their sheet is named differently
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    console.log('Appended row to Google Sheets:', response.data.updates.updatedRange);
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
  }
}

module.exports = { appendApplicationRow };
