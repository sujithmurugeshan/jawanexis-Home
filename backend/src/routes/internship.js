const express = require('express');
const { z } = require('zod');
const prisma = require('../db');
const { sendEmail } = require('../services/email');
const { appendApplicationRow } = require('../services/sheets');
const { authenticateToken } = require('./auth');

const router = express.Router();

const applySchema = z.object({
  courseKey: z.enum(["hr-executive", "hr-recruitment", "full-stack", "qa-testing", "dsa"]),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone must contain only digits"),
  education: z.string().optional(),
  graduationYear: z.coerce.number().int().min(1900).max(2100).optional(),
  language: z.string().optional(),
});

router.post('/apply', async (req, res) => {
  try {
    const validatedData = applySchema.parse(req.body);

    const application = await prisma.internshipApplication.create({
      data: validatedData,
    });

    // Fire and forget emails
    sendEmail(
      validatedData.email,
      'Application Received - Jawa EDTECh',
      `Dear ${validatedData.name},\n\nCongratulations! Thanks for applying for ${validatedData.courseKey}. Our team will contact you shortly.\n\nBest,\nJawa EDTECh Team`
    );

    const ADMIN_EMAILS = process.env.ADMIN_EMAILS || 'hr@jawaedtech.com,sooryajawahar@gmail.com,jawaedtech@gmail.com';
    sendEmail(
      ADMIN_EMAILS,
      `New Internship Application: ${validatedData.courseKey}`,
      `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nCourse: ${validatedData.courseKey}`
    );

    // Sync to Google Sheets
    appendApplicationRow(validatedData);

    res.status(201).json({ success: true, application_id: application.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ detail: error.errors[0].message });
    }
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.get('/apply', authenticateToken, async (req, res) => {
  try {
    // Admin check
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user || !user.isAdmin) {
      return res.status(403).json({ detail: "Admin access required" });
    }

    const { course_key, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where = course_key ? { courseKey: course_key } : {};

    const applications = await prisma.internshipApplication.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.internshipApplication.count({ where });

    res.json({
      data: applications,
      meta: {
        page: parseInt(page),
        limit: take,
        total,
      }
    });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.patch('/apply/:id/status', authenticateToken, async (req, res) => {
  try {
    // Admin check
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user || !user.isAdmin) {
      return res.status(403).json({ detail: "Admin access required" });
    }

    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["PENDING", "CONTACTED", "ENROLLED", "REJECTED"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ detail: "Invalid status" });
    }

    const application = await prisma.internshipApplication.update({
      where: { id },
      data: { status }
    });

    res.json({ success: true, application });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ detail: "Application not found" });
    }
    res.status(500).json({ detail: "Internal server error" });
  }
});

module.exports = router;
