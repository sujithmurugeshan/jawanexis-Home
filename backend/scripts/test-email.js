// Quick standalone test of the Brevo email setup.
// Usage: node scripts/test-email.js [recipient@example.com]
// Loads .env, validates the API key, then sends one test email.
require('dotenv').config();
const { sendEmail } = require('../src/services/email');

const to = process.argv[2] || process.env.SENDER_EMAIL;

(async () => {
  console.log('Sender :', process.env.SENDER_EMAIL);
  console.log('Key set:', process.env.BREVO_API_KEY ? 'yes' : 'NO');
  console.log('Sending test email to:', to);

  const ok = await sendEmail(
    to,
    'JAWA EDTECH — Brevo test email',
    'Hi,\n\nThis is a test email confirming the Brevo integration works.\n\nBest,\nJAWA EDTECH'
  );

  console.log(ok ? '\n✅ SUCCESS — email accepted by Brevo.' : '\n❌ FAILED — see error above.');
  process.exit(ok ? 0 : 1);
})();
