const express = require('express');
const { z } = require('zod');
const prisma = require('../db');
const { sendEmail } = require('../services/email');

const router = express.Router();

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone must contain only digits"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

router.post('/', async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const submission = await prisma.contactSubmission.create({
      data: validatedData,
    });

    // Fire and forget email notification
    const ADMIN_EMAILS = process.env.ADMIN_EMAILS || 'hr@jawaedtech.com,sooryajawahar@gmail.com,jawaedtech@gmail.com';
    sendEmail(
      ADMIN_EMAILS,
      `New Contact Submission: ${validatedData.subject}`,
      `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nMessage:\n${validatedData.message}`
    );

    // Update notifiedAt asynchronously
    prisma.contactSubmission.update({
      where: { id: submission.id },
      data: { notifiedAt: new Date() }
    }).catch(console.error);

    res.status(201).json({ success: true, message: "We will get back to you shortly." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ detail: error.errors[0].message });
    }
    res.status(500).json({ detail: "Internal server error" });
  }
});

module.exports = router;
