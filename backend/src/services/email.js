const sendEmail = async (to, subject, text, attachments = []) => {
  try {
    const htmlBody = text.replace(/\n/g, '<br>');
    
    const payload = {
      to,
      subject,
      text: htmlBody,
    };

    if (attachments && attachments.length > 0) {
      const file = attachments[0];
      payload.attachment = {
        filename: file.filename,
        mimeType: 'application/pdf',
        base64: file.content.toString('base64')
      };
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxjflfsMPzbldlygfqEtmuZU1z3y0uxF3l7C0Q7VTwxpDY0ZT4osoAVBC1PzblaBnU4/exec';

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!result.success) {
      console.error('Apps Script Error:', result.error);
    } else {
      console.log(`Email sent to ${to}`);
    }
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
  }
};

module.exports = { sendEmail };
