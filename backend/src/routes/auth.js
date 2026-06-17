const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const prisma = require('../db');

const router = express.Router();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ detail: "Not authenticated" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ detail: "Invalid token" });
    req.user = user;
    next();
  });
};

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ detail: "Missing required fields" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ detail: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const isAdmin = ['hr@jawaedtech.com', 'sooryajawahar@gmail.com', 'allwinranjithkumar@gmail.com', 'jawaedtech@gmail.com'].includes(email.toLowerCase());
    const user = await prisma.user.create({
      data: { name, email, phone, passwordHash, isAdmin }
    });

    const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '24h' });
    res.status(201).json({
      access_token: token,
      token_type: "bearer",
      user: { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin }
    });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.googleOauth) {
      return res.status(401).json({ detail: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ detail: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '24h' });
    res.json({
      access_token: token,
      token_type: "bearer",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.post('/google', async (req, res) => {
  try {
    const { id_token } = req.body;
    const ticket = await googleClient.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload['email'];
    const name = payload['name'];

    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      const isAdmin = ['hr@jawaedtech.com', 'sooryajawahar@gmail.com', 'allwinranjithkumar@gmail.com', 'jawaedtech@gmail.com'].includes(email.toLowerCase());
      user = await prisma.user.create({
        data: { name, email, googleOauth: true, isAdmin }
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    res.json({
      access_token: token,
      token_type: "bearer",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(401).json({ detail: "Invalid Google token" });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ detail: "User not found" });
    res.json({ id: user.id, name: user.name, email: user.email, phone: user.phone, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error" });
  }
});

router.post('/logout', (req, res) => {
  res.json({ success: true });
});

module.exports = { router, authenticateToken };
