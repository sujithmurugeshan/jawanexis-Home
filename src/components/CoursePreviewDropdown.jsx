import { useState } from "react";
import { Briefcase, UserPlus, Code2, Bug, Cpu, ChevronRight, Star, CheckCircle, TrendingUp, Award, Target, Zap, BookOpen, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

/* ─── Course Preview Data ─── */
const coursePreviewData = {
  "HR Executive Course": {
    href: "#hr-executive-course",
    icon: Briefcase,
    duration: "90 Days",
    tagline: "Become an HR Professional in just 90 Days",
    subtitle: "Practical. Industry-Focused. Career-Ready.",
    accentColor: "#0b8a32",
    accentLight: "#e9f8ef",
    accentBorder: "#c5e8d0",
    whyChoose: [
      "Become an HR Professional in just 90 Days",
      "Industry-Focused Curriculum",
      "Hands-On Practical Course",
      "Real-Time HR Case Studies",
      "Expert Mentor Guidance",
      "Job-Oriented Learning Approach"
    ],
    keySkills: [
      "Talent Acquisition & Recruitment",
      "Employee Engagement",
      "Performance Management",
      "Payroll Processing",
      "HR Operations & Administration",
      "HR Documentation & Compliance",
      "Workplace Policies & Procedures"
    ],
    benefits: [
      "Practical Industry Exposure",
      "Real-World Project Experience",
      "Career-Ready Skill Development",
      "Confidence to Handle HR Responsibilities",
      "Professional Portfolio Building",
      "Better Career Opportunities"
    ],
    differentiators: [
      "Learn from Industry Experts",
      "Work on Hands-On Assignments",
      "Solve Real HR Business Scenarios",
      "Industry-Relevant Course",
      "Interactive Learning Sessions",
      "Career Support & Guidance"
    ],
    outcomes: [
      "Recruitment & Hiring Expertise",
      "Employee Management Skills",
      "Payroll Handling Knowledge",
      "HR Compliance Understanding",
      "Professional HR Communication",
      "Industry-Ready HR Profile"
    ],
    cta: "Start Your HR Career with Confidence!"
  },
  "HR Recruitment Course": {
    href: "#hr-recruitment-course",
    icon: UserPlus,
    duration: "30 Days",
    tagline: "Become a Recruitment Professional in just 30 Days",
    subtitle: "Source. Screen. Hire. Excel.",
    accentColor: "#0b8a32",
    accentLight: "#e9f8ef",
    accentBorder: "#c5e8d0",
    whyChoose: [
      "Become a Recruitment Pro in 30 Days",
      "Practical Hiring Simulations",
      "LinkedIn Recruiter Course",
      "ATS Tool Mastery",
      "Expert Recruiter Mentors",
      "Placement-Ready Preparation"
    ],
    keySkills: [
      "Candidate Sourcing Strategies",
      "Resume Screening & Shortlisting",
      "Interview Coordination",
      "Talent Mapping & Market Research",
      "Offer Management & Negotiation",
      "ATS & Recruitment Automation",
      "Employer Branding Basics"
    ],
    benefits: [
      "Live Recruitment Simulations",
      "Real-World Hiring Projects",
      "Industry-Standard Tool Course",
      "Confidence in End-to-End Hiring",
      "Professional Sourcing Profile",
      "Career Launch Support"
    ],
    differentiators: [
      "Learn from Talent Acquisition Managers",
      "Practice on Live Requirements",
      "Master LinkedIn Recruiter",
      "Simulate Real Hiring Workflows",
      "Build a Sourcing Portfolio",
      "Mock Interview Sessions"
    ],
    outcomes: [
      "End-to-End Recruitment Skills",
      "Talent Pipeline Building",
      "ATS & CRM Proficiency",
      "Salary Negotiation Expertise",
      "Professional Recruiter Profile",
      "Placement-Ready Confidence"
    ],
    cta: "Launch Your Recruitment Career Today!"
  },
  "Full Stack Development": {
    href: "#full-stack-development-course",
    icon: Code2,
    duration: "6 Months",
    tagline: "Become a Job-Ready Full Stack Developer",
    subtitle: "Code. Build. Deploy. Succeed.",
    accentColor: "#0b8a32",
    accentLight: "#e9f8ef",
    accentBorder: "#c5e8d0",
    whyChoose: [
      "Become a Full Stack Developer",
      "Industry-Aligned Curriculum",
      "100+ Hours of Project Work",
      "AI Integration Module",
      "Expert Developer Mentors",
      "Portfolio & GitHub Ready"
    ],
    keySkills: [
      "HTML5, CSS3 & JavaScript",
      "React.js Frontend Development",
      "Node.js & Express Backend",
      "MongoDB & Database Design",
      "REST API Development",
      "Authentication & Security",
      "AI Integration & Prompt Engineering"
    ],
    benefits: [
      "Build Real-World Applications",
      "Industry-Level Project Portfolio",
      "Full Stack Certification",
      "GitHub-Ready Code Projects",
      "Resume & Interview Preparation",
      "Placement Assistance"
    ],
    differentiators: [
      "Learn from Senior Developers",
      "Build Production-Ready Apps",
      "AI-Powered Feature Development",
      "Cloud Deployment Course",
      "Code Review Sessions",
      "Career Development Centre"
    ],
    outcomes: [
      "Frontend & Backend Mastery",
      "Database Design Skills",
      "API Development Expertise",
      "DevOps & Deployment Knowledge",
      "AI Integration Capability",
      "Job-Ready Developer Profile"
    ],
    cta: "Start Building Your Developer Career!"
  },
  "Software Quality Testing": {
    href: "#qa-testing-course",
    icon: Bug,
    duration: "6 Months",
    tagline: "Become a Skilled QA Testing Professional",
    subtitle: "Test. Automate. Assure Quality.",
    accentColor: "#0b8a32",
    accentLight: "#e9f8ef",
    accentBorder: "#c5e8d0",
    whyChoose: [
      "Complete QA Testing Course",
      "Manual & Automation Testing",
      "Selenium WebDriver Mastery",
      "API Testing with Postman",
      "Real-Time Testing Projects",
      "CI/CD Pipeline Experience"
    ],
    keySkills: [
      "Manual Testing Techniques",
      "Selenium Automation Testing",
      "API Testing with Postman",
      "SQL Database Testing",
      "Agile Testing Methodologies",
      "Test Case Design & Execution",
      "Bug Reporting & Defect Tracking"
    ],
    benefits: [
      "Hands-On Automation Labs",
      "Industry-Standard Tool Course",
      "QA Engineer Certification",
      "Real Application Testing",
      "Resume & Interview Prep",
      "Placement Guidance"
    ],
    differentiators: [
      "Learn from QA Professionals",
      "Automate Real Test Scenarios",
      "Work with CI/CD Pipelines",
      "Use Jira for Defect Tracking",
      "Practice on Live Applications",
      "Mock QA Interview Rounds"
    ],
    outcomes: [
      "Manual & Automation Testing",
      "Selenium & TestNG Proficiency",
      "API & Database Validation",
      "Agile QA Process Knowledge",
      "Test Documentation Skills",
      "QA-Ready Professional Profile"
    ],
    cta: "Begin Your QA Testing Journey!"
  },
  "DSA": {
    href: "#dsa-course",
    icon: Cpu,
    duration: "6 Months",
    tagline: "Master DSA for Top Tech Careers",
    subtitle: "Think. Solve. Optimize. Crack.",
    accentColor: "#0b8a32",
    accentLight: "#e9f8ef",
    accentBorder: "#c5e8d0",
    whyChoose: [
      "Interview-Focused DSA Course",
      "Complexity Analysis Mastery",
      "LeetCode Pattern Practice",
      "Dynamic Programming Module",
      "Mock Technical Interviews",
      "Product-Company Preparation"
    ],
    keySkills: [
      "Arrays, Strings & Linked Lists",
      "Stacks, Queues & Trees",
      "Graphs & Graph Traversal",
      "Recursion & Backtracking",
      "Searching & Sorting Algorithms",
      "Dynamic Programming",
      "Competitive Programming"
    ],
    benefits: [
      "Pattern-Based Problem Solving",
      "Live Coding Walkthroughs",
      "Company-Level Practice Problems",
      "DSA Course Certification",
      "Resume & Placement Support",
      "Technical Interview Readiness"
    ],
    differentiators: [
      "Learn from Competitive Programmers",
      "Solve 300+ Coding Problems",
      "Practice on LeetCode & HackerRank",
      "Focus on Time & Space Optimization",
      "Simulate Technical Interview Rounds",
      "Structured Problem-Solving Approach"
    ],
    outcomes: [
      "Strong Problem-Solving Skills",
      "Algorithm Design Expertise",
      "DP & Graph Mastery",
      "Coding Interview Confidence",
      "Competitive Programming Skills",
      "Product-Company Ready Profile"
    ],
    cta: "Crack Your Dream Tech Interview!"
  }
};

const courseKeys = Object.keys(coursePreviewData);

/* ─── Course Preview Panel (shown on hover) ─── */
function CoursePreviewPanel({ course }) {
  const data = coursePreviewData[course];
  if (!data) return null;

  return (
    <div className="course-preview-panel">
      {/* Header */}
      <div className="cpp-header">
        <div className="cpp-header-badge">
          <Sparkles size={14} />
          <span>COURSE PREVIEW & INSIGHTS</span>
        </div>
        <h3 className="cpp-header-title">{data.tagline}</h3>
        <p className="cpp-header-subtitle">{data.subtitle}</p>
        <div className="cpp-duration-badge">
          <span className="cpp-duration-just">JUST</span>
          <span className="cpp-duration-number">{data.duration.split(" ")[0]}</span>
          <span className="cpp-duration-unit">{data.duration.split(" ")[1] || "Days"}</span>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="cpp-grid">
        {/* Why Choose Card */}
        <div className="cpp-card">
          <div className="cpp-card-header">
            <div className="cpp-card-icon cpp-icon-blue">
              <Target size={16} />
            </div>
            <h4 className="cpp-card-title">
              <Star size={14} className="cpp-star" />
              Why Choose Our Program?
            </h4>
          </div>
          <ul className="cpp-checklist">
            {data.whyChoose.map((item, idx) => (
              <li key={idx}>
                <CheckCircle size={13} className="cpp-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Skills Card */}
        <div className="cpp-card">
          <div className="cpp-card-header">
            <div className="cpp-card-icon cpp-icon-green">
              <Zap size={16} />
            </div>
            <h4 className="cpp-card-title">
              Key Skills You'll Master
            </h4>
          </div>
          <ul className="cpp-bullet-list">
            {data.keySkills.map((item, idx) => (
              <li key={idx}>
                <span className="cpp-bullet" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Program Benefits Card */}
        <div className="cpp-card">
          <div className="cpp-card-header">
            <div className="cpp-card-icon cpp-icon-amber">
              <Award size={16} />
            </div>
            <h4 className="cpp-card-title">
              <Sparkles size={14} className="cpp-star-amber" />
              Program Benefits
            </h4>
          </div>
          <ul className="cpp-star-list">
            {data.benefits.map((item, idx) => (
              <li key={idx}>
                <Star size={12} className="cpp-star-bullet" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="cpp-bottom-row">
        {/* What Makes Different */}
        <div className="cpp-card cpp-card-bottom">
          <div className="cpp-card-header">
            <div className="cpp-card-icon cpp-icon-purple">
              <BookOpen size={16} />
            </div>
            <h4 className="cpp-card-title">What Makes This Program Different?</h4>
          </div>
          <ul className="cpp-arrow-list">
            {data.differentiators.map((item, idx) => (
              <li key={idx}>
                <ChevronRight size={13} className="cpp-arrow-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Outcome */}
        <div className="cpp-card cpp-card-bottom">
          <div className="cpp-card-header">
            <div className="cpp-card-icon cpp-icon-teal">
              <TrendingUp size={16} />
            </div>
            <h4 className="cpp-card-title">Your Outcome After {data.duration}</h4>
          </div>
          <ul className="cpp-outcome-list">
            {data.outcomes.map((item, idx) => (
              <li key={idx}>
                <CheckCircle size={13} className="cpp-outcome-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <a href={data.href} className="cpp-cta-button">
        <GraduationCap size={18} />
        <span>{data.cta}</span>
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

/* ─── Main Dropdown ─── */
export default function CoursePreviewDropdown() {
  const [activeCourse, setActiveCourse] = useState(courseKeys[0]);

  return (
    <div className="cpd-container">
      {/* Left: Course List */}
      <div className="cpd-sidebar">
        <div className="cpd-sidebar-header">
          <GraduationCap size={16} className="text-green-600" />
          <span>Our Courses</span>
        </div>
        {courseKeys.map((course) => {
          const data = coursePreviewData[course];
          const Icon = data.icon;
          const isActive = activeCourse === course;
          return (
            <a
              key={course}
              href={data.href}
              className={`cpd-course-item ${isActive ? "cpd-course-active" : ""}`}
              onMouseEnter={() => setActiveCourse(course)}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`cpd-course-icon ${isActive ? "cpd-course-icon-active" : ""}`}>
                <Icon size={16} />
              </div>
              <div className="cpd-course-info">
                <span className="cpd-course-name">{course}</span>
                <span className="cpd-course-duration">{data.duration} • {data.subtitle}</span>
              </div>
              <ChevronRight size={14} className={`cpd-course-arrow ${isActive ? "cpd-course-arrow-active" : ""}`} />
            </a>
          );
        })}
      </div>

      {/* Right: Preview Panel */}
      <div className="cpd-preview">
        <CoursePreviewPanel course={activeCourse} />
      </div>
    </div>
  );
}
