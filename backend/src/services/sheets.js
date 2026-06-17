const { google } = require('googleapis');
const path = require('path');

async function appendApplicationRow(data) {
  try {
    let keyFilePath = path.join(__dirname, '../../sheets-credentials.json');
    const fs = require('fs');
    if (!fs.existsSync(keyFilePath) && fs.existsSync('/etc/secrets/sheets-credentials.json')) {
      keyFilePath = '/etc/secrets/sheets-credentials.json';
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
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
      range: 'dashboard_courses!A:H', // Pushing to dashboard_courses tab
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    console.log('Appended row to Google Sheets:', response.data.updates.updatedRange);
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
  }
}

async function appendJobApplicationRow(data) {
  try {
    let keyFilePath = path.join(__dirname, '../../sheets-credentials.json');
    const fs = require('fs');
    if (!fs.existsSync(keyFilePath) && fs.existsSync('/etc/secrets/sheets-credentials.json')) {
      keyFilePath = '/etc/secrets/sheets-credentials.json';
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID_CAREERS;

    // Create a new array representing the row data
    // Date, Job Title, Name, Email, Phone, Education, Graduation Year, Language
    const values = [
      [
        new Date().toISOString(),
        data.jobTitle || 'N/A',
        data.name || 'N/A',
        data.email || 'N/A',
        data.phone || 'N/A',
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
      range: 'dashboard_job!A:H', // Pushing to dashboard_job tab
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    console.log('Appended job application row to Google Sheets:', response.data.updates.updatedRange);
  } catch (error) {
    console.error('Error appending job application to Google Sheets:', error);
  }
}

module.exports = { appendApplicationRow, appendJobApplicationRow };
