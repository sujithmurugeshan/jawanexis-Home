import { useEffect, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { jsPDF } from "jspdf";

const courseSyllabi = {
  "HR Executive Training": {
    title: "HR Executive Training",
    modules: [
      {
        num: 1,
        title: "HR Fundamentals & Corporate Environment",
        desc: "Understand the core responsibilities of HR professionals and how HR supports business growth. Learn organizational structures, workplace policies, and professional HR practices."
      },
      {
        num: 2,
        title: "Recruitment & Talent Acquisition",
        desc: "Learn the complete hiring process from requirement gathering to candidate onboarding. Gain practical exposure to modern recruitment strategies and talent acquisition techniques."
      },
      {
        num: 3,
        title: "Candidate Screening & Interview Management",
        desc: "Develop skills in resume screening, candidate evaluation, and interview coordination. Learn how to identify the right talent efficiently."
      },
      {
        num: 4,
        title: "Employee Onboarding & Documentation",
        desc: "Master employee onboarding procedures, joining formalities, and HR documentation. Ensure a seamless employee onboarding experience."
      },
      {
        num: 5,
        title: "Payroll Processing & Compensation Management",
        desc: "Learn salary structures, payroll processing, deductions, and employee benefits management. Understand payroll systems used in organizations."
      },
      {
        num: 6,
        title: "Statutory Compliance & Labour Laws",
        desc: "Gain knowledge of PF, ESI, Gratuity, and labor law compliance requirements. Learn essential legal responsibilities of HR professionals."
      },
      {
        num: 7,
        title: "Employee Engagement & Workplace Culture",
        desc: "Explore strategies to improve employee satisfaction, retention, and organizational culture. Learn engagement initiatives that drive productivity."
      },
      {
        num: 8,
        title: "Performance Management System (PMS)",
        desc: "Understand goal setting, KPI tracking, performance reviews, and appraisal processes. Learn how organizations evaluate employee performance."
      },
      {
        num: 9,
        title: "HR Analytics & HRMS Tools",
        desc: "Work with HR reports, metrics, dashboards, and HR software platforms. Develop data-driven HR decision-making skills."
      },
      {
        num: 10,
        title: "Exit Management & Real-Time HR Project",
        desc: "Learn resignation handling, exit interviews, and employee offboarding processes. Gain practical experience through real-world HR projects."
      }
    ]
  },
  "HR Recruitment Training": {
    title: "HR Recruitment Training",
    modules: [
      {
        num: 1,
        title: "Recruitment Industry Overview",
        desc: "Understand the recruitment ecosystem, hiring models, and career opportunities in talent acquisition. Learn the fundamentals of modern recruitment."
      },
      {
        num: 2,
        title: "Job Analysis & Requirement Gathering",
        desc: "Learn how recruiters understand client requirements and create effective job descriptions. Develop strong requirement analysis skills."
      },
      {
        num: 3,
        title: "Candidate Sourcing Strategies",
        desc: "Master sourcing through LinkedIn, job portals, social media, and networking platforms. Build quality talent pipelines effectively."
      },
      {
        num: 4,
        title: "Talent Mapping & Market Research",
        desc: "Learn talent mapping techniques and competitor hiring analysis. Identify and engage top candidates strategically."
      },
      {
        num: 5,
        title: "Resume Screening & Candidate Assessment",
        desc: "Develop expertise in evaluating resumes and assessing candidate suitability. Learn practical shortlisting techniques."
      },
      {
        num: 6,
        title: "Interview Coordination & Stakeholder Management",
        desc: "Manage interviews, candidate communication, and stakeholder expectations professionally. Improve hiring coordination skills."
      },
      {
        num: 7,
        title: "Technical & HR Interview Basics",
        desc: "Understand interview methodologies and candidate evaluation frameworks. Learn how recruiters support hiring decisions."
      },
      {
        num: 8,
        title: "Offer Management & Joining Process",
        desc: "Handle salary negotiations, offer rollouts, and candidate engagement activities. Ensure smooth candidate conversions."
      },
      {
        num: 9,
        title: "ATS Tools & Recruitment Automation",
        desc: "Gain hands-on experience with Applicant Tracking Systems and recruitment tools. Improve hiring efficiency through technology."
      },
      {
        num: 10,
        title: "Live Recruitment Project & Placement Preparation",
        desc: "Work on real hiring requirements and recruitment simulations. Prepare for recruitment careers with practical exposure and interview support."
      }
    ]
  },
  "Full Stack Development": {
    title: "Full Stack Development with AI",
    modules: [
      {
        num: 1,
        title: "Programming & Web Development Fundamentals",
        desc: "Learn HTML, CSS, JavaScript, and programming concepts from the ground up. Build a strong foundation in web development."
      },
      {
        num: 2,
        title: "Responsive Front-End Development",
        desc: "Create modern, mobile-friendly user interfaces using industry best practices. Develop visually appealing web applications."
      },
      {
        num: 3,
        title: "React.js Application Development",
        desc: "Build dynamic and interactive applications using React.js. Learn component-based architecture and state management."
      },
      {
        num: 4,
        title: "Backend Development with Node.js",
        desc: "Develop powerful server-side applications and REST APIs. Understand backend workflows and application architecture."
      },
      {
        num: 5,
        title: "Database Design & Management",
        desc: "Learn SQL and NoSQL database concepts with hands-on implementation. Manage and optimize application data effectively."
      },
      {
        num: 6,
        title: "REST API Development & Integration",
        desc: "Create and integrate APIs that connect frontend and backend systems. Learn industry-standard communication protocols."
      },
      {
        num: 7,
        title: "Authentication & Application Security",
        desc: "Implement login systems, access control, and secure authentication methods. Protect applications from common vulnerabilities."
      },
      {
        num: 8,
        title: "AI Integration & Prompt Engineering",
        desc: "Explore AI-powered application development and prompt engineering techniques. Learn how AI enhances modern software solutions."
      },
      {
        num: 9,
        title: "Cloud Deployment & DevOps Fundamentals",
        desc: "Deploy applications on cloud platforms and manage production environments. Learn Git, GitHub, and deployment workflows."
      },
      {
        num: 10,
        title: "Industry-Level Capstone Project",
        desc: "Build a complete full-stack application with AI integration. Showcase your skills through a portfolio-ready project."
      }
    ]
  },
  "Software Quality Testing(QA Testing)": {
    title: "Software Quality Testing (QA Testing)",
    modules: [
      {
        num: 1,
        title: "Software Testing Fundamentals",
        desc: "Understand testing methodologies, SDLC, and STLC concepts. Learn the importance of quality assurance in software development."
      },
      {
        num: 2,
        title: "Manual Testing Concepts",
        desc: "Learn test planning, execution, validation, and bug reporting techniques. Gain practical testing experience."
      },
      {
        num: 3,
        title: "Test Case Design & Documentation",
        desc: "Create effective test cases, scenarios, and testing documentation. Improve software quality through structured testing."
      },
      {
        num: 4,
        title: "Agile Testing & Defect Management",
        desc: "Work within Agile environments and manage defects efficiently. Collaborate effectively with development teams."
      },
      {
        num: 5,
        title: "Database Testing",
        desc: "Validate backend data using SQL queries and database testing techniques. Ensure data accuracy and consistency."
      },
      {
        num: 6,
        title: "API Testing with Postman",
        desc: "Test web services and APIs using industry-standard tools. Verify application integrations and functionality."
      },
      {
        num: 7,
        title: "Selenium Automation Testing",
        desc: "Automate testing processes using Selenium WebDriver. Improve testing efficiency and productivity."
      },
      {
        num: 8,
        title: "Automation Frameworks & CI/CD Basics",
        desc: "Understand automation frameworks and continuous testing practices. Learn modern QA workflows."
      },
      {
        num: 9,
        title: "Real-Time Testing Project",
        desc: "Apply testing skills in a live project environment. Experience industry-level QA processes."
      },
      {
        num: 10,
        title: "Interview Preparation & Placement Support",
        desc: "Prepare for QA interviews with mock assessments and practical exercises. Build confidence for successful placements."
      }
    ]
  },
  "DSA": {
    title: "Data Structures & Algorithms (DSA)",
    modules: [
      {
        num: 1,
        title: "Programming Foundations",
        desc: "Develop strong coding fundamentals and logical thinking abilities. Build the base required for advanced problem solving."
      },
      {
        num: 2,
        title: "Complexity Analysis",
        desc: "Learn Time Complexity and Space Complexity concepts. Write efficient and optimized code."
      },
      {
        num: 3,
        title: "Arrays & Strings Problem Solving",
        desc: "Master the most commonly used data structures in programming. Solve practical coding challenges effectively."
      },
      {
        num: 4,
        title: "Linked Lists, Stacks & Queues",
        desc: "Understand linear data structures and their real-world applications. Strengthen your coding and analytical skills."
      },
      {
        num: 5,
        title: "Recursion & Backtracking",
        desc: "Learn advanced problem-solving techniques using recursion. Tackle complex coding challenges confidently."
      },
      {
        num: 6,
        title: "Searching & Sorting Algorithms",
        desc: "Master essential algorithms used in interviews and software development. Improve coding efficiency and performance."
      },
      {
        num: 7,
        title: "Trees & Binary Search Trees",
        desc: "Explore hierarchical data structures and traversal techniques. Solve advanced coding problems effectively."
      },
      {
        num: 8,
        title: "Graphs & Advanced Algorithms",
        desc: "Learn BFS, DFS, shortest path algorithms, and graph traversal concepts. Build expertise in advanced programming topics."
      },
      {
        num: 9,
        title: "Dynamic Programming",
        desc: "Understand optimization techniques used in competitive programming and technical interviews. Master one of the most important DSA concepts."
      },
      {
        num: 10,
        title: "Coding Interview Preparation & Competitive Programming",
        desc: "Practice company-level coding questions and interview challenges. Get placement-ready with structured interview preparation."
      }
    ]
  }
};

function SyllabusModal({ isOpen, onClose, courseTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    education: "",
    profile: "",
    graduationYear: "",
    language: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        education: "",
        profile: "",
        graduationYear: "",
        language: ""
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow digits only
    setFormData((prev) => ({
      ...prev,
      phone: value
    }));
    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.education) {
      newErrors.education = "Educational qualification is required";
    }

    if (!formData.profile) {
      newErrors.profile = "Current profile is required";
    }

    if (!formData.graduationYear) {
      newErrors.graduationYear = "Year of graduation is required";
    }

    if (!formData.language) {
      newErrors.language = "Speaking language is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerDownload = () => {
    const doc = new jsPDF();
    
    // Add Jawan EdTech header bar
    doc.setFillColor(11, 138, 50); // Deep green
    doc.rect(0, 0, 210, 8, "F");

    // Logo / Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(17, 17, 17);
    doc.text("Jawa EDTech", 14, 24);

    // Tagline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(11, 138, 50);
    doc.text("LEARN, LEAD, INNOVATE!", 14, 29);

    // Divider
    doc.setDrawColor(215, 234, 220); // guvi line #d7eadc
    doc.setLineWidth(0.5);
    doc.line(14, 34, 196, 34);

    // Course Title mapping
    const mappedCourse = courseSyllabi[courseTitle] || {
      title: courseTitle || "Professional Training Program",
      modules: []
    };

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(11, 138, 50);
    doc.text(mappedCourse.title.toUpperCase(), 14, 44);
    doc.setFontSize(11);
    doc.setTextColor(17, 17, 17);
    doc.text("Official Curriculum Syllabus", 14, 50);

    // Candidate Details Box (Light background)
    doc.setFillColor(244, 255, 247); // guvi soft #f4fff7
    doc.rect(14, 55, 182, 32, "F");
    doc.setDrawColor(215, 234, 220); // guvi line #d7eadc
    doc.rect(14, 55, 182, 32, "S");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(11, 138, 50);
    doc.text("CANDIDATE INFORMATION", 18, 61);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(17, 17, 17);
    doc.setFontSize(9);
    doc.text(`Name: ${formData.name}`, 18, 67);
    doc.text(`Email: ${formData.email}`, 18, 72);
    doc.text(`Phone: ${formData.countryCode} ${formData.phone}`, 18, 77);
    doc.text(`Language: ${formData.language}`, 18, 82);

    doc.text(`Education: ${formData.education}`, 110, 67);
    doc.text(`Profile: ${formData.profile}`, 110, 72);
    doc.text(`Graduation Year: ${formData.graduationYear}`, 110, 77);

    // Syllabus Content Intro
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(17, 17, 17);
    doc.text("Curriculum Structure (10 Modules)", 14, 96);
    
    // Draw Modules
    let yOffset = 104;
    const pageHeight = 297; // A4 height in mm
    
    mappedCourse.modules.forEach((mod) => {
      // Check if we need a new page (module takes about 25mm max)
      if (yOffset + 24 > pageHeight - 20) {
        doc.addPage();
        
        // Add green header bar on next page
        doc.setFillColor(11, 138, 50);
        doc.rect(0, 0, 210, 8, "F");
        
        yOffset = 20; // reset yOffset
      }

      // Module badge
      doc.setFillColor(233, 248, 239); // guvi mint #e9f8ef
      doc.roundedRect(14, yOffset, 22, 6, 1, 1, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(11, 138, 50);
      doc.text(`MODULE ${mod.num}`, 16, yOffset + 4.2);

      // Module Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(17, 17, 17);
      doc.text(mod.title, 40, yOffset + 4.5);

      // Module Description (Word wrapping)
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(75, 75, 75); // guvi muted #4b4b4b
      const descLines = doc.splitTextToSize(mod.desc, 156);
      doc.text(descLines, 40, yOffset + 10);

      yOffset += 12 + (descLines.length * 4.5);
    });

    // Check if footer space matches or needs new page
    if (yOffset + 25 > pageHeight - 20) {
      doc.addPage();
      doc.setFillColor(11, 138, 50);
      doc.rect(0, 0, 210, 8, "F");
      yOffset = 20;
    }

    // Footer Contact & Branding Block
    doc.setDrawColor(215, 234, 220);
    doc.line(14, yOffset + 5, 196, yOffset + 5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(11, 138, 50);
    doc.text("Jawa EdTech Career Preparation Programs", 14, yOffset + 12);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Contact: hr@jawaedtech.com | +91 97906 31286", 14, yOffset + 17);
    doc.text("Jawa Incubation Centre, No: 54 Bharathi Park 7th Cross, Saibaba Colony, Coimbatore, Tamil Nadu, India", 14, yOffset + 21);

    // Trigger PDF file download
    const cleanCourseName = (courseTitle || "Course").replace(/[^a-zA-Z0-9]/g, "_");
    doc.save(`${cleanCourseName}_Syllabus.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      triggerDownload();
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="relative flex flex-col w-full max-w-[480px] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#005c45] text-white">
          <h2 className="text-xl font-extrabold tracking-wide">Download Syllabus</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="text-guvi-green mb-4 animate-bounce" size={64} />
              <h3 className="text-2xl font-extrabold text-[#005c45] mb-2">Thank you!</h3>
              <p className="text-gray-700 font-medium">
                Your syllabus for <span className="font-bold text-black">{courseTitle}</span> is downloading...
              </p>
              <p className="text-xs text-gray-500 mt-4">This window will close automatically.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="syllabus-name" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Name*
                </label>
                <input
                  id="syllabus-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                    errors.name ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="syllabus-email" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Email ID*
                </label>
                <input
                  id="syllabus-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                    errors.email ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="syllabus-phone" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] cursor-pointer appearance-none pr-8"
                    >
                      <option value="+91">IN +91</option>
                      <option value="+1">US +1</option>
                      <option value="+44">UK +44</option>
                      <option value="+971">AE +971</option>
                      <option value="+65">SG +65</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    id="syllabus-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`flex-1 h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] ${
                      errors.phone ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone}</p>}
              </div>

              {/* Educational Qualification */}
              <div>
                <label htmlFor="syllabus-education" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Educational Qualification*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.education === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.education ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Education Qualification
                    </option>
                    <option value="Under Graduate (Engineering)">Under Graduate (Engineering)</option>
                    <option value="Under Graduate (Arts/Science/Commerce)">Under Graduate (Arts/Science/Commerce)</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="PhD / Research Scholar">PhD / Research Scholar</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.education && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.education}</p>}
              </div>

              {/* Current Profile */}
              <div>
                <label htmlFor="syllabus-profile" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Current Profile*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-profile"
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.profile === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.profile ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="College Student (Final Year)">College Student (Final Year)</option>
                    <option value="College Student (1st/2nd/3rd Year)">College Student (1st/2nd/3rd Year)</option>
                    <option value="Working Professional (IT)">Working Professional (IT)</option>
                    <option value="Working Professional (Non-IT)">Working Professional (Non-IT)</option>
                    <option value="Job Seeker / Unemployed">Job Seeker / Unemployed</option>
                    <option value="Freelancer / Self-employed">Freelancer / Self-employed</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.profile && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.profile}</p>}
              </div>

              {/* Year of Graduation */}
              <div>
                <label htmlFor="syllabus-graduation" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Year of Graduation*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-graduation"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.graduationYear === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.graduationYear ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Year of Graduation
                    </option>
                    {Array.from({ length: 15 }, (_, i) => {
                      const year = 2029 - i;
                      return (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      );
                    })}
                    <option value="Before 2015">Before 2015</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.graduationYear && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.graduationYear}</p>}
              </div>

              {/* Speaking Language */}
              <div>
                <label htmlFor="syllabus-language" className="block text-[14px] font-bold text-gray-600 mb-1">
                  Speaking Language*
                </label>
                <div className="relative">
                  <select
                    id="syllabus-language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className={`w-full h-10 px-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${
                      formData.language === "" ? "text-gray-400" : "text-black font-semibold"
                    } ${errors.language ? "border-red-500 focus:ring-red-200" : "border-gray-300"}`}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Tamil">Tamil</option>
                    <option value="English">English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.language && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.language}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 btn-glossy-green font-extrabold text-[16px] rounded-md mt-6 flex items-center justify-center cursor-pointer"
              >
                Download Syllabus
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SyllabusModal;
