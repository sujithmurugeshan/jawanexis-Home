require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth').router;
const contactRoutes = require('./routes/contact');
const internshipRoutes = require('./routes/internship');
const coursesRoutes = require('./routes/courses');
const jobsRoutes = require('./routes/jobs');

const app = express();

// Middleware
app.use(helmet()); // Secure HTTP headers

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter); // Apply rate limiter to all API routes

const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5174')
  .split(',')
  .map(o => o.trim());

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/internship', internshipRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/jobs', jobsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ detail: "Something went wrong!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
