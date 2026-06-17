// Configuration data for all course pages on JAWA EDTECH
import courseAi from "../assets/course-ai.png";
import courseData from "../assets/course-data.png";
import courseGenai from "../assets/course-genai.png";
import courseUiux from "../assets/course-uiux.png";
import studentsImg from "../assets/fullstack-students.png";
import hrStudentsImg from "../assets/hr-indian-professionals.png";
import hrPreviewImg from "../assets/hr-indian-professionals.png";
import fullstackPreviewImg from "../assets/fullstack-dev-team.png";
import qaPreviewImg from "../assets/qa-testing-professional.png";
import dsaPreviewImg from "../assets/dsa-coding-student.png";

import courseFullstack from "../assets/course-fullstack-banner.jpg";
import courseHrExecutive from "../assets/course-hr-executive-banner.jpg";
import courseHrRecruitment from "../assets/course-hr-recruitment-banner.jpg";
import courseDsa from "../assets/course-dsa-banner.jpg";
import courseQa from "../assets/course-qa-banner.jpg";

export const coursesConfig = {
  "hr-executive": {
    id: "hr-executive",
    title: "HR Executive Course",
    subtitle: "Human Resource Executive & Development Program",
    heroTitle: "JAWA EDTECH HR Executive Course Program",
    heroDesc: "Master core HR concepts, corporate operations, statutory compliance, payroll systems, and talent management with hands-on practice.",
    previewImg: courseData,
    previewHumanImg: hrPreviewImg,
    studentsImg: hrStudentsImg,
    price: "₹25,000",
    strikethroughPrice: "₹40,000",
    internshipPrice: "₹5,000",
    internshipStrikethrough: "₹7,000",
    features: [
      "JAWA EDTECH HR Executive Certification",
      "Live Online Classes",
      "6 Months",
      "Practical Payroll Course",
      "Labour Law Compliance",
      "HRMS Tool Mastery",
      "Resume & Mock Interview Prep"
    ],
    internshipFeatures: [
      "1-Month Internship Program",
      "Real-Time HR Case Studies",
      "Industry Mentor Guidance",
      "Internship Completion Certificate",
      "Project Report Assistance",
      "Career Guidance Session"
    ],
    hasInternshipCard: true,
    floatingLabelLeft: {
      icon: "📊",
      text: "HR Analytics"
    },
    floatingLabelRight: {
      text: "Operations",
      icon: "⚙️"
    },
    floatingLogoLeftKey: "excel",
    floatingLogoRightKey: "powerbi",
    tools: [
      { name: "Keka", logoKey: "keka" },
      { name: "greytHR", logoKey: "greythr" },
      { name: "Darwinbox", logoKey: "darwinbox" },
      { name: "Eightfold.ai", logoKey: "eightfold_img" },
      { name: "Zoho Recruit", logoKey: "zoho_recruit" }
    ],
    previewContent: {
      tagline: "Become an HR Professional in just 90 Days",
      description: "Do you want to become an HR Professional in just 90 Days? We have the thing for you! At JAWA EDTECH, our HR Executive Course program helps students and graduates become HR professionals. They can handle real-world HR responsibilities with confidence. Human Resources is not about recruitment and administration anymore. HR professionals play a role in finding the best talent doing employee engagement , handling performance management, Payroll to develop the organization and growing the business. Our HR Course is practical. Focused on the industry. It prepares you for HR roles in companies. You will work on hands-on projects, real-time case studies. Get expert guidance. This way you will gain the skills needed to succeed in today's job market.",
      learningOutcomes: [
        "HR Operations & Administration core concepts",
        "Employee onboarding and joining documentation",
        "Salary structure design and CTC calculation",
        "Statutory compliance rules (PF, ESI, Gratuity)",
        "Performance Management Systems (PMS)",
        "HR Analytics & HRMS Software dashboards",
        "Employee engagement and workplace culture building",
        "Exit management workflows and offboarding"
      ],
      whyChoose: [
        "Our course is built around what companies are actually looking for in HR professionals today.",
        "Learn HR through practical experience, including Recruitment, Payroll, HRMS, Employee Management, Compliance, and other day-to-day HR activities.",
        "Sessions are guided by experienced HR professionals who have worked directly in the industry and understand real workplace challenges.",
        "We believe learning happens by doing, so every module includes practical exercises, real-time examples, and hands-on activities.",
        "We help you create a professional resume, strengthen your LinkedIn profile, and prepare confidently for interviews.",
        "Our dedicated placement and career support team assists you throughout your job search journey.",
        "Upon successful completion of the program, you will receive a course completion certificate that adds value to your professional profile.",
        "Through our Career Development Centre, you'll receive continuous guidance, career mentoring, and support to help you build a successful future in Human Resources."
      ],
      careerOpportunities: [
        "HR Executive",
        "Recruitment Executive",
        "Talent Acquisition Specialist",
        "HR Generalist",
        "Payroll Executive",
        "Employee Relations Executive",
        "HR Coordinator",
        "Learning & Development Executive"
      ],
      whatYoullMaster: [
        "HR Fundamentals",
        "Recruitment & Selection",
        "Payroll Processing",
        "HR Operations",
        "Labour Law Compliance",
        "Employee Lifecycle Management",
        "Performance Management",
        "HR Documentation",
        "HR Analytics",
        "HRMS Tools",
        "Employee Engagement Strategies"
      ]
    },
    modules: [
      {
        id: 1,
        title: "HR Fundamentals & Corporate Environment",
        points: [
          { label: "HR Responsibilities", desc: "Understand the core responsibilities of HR professionals and how HR supports business growth." },
          { label: "Organizational Structure", desc: "Learn organizational structures, workplace policies, and professional HR practices." }
        ]
      },
      {
        id: 2,
        title: "Recruitment & Talent Acquisition",
        points: [
          { label: "Hiring Lifecycle", desc: "Learn the complete hiring process from requirement gathering to candidate onboarding." },
          { label: "Sourcing Strategies", desc: "Gain practical exposure to modern recruitment strategies and talent acquisition techniques." }
        ]
      },
      {
        id: 3,
        title: "Candidate Screening & Interview Management",
        points: [
          { label: "Resume Screening", desc: "Develop skills in resume screening and candidate evaluation." },
          { label: "Coordination", desc: "Learn interview coordination and how to identify the right talent efficiently." }
        ]
      },
      {
        id: 4,
        title: "Employee Onboarding & Documentation",
        points: [
          { label: "Onboarding", desc: "Master employee onboarding procedures and joining formalities." },
          { label: "Documentation", desc: "Understand essential HR documentation for a seamless onboarding experience." }
        ]
      },
      {
        id: 5,
        title: "Payroll Processing & Compensation Management",
        points: [
          { label: "Salary Structures", desc: "Learn salary structures, payroll processing, and salary deductions." },
          { label: "Deductions", desc: "Understand employee benefits management and payroll systems used in organizations." }
        ]
      },
      {
        id: 6,
        title: "Statutory Compliance & Labour Laws",
        points: [
          { label: "Labour Laws", desc: "Gain knowledge of PF, ESI, Gratuity, and labor law compliance requirements." },
          { label: "Compliance", desc: "Learn essential legal responsibilities and audits of HR professionals." }
        ]
      },
      {
        id: 7,
        title: "Employee Engagement & Workplace Culture",
        points: [
          { label: "Engagement", desc: "Explore strategies to improve employee satisfaction and retention." },
          { label: "Workplace Culture", desc: "Learn organizational engagement initiatives that drive productivity." }
        ]
      },
      {
        id: 8,
        title: "Performance Management System (PMS)",
        points: [
          { label: "Goal Setting", desc: "Understand goal setting and KPI tracking." },
          { label: "Appraisal", desc: "Learn performance reviews and appraisal processes used to evaluate performance." }
        ]
      },
      {
        id: 9,
        title: "HR Analytics & HRMS Tools",
        points: [
          { label: "Analytics", desc: "Work with HR reports, metrics, and dashboards." },
          { label: "HRMS Software", desc: "Develop data-driven HR decision-making skills using software platforms." }
        ]
      },
      {
        id: 10,
        title: "Exit Management & Real-Time HR Project",
        points: [
          { label: "Exit Management", desc: "Learn resignation handling, exit interviews, and employee offboarding processes." },
          { label: "HR Project", desc: "Gain practical experience through real-world HR projects." }
        ]
      }
    ],
    faqs: [
      { q: "Who can join this course?", a: "This program is suitable for graduates, MBA HR students, career changers, and working professionals who want to enter the HR field." },
      { q: "Do I need prior HR experience?", a: "No, the course starts from the absolute basics, covering foundational HR structures and policies before moving to complex compliance and tools." },
      { q: "What is the course duration?", a: "The course program spans approximately 6 months of interactive weekly modules, with optional internship support." },
      { q: "Is the course online or offline?", a: "The course is offline." },
      { q: "Will I receive a certificate?", a: "Yes, you will earn a JAWA EDTECH HR Executive Certificate upon completion of the course requirements." },
      { q: "Will I learn tools like SAP or Zoho?", a: "Yes, you will get hands-on familiarity with popular HRMS and payroll tools including Zoho People, SAP HR concepts, and Excel." }
    ]
  },
  "hr-recruitment": {
    id: "hr-recruitment",
    title: "HR Recruitment Course",
    subtitle: "Recruitment & Talent Acquisition Program",
    heroTitle: "JAWA EDTECH HR Recruitment Course Program",
    heroDesc: "Become an expert in talent acquisition. Learn advanced candidate sourcing, resume screening, talent mapping, ATS tools, and recruitment automation.",
    previewImg: courseGenai,
    previewHumanImg: hrPreviewImg,
    studentsImg: hrStudentsImg,
    price: "₹15,000",
    strikethroughPrice: "₹35,000",
    internshipPrice: "₹3,500",
    internshipStrikethrough: "₹5,000",
    features: [
      "JAWA EDTECH Recruitment Specialist Certificate",
      "Live Sourcing Simulations",
      "6 Months",
      "LinkedIn Recruiter Course",
      "ATS Automation Hands-on",
      "Salary Negotiation Prep",
      "Mock Interview Sessions"
    ],
    internshipFeatures: [
      "1-Month Internship Program",
      "Live Recruitment Projects",
      "Industry Mentor Guidance",
      "Internship Completion Certificate",
      "Placement Prep Support",
      "Career Guidance Session"
    ],
    hasInternshipCard: true,
    floatingLabelLeft: {
      icon: "🔍",
      text: "Sourcing"
    },
    floatingLabelRight: {
      text: "Onboarding",
      icon: "🤝"
    },
    floatingLogoLeftKey: "linkedin",
    floatingLogoRightKey: "naukri",
    tools: [
      { name: "Keka", logoKey: "keka" },
      { name: "greytHR", logoKey: "greythr" },
      { name: "Darwinbox", logoKey: "darwinbox" },
      { name: "Eightfold.ai", logoKey: "eightfold_img" },
      { name: "Zoho Recruit", logoKey: "zoho_recruit" }
    ],
    previewContent: {
      tagline: "Become a Recruitment Professional in just 45 days",
      description: "Do you want to have a career in HR recruitment and talent acquisition? JAWA EDTECH's HR Recruitment Course Program is for students, graduates and people who want to become recruiters. They want to learn how companies find, screen, interview and hire the people for the job. Our Recruitment Course Course teaches people about the ways to recruit. This includes how to find candidates, screen them, set up interviews and use the tools that HR professionals use.",
      learningOutcomes: [
        "Recruitment Foundation and Core functions",
        "Talent acquisition strategies",
        "Job analysis and job descriptions",
        "How to Source candidate",
        "How to screen resumes",
        "How to set up interviews and shortlisting",
        "How to assess candidates",
        "How to measure recruitment results",
        "How to use tracking systems and HRIS, HRMS, Recruitment softwares",
        "The basics of employer branding"
      ],
      whyChoose: [
        "Our course is practical, detailed, and completely structured around the real world.",
        "The curriculum is designed around what the recruitment industry is actively using today.",
        "We teach using live hiring scenarios, simulated requirements, and interactive workflows.",
        "Our trainers are experienced talent acquisition managers and HR professionals.",
        "We help individuals build professional sourcing profiles, resume optimization, and mock interviewer sessions.",
        "We provide dedicated career placement support, interview matching, and certification upon completion."
      ],
      careerOpportunities: [
        "Recruitment Executive",
        "Talent Acquisition Specialist",
        "HR Recruiter",
        "Recruitment Coordinator",
        "Talent Acquisition Executive",
        "Staffing Specialist",
        "Recruitment Consultant",
        "Sourcing Specialist"
      ],
      whatYoullMaster: [
        "HR recruitment process",
        "How to find talent",
        "How to screen resumes",
        "How to set up interviews",
        "How to use tracking systems",
        "How to assess candidates",
        "How to write recruitment reports",
        "How to make your company look good to employees",
        "Talent acquisition strategies",
        "Ways to hire people"
      ]
    },
    modules: [
      {
        id: 1,
        title: "Recruitment Industry Overview",
        points: [
          { label: "Overview", desc: "Understand the recruitment ecosystem, hiring models, and career opportunities in talent acquisition." },
          { label: "Fundamentals", desc: "Learn the fundamentals of modern recruitment and hiring metrics." }
        ]
      },
      {
        id: 2,
        title: "Job Analysis & Requirement Gathering",
        points: [
          { label: "Job Analysis", desc: "Learn how recruiters understand client requirements and create effective job descriptions." },
          { label: "Requirement", desc: "Develop strong requirement analysis skills and intake call frameworks." }
        ]
      },
      {
        id: 3,
        title: "Candidate Sourcing Strategies",
        points: [
          { label: "Sourcing", desc: "Master sourcing through LinkedIn, job portals, social media, and networking platforms." },
          { label: "Pipelines", desc: "Build quality talent pipelines effectively for open positions." }
        ]
      },
      {
        id: 4,
        title: "Talent Mapping & Market Research",
        points: [
          { label: "Talent Mapping", desc: "Learn talent mapping techniques and competitor hiring analysis." },
          { label: "Engagement", desc: "Identify and engage top candidates strategically with outreach campaigns." }
        ]
      },
      {
        id: 5,
        title: "Resume Screening & Candidate Assessment",
        points: [
          { label: "Screening", desc: "Develop expertise in evaluating resumes and assessing candidate suitability." },
          { label: "Shortlisting", desc: "Learn practical screening sheets and pre-qualification shortlisting techniques." }
        ]
      },
      {
        id: 6,
        title: "Interview Coordination & Stakeholder Management",
        points: [
          { label: "Coordination", desc: "Manage interviews, candidate communication, and stakeholder expectations professionally." },
          { label: "Communication", desc: "Improve hiring coordination skills and candidate feedback loops." }
        ]
      },
      {
        id: 7,
        title: "Technical & HR Interview Basics",
        points: [
          { label: "Interviews", desc: "Understand interview methodologies and candidate evaluation frameworks." },
          { label: "Decisions", desc: "Learn how recruiters support hiring decisions through scorecards." }
        ]
      },
      {
        id: 8,
        title: "Offer Management & Joining Process",
        points: [
          { label: "Negotiations", desc: "Handle salary negotiations, offer rollouts, and candidate engagement activities." },
          { label: "Conversions", desc: "Ensure smooth candidate conversions and pre-joining follow-ups." }
        ]
      },
      {
        id: 9,
        title: "ATS Tools & Recruitment Automation",
        points: [
          { label: "ATS Tools", desc: "Gain hands-on experience with Applicant Tracking Systems and recruitment tools." },
          { label: "Automation", desc: "Improve hiring efficiency and workflows through technology." }
        ]
      },
      {
        id: 10,
        title: "Live Recruitment Project & Placement Preparation",
        points: [
          { label: "Recruitment Project", desc: "Work on real hiring requirements and recruitment simulations." },
          { label: "Placement Prep", desc: "Prepare for recruitment careers with practical exposure and interview support." }
        ]
      }
    ],
    faqs: [
      { q: "Who can join this course?", a: "Anyone interested in building a career in recruitment, talent acquisition, agency hiring, or corporate HR sourcing." },
      { q: "Do I need a tech background?", a: "No, recruiting roles exist in all sectors. We cover both tech and non-tech recruitment strategies." },
      { q: "What is the course duration?", a: "The course spans 6 months, featuring structured weekly modules and mock sourcing labs." },
      { q: "Is the course online or offline?", a: "The course is offline." },
      { q: "Will I receive a certificate?", a: "Yes, you will get a certified HR Recruiter Certificate from JAWA EDTECH." },
      { q: "Will I work on live requirements?", a: "Yes, you will simulate candidate sourcing for real job requirements using industry tools." }
    ]
  },
  "full-stack": {
    id: "full-stack",
    title: "Full Stack Development with AI",
    subtitle: "Full Stack Developer Course Program",
    heroTitle: "JAWA EDTECH Full Stack Development Program",
    heroDesc: "Build full stack skills in Full Stack Development with expert guidance, hands-on projects, and career support. Master tools like Git, MongoDB, Express, React, Node.js and more!",
    previewImg: courseAi,
    previewHumanImg: fullstackPreviewImg,
    studentsImg: studentsImg,
    price: "₹70,000",
    strikethroughPrice: "₹1,29,000",
    internshipPrice: "₹3,500",
    internshipStrikethrough: "₹5,000",
    features: [
      "JAWA EDTECH Full Stack Certification",
      "Live Online Classes",
      "1-on-1 Mock Interviews",
      "6-Month Program",
      "AI Integration Module",
      "Digital Portfolio on GitHub"
    ],
    internshipFeatures: [
      "1-Month Internship",
      "Hands-On Project Experience",
      "Industry Mentor Guidance",
      "Internship Completion Certificate",
      "Portfolio-Ready Project",
      "Career Guidance Session"
    ],
    hasInternshipCard: true,
    floatingLabelLeft: {
      icon: "</>",
      text: "Frontend"
    },
    floatingLabelRight: {
      text: "Backend",
      icon: "</>"
    },
    floatingLogoLeftKey: "react",
    floatingLogoRightKey: "vscode",
    tools: [
      { name: "JavaScript", logoKey: "js" },
      { name: "HTML", logoKey: "html" },
      { name: "CSS", logoKey: "css" },
      { name: "Tailwind CSS", logoKey: "tailwind" },
      { name: "React.js", logoKey: "react" },
      { name: "Redux", logoKey: "redux" },
      { name: "MySQL", logoKey: "mysql" },
      { name: "MongoDB", logoKey: "mongodb" },
      { name: "Node.js", logoKey: "node" },
      { name: "Express.js", logoKey: "express" },
      { name: "Postman", logoKey: "postman" },
      { name: "AWS", logoKey: "aws" },
      { name: "VS Code", logoKey: "vscode" },
      { name: "Mongoose", logoKey: "mongoose" },
      { name: "GitHub", logoKey: "github" },
      { name: "Git", logoKey: "git" },
      { name: "Cursor AI", logoKey: "cursor" }
    ],
    previewContent: {
      tagline: "Become a job ready Full Stack Developer",
      description: "Become a job ready Full Stack Developer. Do you want to build websites and web applications that companies use every day? At JAWA EDTECH, our Full Stack Development Course Program helps students and working professionals become Full Stack Developers. You will learn how to create web applications by working on both the front end and the back end of websites. Our Full Stack Developer Course is designed with what companies need in mind. You will work on projects and assignments that're like what you will do on the job. You will also get help from experts who have been doing this for a time. This will give you the skills you need to get a job in software development.",
      learningOutcomes: [
        "HTML5, CSS3 and JavaScript",
        "How to make websites look good on all devices",
        "Front End Development with React.js",
        "Back End Development with Node.js",
        "Express.js Framework",
        "How to manage databases with MongoDB",
        "How to make REST APIs",
        "Git and GitHub Version Control",
        "How to put your website online",
        "Working on projects"
      ],
      whyChoose: [
        "Learn the latest Full Stack Development skills that companies are hiring for.",
        "Build real-world projects and web applications with hands-on course.",
        "Get trained by experienced industry professionals.",
        "Create a strong portfolio to showcase your skills.",
        "Receive resume building and interview preparation support.",
        "Benefit from placement assistance and career guidance.",
        "Earn an industry-recognized certification upon completion.",
        "Access continuous support through our Career Development Centre."
      ],
      careerOpportunities: [
        "Full Stack Developer",
        "Front End Developer",
        "Back End Developer",
        "Web Developer",
        "Software Developer",
        "Application Developer",
        "JavaScript Developer",
        "UI Developer"
      ],
      whatYoullMaster: [
        "HTML and CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git and GitHub",
        "Putting your website online",
        "Making Stack Projects"
      ]
    },
    modules: [
      {
        id: 1,
        title: "Programming & Web Development Fundamentals",
        points: [
          { label: "Web Foundations", desc: "Master HTML5 structure, CSS3 styling, and core JavaScript programming concepts from the ground up." },
          { label: "Modern JavaScript", desc: "Apply ES6+ features including arrow functions, destructuring, template literals, and modules." }
        ]
      },
      {
        id: 2,
        title: "Responsive Front-End Development",
        points: [
          { label: "Mobile-First Design", desc: "Build layouts that adapt beautifully across all screen sizes and devices." },
          { label: "CSS Mastery", desc: "Use Flexbox, Grid, and media queries to create polished, professional interfaces." }
        ]
      },
      {
        id: 3,
        title: "React.js Application Development",
        points: [
          { label: "Component Architecture", desc: "Build reusable, modular UI components using React's component-based structure." },
          { label: "State & Props", desc: "Manage data flow between components using state management and props effectively." }
        ]
      },
      {
        id: 4,
        title: "Backend Development with Node.js",
        points: [
          { label: "Node.js Runtime", desc: "Understand the event loop, asynchronous programming, and Node.js fundamentals." },
          { label: "Express Framework", desc: "Build server-side applications and define routes, middleware, and controllers." }
        ]
      },
      {
        id: 5,
        title: "Database Design & Management",
        points: [
          { label: "SQL Fundamentals", desc: "Write queries, define schemas, and manage relational databases effectively." },
          { label: "MongoDB & NoSQL", desc: "Work with document-based databases and understand when to use NoSQL solutions." }
        ]
      },
      {
        id: 6,
        title: "REST API Development & Integration",
        points: [
          { label: "API Architecture", desc: "Design scalable, well-structured RESTful APIs using HTTP standards and best practices." },
          { label: "Request/Response Cycle", desc: "Handle HTTP methods, status codes, headers, and response formats correctly." }
        ]
      },
      {
        id: 7,
        title: "Authentication & Application Security",
        points: [
          { label: "JWT Authentication", desc: "Implement JSON Web Token-based authentication for secure, stateless sessions." },
          { label: "OAuth2 & Social Login", desc: "Enable login via Google, GitHub, and other identity providers using OAuth2 flows." }
        ]
      },
      {
        id: 8,
        title: "AI Integration & Prompt Engineering",
        points: [
          { label: "LLM API Integration", desc: "Connect to OpenAI and other large language model APIs to build AI-powered features." },
          { label: "Prompt Engineering", desc: "Craft effective prompts to get precise, reliable outputs from AI models." }
        ]
      },
      {
        id: 9,
        title: "Cloud Deployment & DevOps Fundamentals",
        points: [
          { label: "Git & GitHub", desc: "Master version control workflows, branching strategies, and collaborative development." },
          { label: "CI/CD Pipelines", desc: "Automate testing and deployment using continuous integration and delivery pipelines." }
        ]
      },
      {
        id: 10,
        title: "Industry-Level Capstone Project",
        points: [
          { label: "Full-Stack Application", desc: "Design and build a complete, production-ready web application end-to-end." },
          { label: "AI Feature Integration", desc: "Incorporate at least one AI-powered feature to demonstrate modern development skills." }
        ]
      }
    ],
    faqs: [
      { q: "Who can join this course?", a: "This course is open to anyone who wants to build a career in software development — students, fresh graduates, career changers, and working professionals. No prior experience is required; just bring your curiosity and commitment." },
      { q: "Do I need prior coding knowledge?", a: "No prior coding knowledge is required. The curriculum starts from absolute basics — HTML, CSS, and JavaScript — and progressively advances to full stack development with AI integration. Complete beginners are welcome." },
      { q: "What is the course duration?", a: "The Full Stack Development Course spans approximately 6 months with structured weekly modules. The 1-month internship program is available separately for hands-on industry experience." },
      { q: "Is the course online or offline?", a: "The course is offline." },
      { q: "Will I receive a certificate after completion?", a: "Yes! Upon successfully completing all modules and the capstone project, you will receive a JAWA EDTECH Full Stack Development Certificate, which you can showcase on LinkedIn and in job applications." },
      { q: "Will I work on real-world projects?", a: "Absolutely. The curriculum includes 100+ hours of hands-on project work across all modules, culminating in an industry-level capstone project that becomes a portfolio-ready showcase of your skills." }
    ]
  },
  "qa-testing": {
    id: "qa-testing",
    title: "Software Quality Testing (QA Testing)",
    subtitle: "Software Testing Course Program",
    heroTitle: "JAWA EDTECH Software Quality Testing (QA) Program",
    heroDesc: "Master manual and automated software testing. Learn test planning, bug tracking, SQL, API testing with Postman, Selenium WebDriver, and CI/CD pipelines.",
    previewImg: courseUiux,
    previewHumanImg: qaPreviewImg,
    studentsImg: studentsImg,
    price: "₹65,000",
    strikethroughPrice: "₹1,10,000",
    features: [
      "JAWA EDTECH QA Engineer Certification",
      "Live Automated Testing Labs",
      "Selenium WebDriver & TestNG",
      "API Testing with Postman",
      "SQL Database Testing",
      "GitHub & CI/CD Integration"
    ],
    hasInternshipCard: false,
    floatingLabelLeft: {
      icon: "🐞",
      text: "Manual Testing"
    },
    floatingLabelRight: {
      text: "Automation",
      icon: "🤖"
    },
    floatingLogoLeftKey: "selenium",
    floatingLogoRightKey: "postman",
    tools: [
      { name: "Selenium", logoKey: "selenium" },
      { name: "Postman", logoKey: "postman" },
      { name: "Jira", logoKey: "jira" },
      { name: "TestNG", logoKey: "testng" },
      { name: "Maven", logoKey: "maven" },
      { name: "SQL", logoKey: "sql" },
      { name: "GitHub", logoKey: "github" },
      { name: "Git", logoKey: "git" },
      { name: "Jenkins", logoKey: "jenkins" },
      { name: "VS Code", logoKey: "vscode" },
      { name: "DevTools", logoKey: "devtools" },
      { name: "Swagger", logoKey: "swagger" }
    ],
    previewContent: {
      tagline: "Become a Skilled Software Testing Professional",
      description: "Do you want to build a career in software testing and quality assurance? JAWA EDTECH's Software Quality Testing Course Program helps students and graduates gain practical knowledge of software testing processes used in leading IT companies. Learn how to identify defects, improve software quality, and ensure applications work efficiently before reaching users. Our QA Testing Course focuses on practical learning, industry standards, and real-time testing projects that prepare you for a successful career in software quality assurance.",
      learningOutcomes: [
        "Software Testing Fundamentals",
        "Manual Testing Techniques",
        "Software Development Life Cycle (SDLC)",
        "Software Testing Life Cycle (STLC)",
        "Test Case Design and Execution",
        "Bug Reporting and Defect Tracking",
        "Functional and Non-Functional Testing",
        "Regression Testing",
        "Agile Testing Methodologies",
        "Automation Testing Basics"
      ],
      whyChoose: [
        "Industry-oriented course built around leading QA workflows.",
        "Real-time testing projects simulating corporate production releases.",
        "Practical defect tracking experience using tools like Jira.",
        "Expert QA trainers with years of software testing experience.",
        "Resume preparation and mock interview sessions tailored for QA candidates.",
        "Placement support and career guidance throughout the search.",
        "Certification upon course completion to validate your QA credentials."
      ],
      careerOpportunities: [
        "QA Tester",
        "Software Test Engineer",
        "Manual Tester",
        "Quality Assurance Analyst",
        "Automation Testing Engineer",
        "Test Analyst",
        "Quality Control Engineer",
        "Software Quality Engineer"
      ],
      whatYoullMaster: [
        "Manual Testing",
        "Test Case Writing",
        "Defect Tracking",
        "SDLC & STLC",
        "Functional Testing",
        "Regression Testing",
        "Agile Testing",
        "QA Documentation",
        "Testing Tools",
        "Quality Assurance Practices"
      ]
    },
    modules: [
      {
        id: 1,
        title: "Software Testing Fundamentals",
        points: [
          { label: "Fundamentals", desc: "Understand testing methodologies, SDLC, and STLC concepts." },
          { label: "Quality Assurance", desc: "Learn the importance of quality assurance in software development lifecycle." }
        ]
      },
      {
        id: 2,
        title: "Manual Testing Concepts",
        points: [
          { label: "Test Planning", desc: "Learn test planning, test case execution, and test validation." },
          { label: "Bug Reporting", desc: "Master defect documentation and professional bug reporting techniques." }
        ]
      },
      {
        id: 3,
        title: "Test Case Design & Documentation",
        points: [
          { label: "Test Cases", desc: "Create effective test cases, test scenarios, and user journey scripts." },
          { label: "Documentation", desc: "Build standard testing documentation to improve software quality." }
        ]
      },
      {
        id: 4,
        title: "Agile Testing & Defect Management",
        points: [
          { label: "Agile", desc: "Work within Agile sprints, participate in standups, and manage issues." },
          { label: "Defects", desc: "Collaborate effectively with development teams using defect life cycles." }
        ]
      },
      {
        id: 5,
        title: "Database Testing",
        points: [
          { label: "SQL Validation", desc: "Validate backend database tables using queries and SQL commands." },
          { label: "Integrity", desc: "Ensure database record accuracy and structural consistency." }
        ]
      },
      {
        id: 6,
        title: "API Testing with Postman",
        points: [
          { label: "Web Services", desc: "Test REST web services and APIs using industry-standard Postman." },
          { label: "Integration", desc: "Verify application API integrations, endpoints, and response status." }
        ]
      },
      {
        id: 7,
        title: "Selenium Automation Testing",
        points: [
          { label: "Automation", desc: "Automate manual regression testing scenarios using Selenium WebDriver." },
          { label: "Locators", desc: "Locate elements, manipulate actions, and handle alerts." }
        ]
      },
      {
        id: 8,
        title: "Automation Frameworks & CI/CD Basics",
        points: [
          { label: "Frameworks", desc: "Understand automation design patterns like Page Object Model and TestNG." },
          { label: "CI/CD Basics", desc: "Learn continuous integration, build tools like Maven, and QA pipeline runs." }
        ]
      },
      {
        id: 9,
        title: "Real-Time Testing Project",
        points: [
          { label: "Application Testing", desc: "Apply testing skills on a live web application in a simulated environment." },
          { label: "QA Processes", desc: "Experience industry-level manual and automation QA processes." }
        ]
      },
      {
        id: 10,
        title: "Interview Preparation & Placement Support",
        points: [
          { label: "Interviews", desc: "Prepare for QA interview loops with mock tests and coding exercises." },
          { label: "Confidence", desc: "Build confidence for successful technical placement runs." }
        ]
      }
    ],
    faqs: [
      { q: "Who can join this course?", a: "Students, graduates, or professionals looking to build a career in software quality assurance and automation testing." },
      { q: "Do I need programming knowledge?", a: "No prior coding is required. We start with manual testing and introduce Java/JavaScript fundamentals needed for Selenium automation." },
      { q: "What is the course duration?", a: "The course spans 6 months of weekly course, covering manual testing, automated testing, and API verification." },
      { q: "Is the course online or offline?", a: "The course is offline." },
      { q: "Will I get a certificate?", a: "Yes, you will receive a JAWA EDTECH Certified QA Testing Certificate upon successful completion." },
      { q: "Will I work on automation projects?", a: "Yes, you will design automated test suites for web applications using Selenium and Postman." }
    ]
  },
  "dsa": {
    id: "dsa",
    title: "Data Structures & Algorithms (DSA)",
    subtitle: "DSA Course Program",
    heroTitle: "JAWA EDTECH DSA & Coding Interview Program",
    heroDesc: "Crack your dream product-company interviews. Master complexity analysis, arrays, lists, recursion, trees, graphs, dynamic programming, and competitive coding.",
    previewImg: courseDsa,
    previewHumanImg: dsaPreviewImg,
    studentsImg: studentsImg,
    studentsImg: studentsImg,
    price: "₹30,000",
    strikethroughPrice: "₹45,000",
    features: [
      "JAWA EDTECH DSA Course Completion Certificate",
      "Live Problem-Solving Walkthroughs",
      "Complexity Analysis & Optimization",
      "LeetCode & Competitive Programming Prep",
      "Mock Technical Coding Interviews",
      "Resume & Placement Support"
    ],
    hasInternshipCard: false,
    floatingLabelLeft: {
      icon: "💡",
      text: "Data Structures"
    },
    floatingLabelRight: {
      text: "Algorithms",
      icon: "⚡"
    },
    floatingLogoLeftKey: "leetcode",
    floatingLogoRightKey: "java",
    tools: [
      { name: "C++", logoKey: "cpp" },
      { name: "Java", logoKey: "java" },
      { name: "Python", logoKey: "python" },
      { name: "VS Code", logoKey: "vscode" },
      { name: "LeetCode", logoKey: "leetcode" },
      { name: "HackerRank", logoKey: "hackerrank" },
      { name: "CodeChef", logoKey: "codechef" },
      { name: "GeeksforGeeks", logoKey: "geeksforgeeks" },
      { name: "Git", logoKey: "git" },
      { name: "GitHub", logoKey: "github" }
    ],
    previewContent: {
      tagline: "Master Data Structures and Algorithms for Top Tech Careers",
      description: "Do you want to crack coding interviews and secure jobs in leading IT companies? JAWA EDTECH's Data Structures and Algorithms Course Program helps students build strong problem-solving and programming skills. Learn the concepts that top technology companies use to evaluate software developers during technical interviews. Our DSA Course focuses on coding practice, logical thinking, algorithm optimization, and interview preparation through hands-on problem-solving sessions.",
      learningOutcomes: [
        "Programming Fundamentals",
        "Arrays and Strings",
        "Linked Lists",
        "Stacks and Queues",
        "Trees and Binary Trees",
        "Graphs and Graph Traversal",
        "Searching Algorithms",
        "Sorting Algorithms",
        "Recursion and Backtracking",
        "Dynamic Programming"
      ],
      whyChoose: [
        "Interview-focused curriculum covering coding pattern questions.",
        "Hands-on coding exercises with real-time compilers and problem solving.",
        "Industry-standard problem solving following top product company templates.",
        "Expert trainer guidance on dynamic programming and graph structures.",
        "Mock coding interviews simulating technical rounds under pressure.",
        "Resume and placement support to clear recruiter screening rounds.",
        "Course completion certification showcasing algorithmic competence."
      ],
      careerOpportunities: [
        "Software Developer",
        "Software Engineer",
        "Full Stack Developer",
        "Backend Developer",
        "Application Developer",
        "Java Developer",
        "Python Developer",
        "Technical Programmer"
      ],
      whatYoullMaster: [
        "Problem Solving",
        "Data Structures",
        "Algorithms",
        "Time Complexity",
        "Space Complexity",
        "Dynamic Programming",
        "Graph Algorithms",
        "Recursion",
        "Coding Interview Preparation",
        "Competitive Programming Skills"
      ]
    },
    modules: [
      {
        id: 1,
        title: "Programming Foundations",
        points: [
          { label: "Foundations", desc: "Develop strong coding fundamentals and logical thinking abilities." },
          { label: "Logic", desc: "Build the baseline logic required for advanced problem solving." }
        ]
      },
      {
        id: 2,
        title: "Complexity Analysis",
        points: [
          { label: "Runtimes", desc: "Learn Time Complexity and Space Complexity concepts." },
          { label: "Efficiency", desc: "Write efficient and optimized code using asymptotic notations." }
        ]
      },
      {
        id: 3,
        title: "Arrays & Strings Problem Solving",
        points: [
          { label: "Linear Structures", desc: "Master the most commonly used linear data structures in programming." },
          { label: "Challenges", desc: "Solve practical coding challenges on arrays and string patterns." }
        ]
      },
      {
        id: 4,
        title: "Linked Lists, Stacks & Queues",
        points: [
          { label: "Pointers", desc: "Understand linear data structures and dynamic allocation." },
          { label: "Applications", desc: "Strengthen your stack, queue, and list coding skills." }
        ]
      },
      {
        id: 5,
        title: "Recursion & Backtracking",
        points: [
          { label: "Recursion", desc: "Learn advanced problem-solving techniques using recursion." },
          { label: "Backtracking", desc: "Tackle complex puzzles and generation challenges confidently." }
        ]
      },
      {
        id: 6,
        title: "Searching & Sorting Algorithms",
        points: [
          { label: "Algorithms", desc: "Master essential search and sort algorithms used in coding interviews." },
          { label: "Optimization", desc: "Improve runtime efficiency and algorithmic performance." }
        ]
      },
      {
        id: 7,
        title: "Trees & Binary Search Trees",
        points: [
          { label: "Hierarchy", desc: "Explore hierarchical data structures and traversal techniques." },
          { label: "Search Trees", desc: "Solve advanced binary tree and BST coding problems." }
        ]
      },
      {
        id: 8,
        title: "Graphs & Advanced Algorithms",
        points: [
          { label: "Traversal", desc: "Learn BFS, DFS, and topological sort algorithms." },
          { label: "Shortest Path", desc: "Understand graph traversal and pathfinding concepts." }
        ]
      },
      {
        id: 9,
        title: "Dynamic Programming",
        points: [
          { label: "Optimization", desc: "Understand optimization techniques used in competitive programming." },
          { label: "DP Patterns", desc: "Master one of the most important coding interview concepts." }
        ]
      },
      {
        id: 10,
        title: "Coding Interview Preparation & Competitive Programming",
        points: [
          { label: "Interview Prep", desc: "Practice company-level coding questions and interview challenges." },
          { label: "Placement Ready", desc: "Get placement-ready with structured interview simulations." }
        ]
      }
    ],
    faqs: [
      { q: "Who can join this course?", a: "Students preparing for campus placements, software engineers aiming to switch to product companies, and competitive programmers." },
      { q: "What languages are supported?", a: "You can solve problems in C++, Java, or Python. The core logic of DSA remains the same." },
      { q: "What is the course duration?", a: "The course spans approximately 6 months of intensive problem-solving and algorithmic course." },
      { q: "Is the course online or offline?", a: "The course is offline." },
      { q: "Will I get a certificate?", a: "Yes, you will receive a JAWA EDTECH DSA Course Completion Certificate." },
      { q: "Will this help in product company interviews?", a: "Yes, the curriculum is specifically designed around coding interview patterns of companies like Amazon, Google, and Microsoft." }
    ]
  }
};
