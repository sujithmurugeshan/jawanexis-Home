// Test that an admin email arrives WITH a PDF attached, via the real sendEmail service.
// Mirrors how routes/jobs.js attaches a resume.
// Usage: node scripts/test-attach.js [recipient@example.com]
require('dotenv').config();
const { sendEmail } = require('../src/services/email');

// Build a tiny but valid PDF in memory (stands in for an uploaded resume).
function buildPdf() {
  const content = 'BT /F1 18 Tf 20 100 Td (JAWA EDTECH - Test Resume) Tj ET';
  const objs = [
    '<</Type/Catalog/Pages 2 0 R>>',
    '<</Type/Pages/Kids[3 0 R]/Count 1>>',
    '<</Type/Page/Parent 2 0 R/MediaBox[0 0 300 144]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>',
    `<</Length ${content.length}>>\nstream\n${content}\nendstream`,
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>',
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xrefPos = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => { pdf += String(off).padStart(10, '0') + ' 00000 n \n'; });
  pdf += `trailer\n<</Size ${objs.length + 1}/Root 1 0 R>>\nstartxref\n${xrefPos}\n%%EOF`;
  return Buffer.from(pdf, 'latin1');
}

const to = process.argv[2] || process.env.SENDER_EMAIL;

(async () => {
  const resume = buildPdf();
  console.log('Sending to        :', to);
  console.log('Attachment        : test-resume.pdf', `(${resume.length} bytes)`);

  const ok = await sendEmail(
    to,
    'TEST: New Application for QA Tester - Jane Doe',
    'New Job Application Received!\n\nRole: QA Tester\nName: Jane Doe\nEmail: jane@example.com\nPhone: 9876543210\n\nThe applicant\'s resume is attached to this email.',
    [{ filename: 'test-resume.pdf', content: resume }]
  );

  console.log(ok ? '\n✅ SUCCESS — open the inbox and confirm test-resume.pdf is attached.'
                 : '\n❌ FAILED — see error above.');
})();
