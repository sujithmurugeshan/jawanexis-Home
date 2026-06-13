const express = require('express');
const router = express.Router();

// Mock static data to satisfy read-only API requirement
const courses = {
  "hr-executive": {
    id: "hr-executive",
    title: "HR Executive Training",
    subtitle: "Complete HR Management & Operations",
    price: 14999,
    strikethrough_price: 22776,
    features: ["100% Practical Training", "Expert Mentor Guidance", "Career Support"]
  },
  "hr-recruitment": {
    id: "hr-recruitment",
    title: "HR Recruitment Training",
    subtitle: "End-to-End IT Recruitment",
    price: 12999,
    strikethrough_price: 20776,
    features: ["Sourcing Strategies", "ATS Training", "Offer Negotiation"]
  },
  "full-stack": {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "MERN Stack mastery",
    price: 24999,
    strikethrough_price: 32776,
    features: ["Frontend", "Backend", "Deployment"]
  },
  "qa-testing": {
    id: "qa-testing",
    title: "Software Quality Testing",
    subtitle: "Manual & Automation Testing",
    price: 19999,
    strikethrough_price: 27776,
    features: ["Selenium", "API Testing", "Jira"]
  },
  "dsa": {
    id: "dsa",
    title: "Data Structures & Algorithms",
    subtitle: "Crack top product companies",
    price: 9999,
    strikethrough_price: 17776,
    features: ["LeetCode Patterns", "System Design Basics", "Mock Interviews"]
  }
};

router.get('/', (req, res) => {
  res.json(Object.values(courses));
});

router.get('/:courseKey', (req, res) => {
  const course = courses[req.params.courseKey];
  if (!course) {
    return res.status(404).json({ detail: "Course not found" });
  }
  // In a real app, this would include learning_outcomes, tools, syllabus
  res.json({ ...course, learning_outcomes: [], tools: [], syllabus: [] });
});

module.exports = router;
