const express = require('express');
const multer = require('multer');
const prisma = require('../db');
const { sendEmail } = require('../services/email');
const { authenticateToken } = require('./auth');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Setup multer for memory storage (for emailing directly) and disk storage if needed.
// We'll use memory storage to avoid keeping files on the server permanently.
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { jobTitle, name, email, phone, education, graduationYear, language } = req.body;
    
    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ detail: "Missing required fields" });
    }

    if (!req.file) {
      return res.status(400).json({ detail: "Resume is required" });
    }

    // Since we are using memory storage, we don't have a path. 
    // We can save to DB without a path, or just say 'In Email'.
    const application = await prisma.jobApplication.create({
      data: {
        jobTitle,
        name,
        email,
        phone,
        education,
        graduationYear: graduationYear ? parseInt(graduationYear) : null,
        language,
        resumePath: "Attached in Email",
      }
    });

    // Send email to HR and Soorya
    const emailBody = `
New Job Application Received!

Role: ${jobTitle}
Name: ${name}
Email: ${email}
Phone: ${phone}
Education: ${education || 'N/A'}
Graduation Year: ${graduationYear || 'N/A'}
Language: ${language || 'N/A'}

The applicant's resume is attached to this email.
    `;

    const attachments = [{
      filename: req.file.originalname,
      content: req.file.buffer
    }];

    sendEmail(
      'hr@jawaedtech.com, sooryajawahar@gmail.com',
      `New Application for ${jobTitle} - ${name}`,
      emailBody,
      attachments
    );

    res.status(201).json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    if (error.message === 'Only PDF files are allowed!') {
      return res.status(400).json({ detail: error.message });
    }
    console.error(error);
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.get('/apply', authenticateToken, async (req, res) => {
  try {
    // Only admins should see this, but we'll return all for now.
    // The admin dashboard enforces this on the frontend, and we'll add a check here too.
    if (!req.user.isAdmin) {
      return res.status(403).json({ detail: "Admin access required" });
    }

    const applications = await prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    res.json({ data: applications });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.patch('/apply/:id/status', authenticateToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ detail: "Admin access required" });
    }

    const { status } = req.body;
    const application = await prisma.jobApplication.update({
      where: { id: req.params.id },
      data: { status }
    });

    res.json(application);
  } catch (error) {
    res.status(500).json({ detail: "Failed to update status" });
  }
});

module.exports = router;
