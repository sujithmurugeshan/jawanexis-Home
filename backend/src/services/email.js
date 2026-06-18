// Email delivery via Brevo (Sendinblue) HTTP API.
// Uses HTTPS so it works on hosts that block outbound SMTP (e.g. Render free tier).
//
// Required env vars:
//   BREVO_API_KEY  - API key from https://app.brevo.com (SMTP & API > API Keys)
//   SENDER_EMAIL   - a sender address you verified in Brevo (Senders & IPs)
//   SENDER_NAME    - optional display name (defaults to "JAWA EDTECH")

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

// Turn "a@x.com, b@y.com" (or an array) into Brevo's [{ email }] format.
const parseRecipients = (to) => {
  const list = Array.isArray(to) ? to : String(to).split(',');
  return list
    .map((addr) => addr.trim())
    .filter(Boolean)
    .map((email) => ({ email }));
};

const sendEmail = async (to, subject, text, attachments = []) => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL;
  const senderName = process.env.SENDER_NAME || 'JAWA EDTECH';

  if (!apiKey || !senderEmail) {
    console.error(
      'Email not sent: BREVO_API_KEY and/or SENDER_EMAIL are not configured in the environment.'
    );
    return false;
  }

  try {
    const payload = {
      sender: { name: senderName, email: senderEmail },
      to: parseRecipients(to),
      subject,
      htmlContent: text.replace(/\n/g, '<br>'),
    };

    if (attachments && attachments.length > 0) {
      payload.attachment = attachments.map((file) => ({
        name: file.filename,
        content: file.content.toString('base64'),
      }));
    }

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();

    if (!response.ok) {
      console.error(
        `Failed to send email to ${to} (HTTP ${response.status}): ${raw}`
      );
      return false;
    }

    console.log(`Email sent to ${to}`);
    return true;
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    return false;
  }
};

module.exports = { sendEmail };
