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
    heroFeatureCards: [
      { icon: "Briefcase", title: "Practical Payroll Training", desc: "Master real-world payroll, CTC calculations, PF, ESI, and statutory compliance." },
      { icon: "Users", title: "Corporate HR Operations", desc: "Learn employee onboarding, performance management (PMS), and policy creation." },
      { icon: "Laptop", title: "HRMS Tool Mastery", desc: "Gain hands-on experience in leading HR systems like Zoho People and Keka." },
      { icon: "Award", title: "HR Executive Certification", desc: "Receive industry-recognized certification and comprehensive placement support." }
    ],
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
    careerPerks: [
      { title: "HR Leaders Mentorship", desc: "Interactive training from senior HR Directors and Managers with real corporate experience.", icon: "users" },
      { title: "Practical HR Labs", desc: "Hands-on practice designed for PF/ESI calculations, corporate payroll processing, and auditing.", icon: "document" },
      { title: "Corporate Placement Prep", desc: "Build senior-level HR resumes, practice mock corporate interviews, and learn HRMS job hacks.", icon: "target" },
      { title: "Corporate Compliance Projects", desc: "Work on real audit reports, salary structurings, and policy drafting projects.", icon: "briefcase" }
    ],
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
        "Recruitment & Candidate Sourcing",
        "Resume Screening & Interview Coordination",
        "Offer Letter & Joining Formalities",
        "Employee Database Management",
        "Attendance & Leave Administration",
        "Payroll Processing (PF, ESI, PT, TDS)",
        "HR Policies & Compliance",
        "Performance Appraisal Management",
        "Employee Grievance Handling",
        "HRMS & HR Reporting (MIS)"
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
        title: "Introduction to HR Management",
        points: [
          { label: "Fundamentals", desc: "Understand the fundamentals of Human Resource Management and its role in organizational success. Learn the key responsibilities of an HR Executive." },
          { label: "HR Functions", desc: "Explore HR functions such as recruitment, onboarding, payroll, and employee relations. Gain a comprehensive understanding of HR operations." },
          { label: "Employee Lifecycle", desc: "Learn the employee lifecycle from hiring to exit management. Understand how HR supports employees at every stage." },
          { label: "Organizational Structure", desc: "Understand organizational structures and HR department roles. Learn how HR aligns with business objectives." },
          { label: "Communication", desc: "Develop professional communication and interpersonal skills. Enhance workplace interactions and employee support." },
          { label: "Terminology", desc: "Learn HR terminology and industry practices. Build a strong foundation for HR operations." },
          { label: "Ethics & Confidentiality", desc: "Understand HR ethics and confidentiality requirements. Handle employee information responsibly." },
          { label: "Strategic HR", desc: "Explore strategic and operational HR functions. Learn how HR contributes to business growth." },
          { label: "Problem Solving", desc: "Identify common HR challenges and solutions. Develop problem-solving skills for workplace situations." },
          { label: "Practical Exposure", desc: "Gain practical exposure to HR processes and documentation. Prepare for real-world HR responsibilities." }
        ]
      },
      {
        id: 2,
        title: "Recruitment & Selection",
        points: [
          { label: "Process Overview", desc: "Learn the complete recruitment process from requirement gathering to hiring. Understand the role of HR in talent acquisition." },
          { label: "Job Descriptions", desc: "Create job descriptions and job specifications. Define roles and candidate requirements effectively." },
          { label: "Sourcing Candidates", desc: "Source candidates using job portals, social media, and referrals. Build a strong talent pipeline." },
          { label: "Resume Screening", desc: "Screen resumes based on job requirements and qualifications. Shortlist suitable candidates efficiently." },
          { label: "Coordination", desc: "Coordinate interviews and schedule candidate assessments. Ensure smooth recruitment operations." },
          { label: "HR Screening", desc: "Conduct initial HR screening interviews. Evaluate candidate suitability and communication skills." },
          { label: "Evaluation", desc: "Learn interview evaluation techniques. Make informed hiring recommendations." },
          { label: "Candidate Communication", desc: "Manage candidate communication throughout the hiring process. Improve candidate experience." },
          { label: "Offer Negotiation", desc: "Prepare offer letters and negotiate employment terms. Support successful candidate closures." },
          { label: "Metrics & Tracking", desc: "Track recruitment metrics and maintain hiring records. Improve recruitment efficiency and reporting." }
        ]
      },
      {
        id: 3,
        title: "Employee Onboarding & Induction",
        points: [
          { label: "Onboarding Process", desc: "Understand the onboarding process and its importance. Ensure a positive joining experience for new employees." },
          { label: "Documentation", desc: "Manage pre-joining documentation and verification. Maintain compliance and accuracy." },
          { label: "Joining Formalities", desc: "Prepare appointment letters and joining formalities. Complete employee onboarding efficiently." },
          { label: "Employee Records", desc: "Create employee records and maintain databases. Organize workforce information effectively." },
          { label: "Induction Programs", desc: "Conduct induction and orientation programs. Introduce company culture and policies." },
          { label: "Benefits & Guidelines", desc: "Explain employee benefits and workplace guidelines. Support employee integration." },
          { label: "Training Schedules", desc: "Coordinate training schedules for new hires. Facilitate smooth adaptation to job roles." },
          { label: "Probation Tracking", desc: "Manage probation period tracking and reviews. Monitor employee performance during onboarding." },
          { label: "Confirmation", desc: "Handle employee confirmation processes. Complete transition from probation to permanent employment." },
          { label: "Seamless Integration", desc: "Ensure seamless employee integration into the organization. Improve retention and engagement." }
        ]
      },
      {
        id: 4,
        title: "HR Documentation & Policies",
        points: [
          { label: "Record Management", desc: "Learn the importance of HR documentation and record management. Maintain accurate employee information." },
          { label: "Letters & Notices", desc: "Prepare appointment, confirmation, and promotion letters. Support employee lifecycle processes." },
          { label: "Disciplinary Action", desc: "Draft warning letters and disciplinary notices. Handle employee issues professionally." },
          { label: "Exit Documentation", desc: "Create experience and relieving letters. Manage employee exit documentation." },
          { label: "Personnel Files", desc: "Maintain employee personnel files and records. Ensure accessibility and compliance." },
          { label: "HR Policies", desc: "Understand company HR policies and procedures. Support policy implementation effectively." },
          { label: "Code of Conduct", desc: "Communicate workplace rules and code of conduct. Promote a positive work environment." },
          { label: "Confidentiality", desc: "Manage document retention and confidentiality practices. Protect organizational information." },
          { label: "Compliance Standards", desc: "Ensure compliance with internal documentation standards. Reduce operational risks." },
          { label: "Practical Skills", desc: "Develop practical skills in preparing HR documents. Gain hands-on HR administration experience." }
        ]
      },
      {
        id: 5,
        title: "Attendance & Leave Management",
        points: [
          { label: "Attendance Systems", desc: "Understand attendance management systems and processes. Track employee working hours accurately." },
          { label: "Records & Reports", desc: "Manage employee attendance records and reports. Ensure payroll accuracy." },
          { label: "Leave Policies", desc: "Learn leave policies and entitlement calculations. Administer employee leave efficiently." },
          { label: "Approvals", desc: "Process leave applications and approvals. Maintain workflow consistency." },
          { label: "Absenteeism Tracking", desc: "Track absenteeism and attendance irregularities. Identify workforce management issues." },
          { label: "Shift Management", desc: "Manage shift schedules and work rosters. Support operational requirements." },
          { label: "Overtime Calculation", desc: "Calculate overtime and compensatory leave. Ensure fair employee compensation." },
          { label: "Reporting", desc: "Generate attendance and leave reports. Support management decision-making." },
          { label: "Employee Queries", desc: "Handle attendance-related employee queries. Improve employee satisfaction." },
          { label: "Compliance", desc: "Maintain compliance with attendance and leave policies. Ensure organizational discipline." }
        ]
      },
      {
        id: 6,
        title: "Payroll & Compensation Management",
        points: [
          { label: "Payroll Fundamentals", desc: "Learn payroll processing fundamentals and salary structures. Understand employee compensation components." },
          { label: "Salary Calculation", desc: "Calculate earnings, deductions, and net salary. Process payroll accurately." },
          { label: "CTC & Gross Pay", desc: "Understand CTC, gross salary, and take-home pay concepts. Explain compensation structures clearly." },
          { label: "Payroll Inputs", desc: "Manage payroll inputs such as attendance and leave data. Ensure accurate salary calculations." },
          { label: "Statutory Deductions", desc: "Process statutory deductions including PF, ESI, and PT. Maintain legal compliance." },
          { label: "Payslips & Reports", desc: "Generate payslips and payroll reports. Support employee and management requirements." },
          { label: "Benefits Admin", desc: "Understand employee benefits and compensation policies. Administer rewards effectively." },
          { label: "Finance Coordination", desc: "Coordinate payroll activities with finance teams. Ensure timely salary processing." },
          { label: "Query Resolution", desc: "Handle payroll queries and discrepancies. Resolve employee concerns efficiently." },
          { label: "Records & Audits", desc: "Maintain payroll records and compliance documentation. Support audits and reporting." }
        ]
      },
      {
        id: 7,
        title: "Labor Laws & Statutory Compliance",
        points: [
          { label: "Labor Laws", desc: "Understand key labor laws applicable to organizations. Ensure legal HR practices." },
          { label: "Provident Fund", desc: "Learn Provident Fund (PF) regulations and compliance. Manage employee contributions accurately." },
          { label: "ESI Requirements", desc: "Understand Employee State Insurance (ESI) requirements. Support employee welfare compliance." },
          { label: "Bonus & Gratuity", desc: "Learn about the Payment of Bonus Act and Gratuity Act. Administer statutory benefits effectively." },
          { label: "Shops & Establishments", desc: "Understand Shops and Establishments Act provisions. Ensure workplace compliance." },
          { label: "Maternity Benefits", desc: "Learn maternity benefit regulations and employee rights. Support workplace inclusivity." },
          { label: "Workplace Safety", desc: "Understand workplace safety and labor standards. Promote a secure work environment." },
          { label: "Statutory Records", desc: "Maintain statutory records and registers. Ensure audit readiness." },
          { label: "Compliance Reports", desc: "Prepare compliance reports and documentation. Meet legal obligations efficiently." },
          { label: "Regulatory Updates", desc: "Monitor regulatory updates and HR compliance requirements. Reduce organizational risks." }
        ]
      },
      {
        id: 8,
        title: "Performance Management System",
        points: [
          { label: "Purpose & Benefits", desc: "Understand the purpose and benefits of performance management. Support employee growth and productivity." },
          { label: "Goal Setting", desc: "Learn goal-setting and KPI development techniques. Align employee objectives with business goals." },
          { label: "Appraisal Cycles", desc: "Manage performance appraisal cycles and schedules. Ensure timely evaluations." },
          { label: "Performance Reviews", desc: "Coordinate employee performance reviews. Facilitate effective feedback processes." },
          { label: "Assessment Tools", desc: "Use performance assessment tools and templates. Measure employee contributions accurately." },
          { label: "Manager Support", desc: "Support managers in performance evaluation activities. Improve review consistency." },
          { label: "Development Plans", desc: "Track employee development and improvement plans. Encourage continuous learning." },
          { label: "Documentation", desc: "Manage performance-related documentation and records. Maintain transparency and accountability." },
          { label: "Rewards & Recognition", desc: "Assist in reward and recognition programs. Motivate employee performance." },
          { label: "Data Analysis", desc: "Analyze performance data and reporting. Support informed HR decisions." }
        ]
      },
      {
        id: 9,
        title: "Employee Engagement & Relations",
        points: [
          { label: "Concepts & Benefits", desc: "Understand employee engagement concepts and benefits. Improve workplace satisfaction and productivity." },
          { label: "Engagement Programs", desc: "Develop employee engagement programs and activities. Foster positive organizational culture." },
          { label: "Communication Initiatives", desc: "Manage employee communication initiatives. Strengthen workplace relationships." },
          { label: "Grievance Handling", desc: "Handle employee grievances and concerns professionally. Promote trust and fairness." },
          { label: "Conflict Resolution", desc: "Learn conflict resolution and counseling techniques. Support healthy workplace interactions." },
          { label: "Events & Recognition", desc: "Organize employee events and recognition programs. Enhance employee morale." },
          { label: "Feedback Surveys", desc: "Conduct employee feedback and satisfaction surveys. Gather actionable insights." },
          { label: "Welfare & Retention", desc: "Support employee welfare and retention initiatives. Reduce turnover rates." },
          { label: "Employee Relations", desc: "Build strong employee relations through effective communication. Encourage collaboration." },
          { label: "Inclusive Environment", desc: "Create a positive and inclusive work environment. Improve overall employee experience." }
        ]
      },
      {
        id: 10,
        title: "HRMS & HR Reporting",
        points: [
          { label: "HRMS Functionalities", desc: "Understand HRMS functionalities and applications. Automate HR operations effectively." },
          { label: "Information Management", desc: "Manage employee information through HR software. Improve data accuracy and accessibility." },
          { label: "Process Automation", desc: "Use HRMS modules for attendance, leave, and payroll. Streamline HR processes." },
          { label: "Reports & Dashboards", desc: "Generate HR reports and dashboards. Support management reporting requirements." },
          { label: "Metrics Tracking", desc: "Track recruitment and employee performance metrics. Measure HR effectiveness." },
          { label: "Databases", desc: "Create and maintain employee databases. Improve workforce information management." },
          { label: "Data Analysis", desc: "Analyze HR data for decision-making. Support strategic workforce planning." },
          { label: "MIS Reports", desc: "Prepare monthly HR MIS reports. Provide valuable business insights." },
          { label: "Audits & Reviews", desc: "Conduct HR audits and process reviews. Identify improvement opportunities." },
          { label: "Analytics Skills", desc: "Develop practical skills in HR technology and analytics. Enhance operational efficiency." }
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
    heroFeatureCards: [
      { icon: "Search", title: "Sourcing & Job Portals", desc: "Master advanced sourcing on LinkedIn Recruiter, Naukri, Indeed, and social media." },
      { icon: "MessageSquare", title: "Interview & Assessment", desc: "Learn screening, interview scheduling, and conducting candidate evaluation." },
      { icon: "Laptop", title: "ATS Tool Mastery", desc: "Get hands-on experience using modern Applicant Tracking Systems (ATS)." },
      { icon: "Award", title: "Recruiter Certification", desc: "Earn your certified recruiter credentials and secure premium hiring guidance." }
    ],
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
    careerPerks: [
      { title: "Recruiter Mentorship", desc: "Direct training from talent acquisition heads and recruitment agency leaders.", icon: "search" },
      { title: "Candidate Sourcing Labs", desc: "Live practice sourcing candidates on LinkedIn, Naukri, and database platforms.", icon: "document" },
      { title: "Recruitment Career Launch", desc: "ATS selection tips, hiring coordinator mock interviews, and recruiter branding prep.", icon: "target" },
      { title: "ATS & Hiring Campaigns", desc: "Configure ATS pipelines, manage end-to-end recruitment drives, and candidate onboarding projects.", icon: "briefcase" }
    ],
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
            title: "Introduction to Recruitment",
            points: [
                  {
                        label: "Recruitment",
                        desc: "Understand the recruitment process and its importance in organizational growth. Learn the roles and responsibilities of a recruiter."
                  },
                  {
                        label: "Recruitment",
                        desc: "Explore the recruitment lifecycle from job requisition to onboarding. Gain a complete understanding of hiring workflows."
                  },
                  {
                        label: "Different types",
                        desc: "Learn different types of recruitment methods and hiring models. Identify the best approach for various business needs."
                  },
                  {
                        label: "Workforce planning and manpower forecasting",
                        desc: "Understand workforce planning and manpower forecasting. Align recruitment efforts with organizational goals."
                  },
                  {
                        label: "Recruitment terminology and industry standards",
                        desc: "Learn recruitment terminology and industry standards. Build a strong foundation in talent acquisition."
                  },
                  {
                        label: "Relationship",
                        desc: "Understand the relationship between HR and recruitment functions. Support effective hiring strategies."
                  },
                  {
                        label: "Current recruitment trends and technologies",
                        desc: "Explore current recruitment trends and technologies. Stay updated with modern hiring practices."
                  },
                  {
                        label: "Stakeholder management in recruitment",
                        desc: "Learn stakeholder management in recruitment. Coordinate effectively with hiring managers and candidates."
                  },
                  {
                        label: "Recruitment challenges and solutions",
                        desc: "Understand recruitment challenges and solutions. Develop problem-solving skills for hiring scenarios."
                  },
                  {
                        label: "Gain practical knowledge",
                        desc: "Gain practical knowledge of end-to-end recruitment operations. Prepare for real-world recruitment roles."
                  }
            ]
      },
      {
            id: 2,
            title: "Job Analysis & Requirement Gathering",
            points: [
                  {
                        label: "Process",
                        desc: "Learn the process of collecting hiring requirements from stakeholders. Understand business and workforce needs."
                  },
                  {
                        label: "Conduct job analysis",
                        desc: "Conduct job analysis to identify key responsibilities and competencies. Ensure accurate role definition."
                  },
                  {
                        label: "Create job descriptions and job specifications",
                        desc: "Create job descriptions and job specifications. Attract suitable candidates with clear expectations."
                  },
                  {
                        label: "Technical and non-technical hiring requirements",
                        desc: "Understand technical and non-technical hiring requirements. Recruit effectively across different domains."
                  },
                  {
                        label: "Competency mapping and skill identification",
                        desc: "Learn competency mapping and skill identification. Match candidates to organizational needs."
                  },
                  {
                        label: "Define qualifications, experience, and role expectations",
                        desc: "Define qualifications, experience, and role expectations. Improve candidate selection accuracy."
                  },
                  {
                        label: "Collaborate with hiring",
                        desc: "Collaborate with hiring managers for requirement clarification. Ensure alignment throughout the hiring process."
                  },
                  {
                        label: "Analyze workforce gaps and recruitment priorities",
                        desc: "Analyze workforce gaps and recruitment priorities. Support business growth through talent acquisition."
                  },
                  {
                        label: "Develop requirement documentation and hiring plans",
                        desc: "Develop requirement documentation and hiring plans. Improve recruitment efficiency."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience in creating and managing job requirements. Build confidence in recruitment planning."
                  }
            ]
      },
      {
            id: 3,
            title: "Candidate Sourcing Techniques",
            points: [
                  {
                        label: "Sourcing strategies for finding qualified candidates",
                        desc: "Learn sourcing strategies for finding qualified candidates. Build strong talent pipelines."
                  },
                  {
                        label: "Use job portals effectively for candidate searches",
                        desc: "Use job portals effectively for candidate searches. Improve sourcing productivity and reach."
                  },
                  {
                        label: "Leverage LinkedIn for",
                        desc: "Leverage LinkedIn for professional networking and recruitment. Connect with active and passive candidates."
                  },
                  {
                        label: "Boolean search",
                        desc: "Learn Boolean search techniques for advanced candidate sourcing. Improve search accuracy and efficiency."
                  },
                  {
                        label: "Utilize social media platforms for talent acquisition",
                        desc: "Utilize social media platforms for talent acquisition. Expand candidate reach beyond traditional channels."
                  },
                  {
                        label: "Implement employee referral programs",
                        desc: "Implement employee referral programs. Source quality candidates through internal networks."
                  },
                  {
                        label: "Build and maintain candidate databases",
                        desc: "Build and maintain candidate databases. Create a long-term talent pool for future hiring needs."
                  },
                  {
                        label: "Niche sourcing methods for specialized roles",
                        desc: "Explore niche sourcing methods for specialized roles. Recruit hard-to-find talent effectively."
                  },
                  {
                        label: "Engage passive candidates through targeted outreach",
                        desc: "Engage passive candidates through targeted outreach. Improve candidate response rates."
                  },
                  {
                        label: "Develop practical sourcing",
                        desc: "Develop practical sourcing strategies through real-world exercises. Gain hands-on recruitment experience."
                  }
            ]
      },
      {
            id: 4,
            title: "Resume Screening & Shortlisting",
            points: [
                  {
                        label: "How to evaluate resumes against job requirements",
                        desc: "Learn how to evaluate resumes against job requirements. Identify suitable candidates efficiently."
                  },
                  {
                        label: "Resume formats and structures",
                        desc: "Understand resume formats and structures. Analyze candidate profiles effectively."
                  },
                  {
                        label: "Screen resumes based",
                        desc: "Screen resumes based on skills, qualifications, and experience. Improve hiring quality."
                  },
                  {
                        label: "Identify resume red flags and inconsistencies",
                        desc: "Identify resume red flags and inconsistencies. Reduce hiring risks through careful evaluation."
                  },
                  {
                        label: "Develop candidate screening criteria and scorecards",
                        desc: "Develop candidate screening criteria and scorecards. Standardize shortlisting processes."
                  },
                  {
                        label: "Evaluate technical and non-technical profiles",
                        desc: "Evaluate technical and non-technical profiles. Recruit effectively across different job functions."
                  },
                  {
                        label: "Keyword-based resume screening techniques",
                        desc: "Learn keyword-based resume screening techniques. Improve shortlisting accuracy."
                  },
                  {
                        label: "Prioritize candidates based on job relevance",
                        desc: "Prioritize candidates based on job relevance. Enhance recruitment productivity."
                  },
                  {
                        label: "Maintain candidate screening records and reports",
                        desc: "Maintain candidate screening records and reports. Support recruitment tracking and analysis."
                  },
                  {
                        label: "Practice resume screening using real-world hiring scenarios",
                        desc: "Practice resume screening using real-world hiring scenarios. Build confidence in candidate assessment."
                  }
            ]
      },
      {
            id: 5,
            title: "Interview Coordination & Screening",
            points: [
                  {
                        label: "Different types",
                        desc: "Understand different types of interviews and selection methods. Support effective candidate evaluation."
                  },
                  {
                        label: "Schedule and coordinate",
                        desc: "Schedule and coordinate interviews with candidates and hiring managers. Ensure a smooth hiring process."
                  },
                  {
                        label: "Conduct HR screening interviews",
                        desc: "Conduct HR screening interviews. Assess communication skills, attitude, and cultural fit."
                  },
                  {
                        label: "Prepare interview questionnaires and evaluation forms",
                        desc: "Prepare interview questionnaires and evaluation forms. Improve interview consistency and quality."
                  },
                  {
                        label: "Behavioral and",
                        desc: "Learn behavioral and competency-based interviewing techniques. Identify candidate potential effectively."
                  },
                  {
                        label: "Assess candidate suitability",
                        desc: "Assess candidate suitability for organizational requirements. Support informed hiring decisions."
                  },
                  {
                        label: "Manage interview feedback collection and documentation",
                        desc: "Manage interview feedback collection and documentation. Streamline recruitment workflows."
                  },
                  {
                        label: "Coordinate virtual and in-person interviews",
                        desc: "Coordinate virtual and in-person interviews. Adapt to modern recruitment practices."
                  },
                  {
                        label: "Handle candidate communication",
                        desc: "Handle candidate communication throughout the interview process. Enhance candidate experience."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through mock interviews and screening exercises. Develop professional interviewing skills."
                  }
            ]
      },
      {
            id: 6,
            title: "Recruitment Tools & ATS",
            points: [
                  {
                        label: "Role of technology in modern recruitment",
                        desc: "Understand the role of technology in modern recruitment. Improve hiring efficiency through automation."
                  },
                  {
                        label: "Fundamentals of Applicant Tracking Systems (ATS)",
                        desc: "Learn the fundamentals of Applicant Tracking Systems (ATS). Manage candidate data effectively."
                  },
                  {
                        label: "Post jobs and manage applications through ATS platforms",
                        desc: "Post jobs and manage applications through ATS platforms. Streamline recruitment processes."
                  },
                  {
                        label: "Track candidate progress throughout the hiring cycle",
                        desc: "Track candidate progress throughout the hiring cycle. Improve visibility and coordination."
                  },
                  {
                        label: "Maintain candidate databases and talent pools",
                        desc: "Maintain candidate databases and talent pools. Support future hiring requirements."
                  },
                  {
                        label: "Generate recruitment reports and analytics using ATS tools",
                        desc: "Generate recruitment reports and analytics using ATS tools. Measure hiring performance."
                  },
                  {
                        label: "Resume parsing and keyword matching concepts",
                        desc: "Learn resume parsing and keyword matching concepts. Improve candidate filtering."
                  },
                  {
                        label: "Recruitment automation features",
                        desc: "Explore recruitment automation features. Reduce manual administrative work."
                  },
                  {
                        label: "ATS workflows and best practices",
                        desc: "Understand ATS workflows and best practices. Optimize recruitment operations."
                  },
                  {
                        label: "Gain hands-on experience",
                        desc: "Gain hands-on experience using recruitment software and tools. Enhance technical recruitment skills."
                  }
            ]
      },
      {
            id: 7,
            title: "Offer Management & Candidate Closure",
            points: [
                  {
                        label: "Process of preparing and releasing offer letters",
                        desc: "Learn the process of preparing and releasing offer letters. Ensure accurate and timely communication."
                  },
                  {
                        label: "Compensation structures and salary negotiations",
                        desc: "Understand compensation structures and salary negotiations. Support successful candidate closures."
                  },
                  {
                        label: "Manage offer discussions and candidate expectations",
                        desc: "Manage offer discussions and candidate expectations. Improve offer acceptance rates."
                  },
                  {
                        label: "Coordinate approval processes for offer releases",
                        desc: "Coordinate approval processes for offer releases. Maintain organizational compliance."
                  },
                  {
                        label: "Handle candidate queries",
                        desc: "Handle candidate queries related to compensation and benefits. Improve candidate satisfaction."
                  },
                  {
                        label: "Conduct follow-ups with selected candidates",
                        desc: "Conduct follow-ups with selected candidates. Reduce offer dropouts and delays."
                  },
                  {
                        label: "Track offer acceptance and joining status",
                        desc: "Track offer acceptance and joining status. Monitor recruitment effectiveness."
                  },
                  {
                        label: "Manage pre-joining engagement activities",
                        desc: "Manage pre-joining engagement activities. Improve candidate retention before joining."
                  },
                  {
                        label: "Maintain offer documentation and records",
                        desc: "Maintain offer documentation and records. Support recruitment audits and reporting."
                  },
                  {
                        label: "Develop practical skills",
                        desc: "Develop practical skills in offer management and candidate relationship building. Enhance hiring success."
                  }
            ]
      },
      {
            id: 8,
            title: "Onboarding & Joining Formalities",
            points: [
                  {
                        label: "Onboarding process and its importance",
                        desc: "Understand the onboarding process and its importance. Ensure a positive employee experience."
                  },
                  {
                        label: "Coordinate document collection and verification",
                        desc: "Coordinate document collection and verification. Maintain compliance and accuracy."
                  },
                  {
                        label: "Prepare appointment letters and joining documentation",
                        desc: "Prepare appointment letters and joining documentation. Complete onboarding requirements efficiently."
                  },
                  {
                        label: "Manage employee registration and record creation",
                        desc: "Manage employee registration and record creation. Organize workforce information effectively."
                  },
                  {
                        label: "Conduct induction and orientation activities",
                        desc: "Conduct induction and orientation activities. Introduce employees to organizational culture."
                  },
                  {
                        label: "Coordinate training schedules for new hires",
                        desc: "Coordinate training schedules for new hires. Support smooth role transitions."
                  },
                  {
                        label: "Track onboarding progress and completion",
                        desc: "Track onboarding progress and completion. Ensure successful employee integration."
                  },
                  {
                        label: "Manage probation tracking and confirmation processes",
                        desc: "Manage probation tracking and confirmation processes. Support workforce stability."
                  },
                  {
                        label: "Handle employee queries during onboarding",
                        desc: "Handle employee queries during onboarding. Improve engagement and satisfaction."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience in onboarding administration and employee support. Build operational expertise."
                  }
            ]
      },
      {
            id: 9,
            title: "Recruitment Metrics & Reporting",
            points: [
                  {
                        label: "Importance",
                        desc: "Understand the importance of recruitment analytics and reporting. Measure hiring effectiveness."
                  },
                  {
                        label: "Calculate key recruitment",
                        desc: "Calculate key recruitment metrics such as Time-to-Hire and Time-to-Fill. Improve recruitment planning."
                  },
                  {
                        label: "Track sourcing channel performance",
                        desc: "Track sourcing channel performance. Identify the most effective hiring sources."
                  },
                  {
                        label: "Measure recruitment costs and return on investment",
                        desc: "Measure recruitment costs and return on investment. Support budget optimization."
                  },
                  {
                        label: "Analyze offer acceptance and joining ratios",
                        desc: "Analyze offer acceptance and joining ratios. Improve candidate closure strategies."
                  },
                  {
                        label: "Create recruitment dashboards and reports",
                        desc: "Create recruitment dashboards and reports. Present hiring data effectively."
                  },
                  {
                        label: "Monitor recruiter performance and productivity",
                        desc: "Monitor recruiter performance and productivity. Support continuous improvement."
                  },
                  {
                        label: "Use data for recruitment decision-making",
                        desc: "Use data for recruitment decision-making. Enhance hiring quality and efficiency."
                  },
                  {
                        label: "Maintain recruitment records and documentation",
                        desc: "Maintain recruitment records and documentation. Ensure accurate reporting."
                  },
                  {
                        label: "Develop practical reporting",
                        desc: "Develop practical reporting skills using Excel and ATS tools. Support strategic recruitment management."
                  }
            ]
      },
      {
            id: 10,
            title: "Recruitment Compliance & Professional Skills",
            points: [
                  {
                        label: "Legal and ethical considerations in recruitment",
                        desc: "Understand legal and ethical considerations in recruitment. Ensure fair and compliant hiring practices."
                  },
                  {
                        label: "Equal employment opportunity principles",
                        desc: "Learn equal employment opportunity principles. Promote diversity and inclusion."
                  },
                  {
                        label: "Maintain candidate data privacy and confidentiality",
                        desc: "Maintain candidate data privacy and confidentiality. Protect sensitive information."
                  },
                  {
                        label: "Anti-discrimination policies in recruitment",
                        desc: "Understand anti-discrimination policies in recruitment. Support unbiased hiring decisions."
                  },
                  {
                        label: "Manage background verification and reference checks",
                        desc: "Manage background verification and reference checks. Reduce hiring risks."
                  },
                  {
                        label: "Develop professional communication and negotiation skills",
                        desc: "Develop professional communication and negotiation skills. Enhance recruiter effectiveness."
                  },
                  {
                        label: "Stakeholder and client management techniques",
                        desc: "Learn stakeholder and client management techniques. Build strong business relationships."
                  },
                  {
                        label: "Handle recruitment challenges and conflict situations",
                        desc: "Handle recruitment challenges and conflict situations. Improve problem-solving abilities."
                  },
                  {
                        label: "Maintain recruitment documentation and audit readiness",
                        desc: "Maintain recruitment documentation and audit readiness. Ensure operational compliance."
                  },
                  {
                        label: "Build a professional",
                        desc: "Build a professional recruiter mindset through practical scenarios and case studies. Prepare for successful recruitment careers."
                  }
            ]
      }
],
    faqs: [
      { q: "Who can join this course?", a: "Anyone interested in building a career in recruitment, talent acquisition, agency hiring, or corporate HR sourcing." },
      { q: "Do I need a tech background?", a: "No, recruiting roles exist in all sectors. We cover both tech and non-tech recruitment strategies." },
      { q: "What is the course duration?", a: "The course spans 1 month, featuring structured weekly modules and mock sourcing labs." },
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
    heroFeatureCards: [
      { icon: "BookOpen", title: "Frontend & Backend Mastery", desc: "Learn modern frontend (React) and robust backend (Node.js/Express) frameworks." },
      { icon: "Users", title: "Expert Developer Mentorship", desc: "Code alongside veteran developers who guide you through engineering best practices." },
      { icon: "Laptop", title: "Capstone Projects & GitHub", desc: "Build real-world full-stack web applications and construct a standout GitHub portfolio." },
      { icon: "Award", title: "Full Stack Certification", desc: "Earn a professional software engineer certification with 100% placement assistance." }
    ],
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
    careerPerks: [
      { title: "Developer Mentorship", desc: "Live interactive classes, hands-on practice sessions & expert-led doubt clarification.", icon: "code" },
      { title: "Unlimited Coding Practice", desc: "Sharpen your skills with multiple programming problems or real-world practice case studies.", icon: "checkmark" },
      { title: "Tech Career Launch", desc: "Gain placement guidance, resume reviews, and job prep to accelerate your career.", icon: "target" },
      { title: "Full-Stack Project Work", desc: "Work on extensive hours of real-world, industry-relevant projects to build a job-winning portfolio.", icon: "terminal" }
    ],
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
        title: "HTML5 & CSS3",
        points: [
          { label: "Fundamentals", desc: "Learn the fundamentals of HTML5 and CSS3 for creating modern web pages. Develop structured layouts and visually appealing user interfaces." },
          { label: "Semantic Elements", desc: "Understand semantic HTML elements and styling techniques. Build responsive and accessible web content using industry standards." },
          { label: "Forms & Media", desc: "Work with forms, tables, and multimedia elements. Apply CSS properties to enhance the appearance and usability of websites." },
          { label: "Flexbox & Grid", desc: "Design web page layouts using Flexbox and CSS Grid. Create structured and adaptable page designs for various screen sizes." },
          { label: "Animations", desc: "Implement animations, transitions, and visual effects. Improve user experience through interactive design elements." },
          { label: "Design Principles", desc: "Explore typography, colors, and design principles. Create professional and aesthetically pleasing web interfaces." },
          { label: "Responsive Design", desc: "Apply responsive design techniques for mobile and desktop devices. Ensure consistent user experiences across platforms." },
          { label: "Layout Management", desc: "Learn CSS positioning and layout management. Organize page elements efficiently and effectively." },
          { label: "Performance", desc: "Optimize website performance through clean coding practices. Improve loading speed and maintainability." },
          { label: "Static Websites", desc: "Build complete static websites using HTML5 and CSS3 concepts. Gain hands-on experience through real-world projects." }
        ]
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        points: [
          { label: "Core Concepts", desc: "Understand the core concepts of JavaScript programming. Learn how JavaScript adds interactivity to web applications." },
          { label: "Variables & Data", desc: "Work with variables, data types, and operators. Develop the logic required for dynamic web functionality." },
          { label: "Control Flow", desc: "Use conditional statements and loops to control program flow. Create efficient and reusable code structures." },
          { label: "Functions", desc: "Learn functions and scope management. Write modular and maintainable JavaScript code." },
          { label: "Arrays & Objects", desc: "Manipulate arrays and objects for data handling. Store and process information effectively within applications." },
          { label: "DOM Manipulation", desc: "Explore DOM manipulation techniques. Dynamically update web page content and structure." },
          { label: "Events", desc: "Handle user interactions through events. Create engaging and responsive user experiences." },
          { label: "ES6 Features", desc: "Learn modern JavaScript ES6 features. Improve coding efficiency with contemporary syntax and tools." },
          { label: "Error Handling", desc: "Implement error handling and debugging practices. Develop reliable and stable applications." },
          { label: "Interactive Projects", desc: "Build interactive web projects using JavaScript. Apply programming concepts through practical exercises." }
        ]
      },
      {
        id: 3,
        title: "Responsive Web Design",
        points: [
          { label: "Principles", desc: "Learn the principles of responsive web design. Create websites that adapt seamlessly to different devices." },
          { label: "Mobile-First", desc: "Understand mobile-first design strategies. Develop user-friendly experiences for mobile users first." },
          { label: "Media Queries", desc: "Implement media queries to adjust layouts. Ensure optimal display across varying screen resolutions." },
          { label: "Grid Systems", desc: "Create flexible grid systems and layouts. Build scalable and adaptive website structures." },
          { label: "Multimedia", desc: "Optimize images and multimedia for responsiveness. Improve performance and visual consistency." },
          { label: "Navigation", desc: "Design responsive navigation systems. Enhance usability on mobile and desktop platforms." },
          { label: "Accessibility", desc: "Apply accessibility standards in responsive design. Ensure inclusive experiences for all users." },
          { label: "Testing", desc: "Test websites across multiple browsers and devices. Identify and resolve compatibility issues." },
          { label: "Performance", desc: "Improve website performance and loading speed. Deliver smooth user experiences." },
          { label: "Practical Projects", desc: "Develop fully responsive websites as practical projects. Demonstrate proficiency in adaptive design techniques." }
        ]
      },
      {
        id: 4,
        title: "Front-End Framework (React/Angular)",
        points: [
          { label: "Architecture", desc: "Understand the architecture and benefits of modern front-end frameworks. Build scalable and maintainable web applications." },
          { label: "Components", desc: "Learn component-based development concepts. Create reusable and modular user interface elements." },
          { label: "State Management", desc: "Manage application state and data flow. Build dynamic and interactive user experiences." },
          { label: "Event Handling", desc: "Handle events and user interactions efficiently. Improve responsiveness and usability." },
          { label: "Routing", desc: "Implement routing and navigation within applications. Create seamless multi-page user experiences." },
          { label: "Forms", desc: "Build forms with validation techniques. Ensure accurate and secure data collection." },
          { label: "API Integration", desc: "Integrate external APIs into applications. Display dynamic data from backend services." },
          { label: "State Tools", desc: "Use state management tools for complex applications. Organize application data effectively." },
          { label: "Optimization", desc: "Optimize front-end application performance. Improve speed and scalability." },
          { label: "SPA Development", desc: "Develop a complete Single Page Application (SPA). Gain hands-on experience with framework development." }
        ]
      },
      {
        id: 5,
        title: "Backend Development (Node.js/Java/Python)",
        points: [
          { label: "Server Fundamentals", desc: "Learn the fundamentals of server-side development. Understand how backend systems support web applications." },
          { label: "Environment Setup", desc: "Set up backend environments using popular technologies. Build and manage server applications effectively." },
          { label: "HTTP Requests", desc: "Handle HTTP requests and responses. Process user interactions and business logic." },
          { label: "CRUD Operations", desc: "Implement CRUD operations for application data. Manage information efficiently in databases." },
          { label: "Middleware", desc: "Work with middleware and routing mechanisms. Organize backend workflows and processes." },
          { label: "Database Connection", desc: "Connect applications to databases securely. Store and retrieve data efficiently." },
          { label: "Error Handling", desc: "Apply error handling and debugging techniques. Improve application reliability and performance." },
          { label: "Security", desc: "Develop secure backend services. Protect applications against common vulnerabilities." },
          { label: "Scalability", desc: "Create scalable backend architectures. Support growing application demands." },
          { label: "Backend Projects", desc: "Build complete backend projects using real-world scenarios. Gain practical server-side development experience." }
        ]
      },
      {
        id: 6,
        title: "REST API Development",
        points: [
          { label: "Architecture", desc: "Understand REST architecture and API concepts. Learn how systems communicate through APIs." },
          { label: "Design Best Practices", desc: "Design APIs using industry best practices. Create scalable and maintainable service structures." },
          { label: "HTTP Methods", desc: "Work with HTTP methods such as GET, POST, PUT, and DELETE. Perform complete data operations." },
          { label: "Request/Response", desc: "Handle requests, responses, and status codes effectively. Ensure proper communication between systems." },
          { label: "Data Validation", desc: "Validate and process incoming data securely. Improve API reliability and security." },
          { label: "Auth Mechanisms", desc: "Implement authentication and authorization mechanisms. Protect API resources from unauthorized access." },
          { label: "API Testing", desc: "Test APIs using development tools. Verify functionality and identify issues efficiently." },
          { label: "Documentation", desc: "Document APIs for developer usability. Improve collaboration and integration processes." },
          { label: "Optimization", desc: "Optimize API performance and scalability. Support high-volume application traffic." },
          { label: "Deployment", desc: "Develop and deploy fully functional REST APIs. Apply concepts through practical implementation." }
        ]
      },
      {
        id: 7,
        title: "Database Management (SQL & NoSQL)",
        points: [
          { label: "Fundamentals", desc: "Learn database fundamentals and data storage concepts. Understand the role of databases in applications." },
          { label: "SQL", desc: "Work with relational databases using SQL. Create and manage structured data systems." },
          { label: "SQL Queries", desc: "Perform CRUD operations using SQL queries. Manipulate and retrieve data effectively." },
          { label: "Schema Design", desc: "Understand relationships, joins, and normalization. Design efficient database schemas." },
          { label: "NoSQL", desc: "Explore NoSQL database concepts and use cases. Manage unstructured and semi-structured data." },
          { label: "MongoDB", desc: "Work with MongoDB collections and documents. Store and access flexible data structures." },
          { label: "Optimization", desc: "Implement indexing and query optimization. Improve database performance and efficiency." },
          { label: "Security", desc: "Manage database security and access control. Protect sensitive application data." },
          { label: "Integration", desc: "Integrate databases with backend applications. Enable seamless data exchange." },
          { label: "Database Projects", desc: "Build database-driven applications through practical projects. Gain real-world database experience." }
        ]
      },
      {
        id: 8,
        title: "Authentication & Security",
        points: [
          { label: "Security Fundamentals", desc: "Understand web application security fundamentals. Identify common threats and vulnerabilities." },
          { label: "Authentication", desc: "Implement user authentication systems. Verify user identities securely." },
          { label: "Authorization", desc: "Manage authorization and access control. Restrict resources based on user roles." },
          { label: "Sessions & Tokens", desc: "Work with sessions and token-based authentication. Secure application communication." },
          { label: "JWT", desc: "Use JWT for modern authentication mechanisms. Enable scalable user management." },
          { label: "Encryption", desc: "Apply password encryption and hashing techniques. Protect user credentials effectively." },
          { label: "Threat Prevention", desc: "Prevent common attacks such as XSS and SQL Injection. Improve application security." },
          { label: "Best Practices", desc: "Follow secure coding best practices. Reduce security risks during development." },
          { label: "Monitoring", desc: "Monitor and test application security. Detect vulnerabilities proactively." },
          { label: "Secure Apps", desc: "Build secure web applications using industry standards. Ensure data and user protection." }
        ]
      },
      {
        id: 9,
        title: "Version Control with Git & GitHub",
        points: [
          { label: "VCS Fundamentals", desc: "Learn the fundamentals of version control systems. Track and manage code changes effectively." },
          { label: "Git Setup", desc: "Set up Git and create repositories. Organize project development workflows." },
          { label: "Git Commands", desc: "Use Git commands for source code management. Maintain project history and collaboration." },
          { label: "Branching", desc: "Work with branches and merging strategies. Develop features independently and efficiently." },
          { label: "Merge Conflicts", desc: "Resolve merge conflicts using best practices. Ensure smooth team collaboration." },
          { label: "GitHub", desc: "Manage remote repositories through GitHub. Store and share project code securely." },
          { label: "Pull Requests", desc: "Create pull requests and perform code reviews. Improve code quality through collaboration." },
          { label: "Collaboration", desc: "Implement collaborative development workflows. Support team-based software projects." },
          { label: "Project Management", desc: "Explore GitHub project management features. Organize development tasks effectively." },
          { label: "Version Management", desc: "Manage complete project versions from development to deployment. Apply version control in real-world projects." }
        ]
      },
      {
        id: 10,
        title: "Deployment & Cloud Hosting",
        points: [
          { label: "Environments", desc: "Understand deployment processes and environments. Prepare applications for production release." },
          { label: "Hosting", desc: "Learn web hosting and cloud computing concepts. Deploy applications on modern infrastructure." },
          { label: "Domains & DNS", desc: "Configure domains and DNS settings. Enable public access to web applications." },
          { label: "App Deployment", desc: "Deploy front-end and backend applications. Make projects available online." },
          { label: "Cloud Platforms", desc: "Use cloud platforms for hosting solutions. Manage scalable application environments." },
          { label: "CI/CD", desc: "Implement CI/CD pipelines for automation. Streamline deployment and updates." },
          { label: "Monitoring", desc: "Monitor application performance and availability. Ensure reliable user experiences." },
          { label: "Troubleshooting", desc: "Manage logs and troubleshoot production issues. Maintain application stability." },
          { label: "Optimization", desc: "Optimize deployed applications for performance. Improve speed and resource utilization." },
          { label: "End-to-End Projects", desc: "Complete end-to-end deployment projects. Gain practical experience with cloud hosting environments." }
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
    heroFeatureCards: [
      { icon: "CheckCircle2", title: "Manual & Automation Testing", desc: "Master manual testing concepts, bug tracking, and automated Selenium scripts." },
      { icon: "Users", title: "Professional QA Guidance", desc: "Learn from experienced QA leads on how to design test plans and test suites." },
      { icon: "Laptop", title: "Testing Tools & Frameworks", desc: "Get hands-on with Selenium, Jira, TestNG, Postman, and MySQL databases." },
      { icon: "Award", title: "QA Engineer Certification", desc: "Earn your software testing credentials and access specialized mock interviews." }
    ],
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
    careerPerks: [
      { title: "Senior QA Mentorship", desc: "Learn from QA Managers and test automation professionals with years of experience.", icon: "users" },
      { title: "Hands-On Testing Labs", desc: "Practice writing test cases, logging defects in Jira, and writing Selenium automation scripts.", icon: "document" },
      { title: "QA Career Placement", desc: "Mock automation technical rounds, QA resume optimization, and interview coaching.", icon: "target" },
      { title: "Automation Framework Projects", desc: "Build automated test suites for web apps and set up API tests in real projects.", icon: "terminal" }
    ],
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
            title: "Introduction to Software Testing",
            points: [
                  {
                        label: "Fundamentals",
                        desc: "Understand the fundamentals of software testing and its role in software development. Learn how testing ensures product quality and reliability."
                  },
                  {
                        label: "Software",
                        desc: "Explore the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC). Understand testing activities at each phase."
                  },
                  {
                        label: "Different types",
                        desc: "Learn different types of software testing and quality assurance concepts. Gain a strong foundation in testing methodologies."
                  },
                  {
                        label: "Roles and responsibilities of a QA Tester",
                        desc: "Understand the roles and responsibilities of a QA Tester. Learn industry standards and best practices."
                  },
                  {
                        label: "Software defects, bugs, and error management",
                        desc: "Explore software defects, bugs, and error management. Understand defect prevention and detection techniques."
                  },
                  {
                        label: "Testing principles and quality standards",
                        desc: "Learn testing principles and quality standards. Improve software quality through structured testing approaches."
                  },
                  {
                        label: "Importance",
                        desc: "Understand the importance of quality assurance in Agile and DevOps environments. Support continuous delivery processes."
                  },
                  {
                        label: "Testing documentation and reporting practices",
                        desc: "Learn testing documentation and reporting practices. Maintain accurate project records."
                  },
                  {
                        label: "Testing tools and environments",
                        desc: "Explore testing tools and environments. Gain awareness of industry-standard QA tools."
                  },
                  {
                        label: "Build foundational knowledge",
                        desc: "Build foundational knowledge through practical testing examples and case studies."
                  }
            ]
      },
      {
            id: 2,
            title: "Manual Testing Fundamentals",
            points: [
                  {
                        label: "Fundamentals of manual testing and its importance",
                        desc: "Learn the fundamentals of manual testing and its importance. Understand how testers validate application functionality."
                  },
                  {
                        label: "Functional and non-functional testing concepts",
                        desc: "Explore functional and non-functional testing concepts. Verify application behavior against requirements."
                  },
                  {
                        label: "Different testing",
                        desc: "Learn different testing levels including unit, integration, system, and acceptance testing. Understand testing scope and objectives."
                  },
                  {
                        label: "Perform smoke and sanity testing activities",
                        desc: "Perform smoke and sanity testing activities. Ensure application stability before detailed testing."
                  },
                  {
                        label: "Regression testing concepts and practices",
                        desc: "Understand regression testing concepts and practices. Verify that new changes do not impact existing functionality."
                  },
                  {
                        label: "Exploratory testing techniques",
                        desc: "Learn exploratory testing techniques. Identify defects through unscripted testing approaches."
                  },
                  {
                        label: "Validate user interface and usability requirements",
                        desc: "Validate user interface and usability requirements. Improve user experience and accessibility."
                  },
                  {
                        label: "Execute test scenarios and record results accurately",
                        desc: "Execute test scenarios and record results accurately. Support effective defect tracking."
                  },
                  {
                        label: "Analyze application behavior under different conditions",
                        desc: "Analyze application behavior under different conditions. Improve testing coverage."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through manual testing exercises and projects."
                  }
            ]
      },
      {
            id: 3,
            title: "Test Case Design & Documentation",
            points: [
                  {
                        label: "Process",
                        desc: "Learn the process of creating effective test cases and test scenarios. Ensure complete requirement coverage."
                  },
                  {
                        label: "Requirement analysis techniques",
                        desc: "Understand requirement analysis techniques. Convert business requirements into test conditions."
                  },
                  {
                        label: "Create detailed test cases with expected results",
                        desc: "Create detailed test cases with expected results. Improve testing consistency and accuracy."
                  },
                  {
                        label: "Test data preparation and management",
                        desc: "Learn test data preparation and management. Support reliable testing outcomes."
                  },
                  {
                        label: "Design positive and negative test cases",
                        desc: "Design positive and negative test cases. Validate application behavior under various conditions."
                  },
                  {
                        label: "Boundary value",
                        desc: "Understand boundary value analysis and equivalence partitioning. Improve test effectiveness."
                  },
                  {
                        label: "Prepare test plans and test execution reports",
                        desc: "Prepare test plans and test execution reports. Support project tracking and communication."
                  },
                  {
                        label: "Maintain test documentation and version control",
                        desc: "Maintain test documentation and version control. Ensure traceability and compliance."
                  },
                  {
                        label: "Create requirement traceability matrices (RTM)",
                        desc: "Create requirement traceability matrices (RTM). Map requirements to testing activities."
                  },
                  {
                        label: "Gain hands-on experience",
                        desc: "Gain hands-on experience in test case preparation and review processes."
                  }
            ]
      },
      {
            id: 4,
            title: "Defect Management & Bug Tracking",
            points: [
                  {
                        label: "Defect lifecycle and bug management process",
                        desc: "Understand the defect lifecycle and bug management process. Track issues from identification to closure."
                  },
                  {
                        label: "How to report defects effectively",
                        desc: "Learn how to report defects effectively. Communicate issues clearly to development teams."
                  },
                  {
                        label: "Classify defects based on severity and priority",
                        desc: "Classify defects based on severity and priority. Support efficient issue resolution."
                  },
                  {
                        label: "Use defect tracking tools for bug management",
                        desc: "Use defect tracking tools for bug management. Improve collaboration and visibility."
                  },
                  {
                        label: "Verify defect fixes and perform retesting activities",
                        desc: "Verify defect fixes and perform retesting activities. Ensure issue resolution quality."
                  },
                  {
                        label: "Root cause analysis techniques",
                        desc: "Understand root cause analysis techniques. Identify recurring quality concerns."
                  },
                  {
                        label: "Manage defect status and reporting",
                        desc: "Manage defect status and reporting. Maintain accurate project information."
                  },
                  {
                        label: "Defect prevention strategies",
                        desc: "Learn defect prevention strategies. Reduce future software quality issues."
                  },
                  {
                        label: "Create defect summary and trend reports",
                        desc: "Create defect summary and trend reports. Support quality improvement initiatives."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through bug reporting and tracking exercises."
                  }
            ]
      },
      {
            id: 5,
            title: "Web Application Testing",
            points: [
                  {
                        label: "Fundamentals of web application testing",
                        desc: "Learn the fundamentals of web application testing. Validate website functionality and performance."
                  },
                  {
                        label: "Test web page navigation, forms, and user workflows",
                        desc: "Test web page navigation, forms, and user workflows. Ensure seamless user experiences."
                  },
                  {
                        label: "Perform cross-browser compatibility testing",
                        desc: "Perform cross-browser compatibility testing. Verify application behavior across browsers."
                  },
                  {
                        label: "Test responsive design and mobile compatibility",
                        desc: "Test responsive design and mobile compatibility. Support multi-device accessibility."
                  },
                  {
                        label: "Validate UI elements and visual consistency",
                        desc: "Validate UI elements and visual consistency. Improve application usability."
                  },
                  {
                        label: "Test session management and user authentication",
                        desc: "Test session management and user authentication. Ensure secure user access."
                  },
                  {
                        label: "Verify links, images, and multimedia functionality",
                        desc: "Verify links, images, and multimedia functionality. Maintain content integrity."
                  },
                  {
                        label: "Perform error handling and validation testing",
                        desc: "Perform error handling and validation testing. Improve application robustness."
                  },
                  {
                        label: "Analyze web application performance and behavior",
                        desc: "Analyze web application performance and behavior. Support quality improvements."
                  },
                  {
                        label: "Gain hands-on experience",
                        desc: "Gain hands-on experience testing real-world web applications."
                  }
            ]
      },
      {
            id: 6,
            title: "Database Testing",
            points: [
                  {
                        label: "Database concepts and testing objectives",
                        desc: "Understand database concepts and testing objectives. Ensure data integrity and accuracy."
                  },
                  {
                        label: "SQL fundamentals for testers",
                        desc: "Learn SQL fundamentals for testers. Query and validate database information effectively."
                  },
                  {
                        label: "Verify data insertion, updates, and deletion operations",
                        desc: "Verify data insertion, updates, and deletion operations. Ensure correct database functionality."
                  },
                  {
                        label: "Validate database relationships and constraints",
                        desc: "Validate database relationships and constraints. Maintain data consistency."
                  },
                  {
                        label: "Perform backend data validation testing",
                        desc: "Perform backend data validation testing. Compare frontend and database information."
                  },
                  {
                        label: "Test stored procedures and database triggers",
                        desc: "Test stored procedures and database triggers. Verify business logic implementation."
                  },
                  {
                        label: "Identify data integrity and security issues",
                        desc: "Identify data integrity and security issues. Improve application reliability."
                  },
                  {
                        label: "Analyze database performance and optimization concerns",
                        desc: "Analyze database performance and optimization concerns. Support efficient operations."
                  },
                  {
                        label: "Create database test scenarios and reports",
                        desc: "Create database test scenarios and reports. Improve testing coverage."
                  },
                  {
                        label: "Gain practical SQL",
                        desc: "Gain practical SQL testing experience through real-world exercises."
                  }
            ]
      },
      {
            id: 7,
            title: "Automation Testing Fundamentals",
            points: [
                  {
                        label: "Automation testing concepts and benefits",
                        desc: "Understand automation testing concepts and benefits. Improve testing efficiency and accuracy."
                  },
                  {
                        label: "Automation testing frameworks and approaches",
                        desc: "Learn automation testing frameworks and approaches. Support scalable testing practices."
                  },
                  {
                        label: "Popular automation tools and technologies",
                        desc: "Explore popular automation tools and technologies. Gain awareness of industry solutions."
                  },
                  {
                        label: "Create and execute basic automated test scripts",
                        desc: "Create and execute basic automated test scripts. Reduce repetitive manual testing efforts."
                  },
                  {
                        label: "Object identification and automation workflows",
                        desc: "Understand object identification and automation workflows. Improve script reliability."
                  },
                  {
                        label: "Test script maintenance and reusability concepts",
                        desc: "Learn test script maintenance and reusability concepts. Support long-term automation success."
                  },
                  {
                        label: "Execute automated functional testing scenarios",
                        desc: "Execute automated functional testing scenarios. Validate application behavior efficiently."
                  },
                  {
                        label: "Generate automation test reports and logs",
                        desc: "Generate automation test reports and logs. Improve visibility and analysis."
                  },
                  {
                        label: "Automation challenges and limitations",
                        desc: "Understand automation challenges and limitations. Apply automation strategically."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through automation testing projects."
                  }
            ]
      },
      {
            id: 8,
            title: "API Testing",
            points: [
                  {
                        label: "API concepts and web service architecture",
                        desc: "Understand API concepts and web service architecture. Learn how applications exchange data."
                  },
                  {
                        label: "Test RESTful APIs using industry-standard tools",
                        desc: "Test RESTful APIs using industry-standard tools. Validate backend functionality."
                  },
                  {
                        label: "Verify API requests, responses, and status codes",
                        desc: "Verify API requests, responses, and status codes. Ensure proper communication between systems."
                  },
                  {
                        label: "Validate request parameters and response data",
                        desc: "Validate request parameters and response data. Improve service reliability."
                  },
                  {
                        label: "Test authentication and authorization mechanisms",
                        desc: "Test authentication and authorization mechanisms. Ensure API security."
                  },
                  {
                        label: "Perform positive and negative API testing scenarios",
                        desc: "Perform positive and negative API testing scenarios. Improve testing coverage."
                  },
                  {
                        label: "Analyze API performance and response times",
                        desc: "Analyze API performance and response times. Support service optimization."
                  },
                  {
                        label: "Create API test cases and documentation",
                        desc: "Create API test cases and documentation. Maintain testing consistency."
                  },
                  {
                        label: "Generate API testing reports and logs",
                        desc: "Generate API testing reports and logs. Support defect identification and resolution."
                  },
                  {
                        label: "Gain practical API",
                        desc: "Gain practical API testing experience through real-world projects."
                  }
            ]
      },
      {
            id: 9,
            title: "Agile Testing & Test Management Tools",
            points: [
                  {
                        label: "Agile methodology and QA involvement",
                        desc: "Understand Agile methodology and QA involvement. Support iterative software development."
                  },
                  {
                        label: "Scrum concepts and Agile testing practices",
                        desc: "Learn Scrum concepts and Agile testing practices. Collaborate effectively within Agile teams."
                  },
                  {
                        label: "Participate in sprint planning and testing activities",
                        desc: "Participate in sprint planning and testing activities. Improve project coordination."
                  },
                  {
                        label: "Manage testing tasks and user stories",
                        desc: "Manage testing tasks and user stories. Ensure requirement coverage."
                  },
                  {
                        label: "Test management processes and workflows",
                        desc: "Learn test management processes and workflows. Improve testing organization."
                  },
                  {
                        label: "Use project and defect management tools effectively",
                        desc: "Use project and defect management tools effectively. Support team collaboration."
                  },
                  {
                        label: "Track testing progress and quality metrics",
                        desc: "Track testing progress and quality metrics. Monitor project health."
                  },
                  {
                        label: "Create Agile testing reports and dashboards",
                        desc: "Create Agile testing reports and dashboards. Support stakeholder communication."
                  },
                  {
                        label: "Continuous testing concepts",
                        desc: "Understand continuous testing concepts. Improve release quality and speed."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience in Agile QA environments and workflows."
                  }
            ]
      },
      {
            id: 10,
            title: "Quality Assurance Project & Industry Practices",
            points: [
                  {
                        label: "Apply end-to-end testing concepts in a real-world project",
                        desc: "Apply end-to-end testing concepts in a real-world project. Gain practical industry experience."
                  },
                  {
                        label: "Analyze business requirements",
                        desc: "Analyze business requirements and prepare testing strategies. Plan effective testing activities."
                  },
                  {
                        label: "Create test plans, test cases, and execution reports",
                        desc: "Create test plans, test cases, and execution reports. Demonstrate complete QA processes."
                  },
                  {
                        label: "Execute manual and automation testing activities",
                        desc: "Execute manual and automation testing activities. Validate software quality comprehensively."
                  },
                  {
                        label: "Perform defect tracking",
                        desc: "Perform defect tracking and reporting throughout the project lifecycle. Support issue resolution."
                  },
                  {
                        label: "Conduct web, database, and API testing activities",
                        desc: "Conduct web, database, and API testing activities. Gain exposure to multiple testing domains."
                  },
                  {
                        label: "Collaborate with developers and stakeholders",
                        desc: "Collaborate with developers and stakeholders. Improve communication and teamwork skills."
                  },
                  {
                        label: "Generate project quality reports and metrics",
                        desc: "Generate project quality reports and metrics. Measure testing effectiveness."
                  },
                  {
                        label: "Follow industry QA standards and best practices",
                        desc: "Follow industry QA standards and best practices. Prepare for professional QA roles."
                  },
                  {
                        label: "Complete a capstone",
                        desc: "Complete a capstone testing project demonstrating end-to-end quality assurance skills."
                  }
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
    heroFeatureCards: [
      { icon: "Sparkles", title: "Core DSA Concepts", desc: "Build a rock-solid foundation in arrays, linked lists, trees, graphs, and DP." },
      { icon: "Users", title: "Problem Solving Mentorship", desc: "Solve complex algorithmic puzzles with direct guidance from top competitive coders." },
      { icon: "Laptop", title: "Coding Interview Prep", desc: "Crack technical rounds of product companies with LeetCode & HackerRank challenges." },
      { icon: "Award", title: "DSA Certification", desc: "Earn a data structures completion certificate and stand out to top tech recruiters." }
    ],
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
    careerPerks: [
      { title: "FAANG Developer Mentorship", desc: "Get mentored by engineers from Google, Amazon, and top product companies.", icon: "code" },
      { title: "Curated DSA Problem Sets", desc: "Practice high-frequency patterns like Dynamic Programming, Graphs, and Trees on LeetCode.", icon: "checkmark" },
      { title: "FAANG Interview Preparation", desc: "Systematic preparation for coding interviews, mock rounds, and resume selection.", icon: "target" },
      { title: "Algorithmic Optimizations", desc: "Analyze time and space complexities and implement custom structures for performance.", icon: "terminal" }
    ],
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
            title: "Introduction to Data Structures & Algorithms",
            points: [
                  {
                        label: "Fundamentals",
                        desc: "Understand the fundamentals of Data Structures and Algorithms and their importance in software development. Learn how efficient algorithms improve application performance."
                  },
                  {
                        label: "Time complexity and space complexity concepts",
                        desc: "Explore time complexity and space complexity concepts. Analyze the efficiency of different solutions."
                  },
                  {
                        label: "Big O, Big Omega, and Big Theta notations",
                        desc: "Learn Big O, Big Omega, and Big Theta notations. Evaluate algorithm performance under various conditions."
                  },
                  {
                        label: "Algorithm design",
                        desc: "Understand algorithm design techniques and problem-solving approaches. Develop logical thinking skills."
                  },
                  {
                        label: "Recursion fundamentals and recursive problem solving",
                        desc: "Learn recursion fundamentals and recursive problem solving. Simplify complex programming challenges."
                  },
                  {
                        label: "Iterative and recursive approaches",
                        desc: "Explore iterative and recursive approaches. Compare their advantages and limitations."
                  },
                  {
                        label: "Algorithm analysis and optimization techniques",
                        desc: "Understand algorithm analysis and optimization techniques. Improve code efficiency."
                  },
                  {
                        label: "Basic mathematical concepts used in DSA",
                        desc: "Learn basic mathematical concepts used in DSA. Build a foundation for advanced topics."
                  },
                  {
                        label: "Develop coding strategies",
                        desc: "Develop coding strategies for competitive programming and interviews. Improve problem-solving speed."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through introductory coding exercises and challenges."
                  }
            ]
      },
      {
            id: 2,
            title: "Arrays & Strings",
            points: [
                  {
                        label: "Fundamentals of arrays and their applications",
                        desc: "Learn the fundamentals of arrays and their applications. Understand efficient data storage and access techniques."
                  },
                  {
                        label: "Perform array traversal,",
                        desc: "Perform array traversal, insertion, deletion, and searching operations. Develop strong array manipulation skills."
                  },
                  {
                        label: "Multi-dimensional arrays and matrix operations",
                        desc: "Understand multi-dimensional arrays and matrix operations. Solve structured data problems effectively."
                  },
                  {
                        label: "Common array algorithms and optimization techniques",
                        desc: "Learn common array algorithms and optimization techniques. Improve computational efficiency."
                  },
                  {
                        label: "String operations and manipulation techniques",
                        desc: "Explore string operations and manipulation techniques. Process textual data effectively."
                  },
                  {
                        label: "Implement pattern matching and substring search algorithms",
                        desc: "Implement pattern matching and substring search algorithms. Solve string-based challenges efficiently."
                  },
                  {
                        label: "Sliding window and two-pointer techniques",
                        desc: "Learn sliding window and two-pointer techniques. Optimize array and string problem solutions."
                  },
                  {
                        label: "Common interview",
                        desc: "Understand common interview problems involving arrays and strings. Develop practical problem-solving abilities."
                  },
                  {
                        label: "Analyze time and space complexity of array-based solutions",
                        desc: "Analyze time and space complexity of array-based solutions. Improve coding performance."
                  },
                  {
                        label: "Gain hands-on experience",
                        desc: "Gain hands-on experience through coding exercises and real-world examples."
                  }
            ]
      },
      {
            id: 3,
            title: "Linked Lists",
            points: [
                  {
                        label: "Structure and working of linked lists",
                        desc: "Understand the structure and working of linked lists. Learn dynamic memory allocation concepts."
                  },
                  {
                        label: "Implement singly linked lists and basic operations",
                        desc: "Implement singly linked lists and basic operations. Manage data efficiently using nodes and pointers."
                  },
                  {
                        label: "Doubly linked lists and circular linked lists",
                        desc: "Explore doubly linked lists and circular linked lists. Understand advanced linked list variations."
                  },
                  {
                        label: "Perform insertion, deletion, and traversal operations",
                        desc: "Perform insertion, deletion, and traversal operations. Manipulate linked data structures effectively."
                  },
                  {
                        label: "Linked list searching and sorting techniques",
                        desc: "Learn linked list searching and sorting techniques. Improve data organization."
                  },
                  {
                        label: "Detect loops and cycles in linked lists",
                        desc: "Detect loops and cycles in linked lists. Solve common interview challenges."
                  },
                  {
                        label: "Reverse linked lists and merge multiple lists",
                        desc: "Reverse linked lists and merge multiple lists. Develop advanced problem-solving skills."
                  },
                  {
                        label: "Memory management in linked list operations",
                        desc: "Understand memory management in linked list operations. Improve application performance."
                  },
                  {
                        label: "Analyze complexity of linked list algorithms",
                        desc: "Analyze complexity of linked list algorithms. Optimize implementation strategies."
                  },
                  {
                        label: "Practice real-world linked",
                        desc: "Practice real-world linked list problems and interview questions."
                  }
            ]
      },
      {
            id: 4,
            title: "Stacks & Queues",
            points: [
                  {
                        label: "Concepts and applications of stacks and queues",
                        desc: "Learn the concepts and applications of stacks and queues. Understand linear data structure behavior."
                  },
                  {
                        label: "Implement stack operations using arrays and linked lists",
                        desc: "Implement stack operations using arrays and linked lists. Manage Last-In-First-Out (LIFO) data efficiently."
                  },
                  {
                        label: "Implement queue operations and variations",
                        desc: "Implement queue operations and variations. Handle First-In-First-Out (FIFO) processing effectively."
                  },
                  {
                        label: "Circular queues and priority queues",
                        desc: "Explore circular queues and priority queues. Understand advanced queue implementations."
                  },
                  {
                        label: "Stack applications such as expression evaluation",
                        desc: "Learn stack applications such as expression evaluation. Solve computational problems efficiently."
                  },
                  {
                        label: "Use stacks for parenthesis matching and syntax validation",
                        desc: "Use stacks for parenthesis matching and syntax validation. Improve problem-solving techniques."
                  },
                  {
                        label: "Implement queue-based scheduling",
                        desc: "Implement queue-based scheduling and task management solutions. Understand practical use cases."
                  },
                  {
                        label: "Deque and monotonic queue concepts",
                        desc: "Explore deque and monotonic queue concepts. Solve advanced algorithmic problems."
                  },
                  {
                        label: "Analyze complexity of stack and queue operations",
                        desc: "Analyze complexity of stack and queue operations. Optimize data processing performance."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through coding exercises and problem-solving sessions."
                  }
            ]
      },
      {
            id: 5,
            title: "Trees & Binary Search Trees",
            points: [
                  {
                        label: "Tree data",
                        desc: "Understand tree data structures and hierarchical relationships. Learn non-linear data organization."
                  },
                  {
                        label: "Binary trees and their properties",
                        desc: "Explore binary trees and their properties. Represent complex data efficiently."
                  },
                  {
                        label: "Implement tree traversal techniques including DFS and BFS",
                        desc: "Implement tree traversal techniques including DFS and BFS. Access tree nodes systematically."
                  },
                  {
                        label: "Binary search tree (BST) operations and applications",
                        desc: "Learn binary search tree (BST) operations and applications. Perform efficient searching and sorting."
                  },
                  {
                        label: "Implement insertion, deletion, and searching in BSTs",
                        desc: "Implement insertion, deletion, and searching in BSTs. Manage dynamic hierarchical data."
                  },
                  {
                        label: "Balanced trees and self-balancing concepts",
                        desc: "Explore balanced trees and self-balancing concepts. Improve search performance."
                  },
                  {
                        label: "Tree recursion and divide-and-conquer techniques",
                        desc: "Understand tree recursion and divide-and-conquer techniques. Solve hierarchical problems effectively."
                  },
                  {
                        label: "Heap structures and priority-based processing",
                        desc: "Learn heap structures and priority-based processing. Support efficient data retrieval."
                  },
                  {
                        label: "Analyze tree algorithm",
                        desc: "Analyze tree algorithm complexities and optimization methods. Improve solution efficiency."
                  },
                  {
                        label: "Practice tree-related coding",
                        desc: "Practice tree-related coding problems and interview scenarios."
                  }
            ]
      },
      {
            id: 6,
            title: "Hashing & Hash Tables",
            points: [
                  {
                        label: "Hashing concepts and applications",
                        desc: "Understand hashing concepts and applications. Learn efficient key-value data storage techniques."
                  },
                  {
                        label: "Implement hash tables and hash maps",
                        desc: "Implement hash tables and hash maps. Perform fast data retrieval operations."
                  },
                  {
                        label: "Collision handling techniques",
                        desc: "Explore collision handling techniques. Improve hash table performance and reliability."
                  },
                  {
                        label: "Hashing functions and load factor concepts",
                        desc: "Learn hashing functions and load factor concepts. Optimize storage efficiency."
                  },
                  {
                        label: "Use hash-based solutions",
                        desc: "Use hash-based solutions for searching and frequency counting. Solve common coding problems."
                  },
                  {
                        label: "Implement sets and dictionaries using hashing techniques",
                        desc: "Implement sets and dictionaries using hashing techniques. Manage unique and structured data."
                  },
                  {
                        label: "Practical applications",
                        desc: "Explore practical applications of hashing in software systems. Understand real-world usage."
                  },
                  {
                        label: "Solve duplicate detection and lookup problems efficiently",
                        desc: "Solve duplicate detection and lookup problems efficiently. Improve computational performance."
                  },
                  {
                        label: "Analyze time complexity advantages of hashing",
                        desc: "Analyze time complexity advantages of hashing. Compare with other data structures."
                  },
                  {
                        label: "Gain practical experience",
                        desc: "Gain practical experience through hashing-based coding challenges."
                  }
            ]
      },
      {
            id: 7,
            title: "Graphs & Graph Algorithms",
            points: [
                  {
                        label: "Graph data structures and representations",
                        desc: "Understand graph data structures and representations. Model complex relationships effectively."
                  },
                  {
                        label: "Implement graph traversal algorithms such as BFS and DFS",
                        desc: "Implement graph traversal algorithms such as BFS and DFS. Explore connected data structures."
                  },
                  {
                        label: "Directed and undirected graph concepts",
                        desc: "Learn directed and undirected graph concepts. Solve network-based problems."
                  },
                  {
                        label: "Weighted graphs and shortest path algorithms",
                        desc: "Understand weighted graphs and shortest path algorithms. Optimize route and pathfinding solutions."
                  },
                  {
                        label: "Implement Dijkstra’s and Bellman-Ford algorithms",
                        desc: "Implement Dijkstra’s and Bellman-Ford algorithms. Solve distance-related challenges efficiently."
                  },
                  {
                        label: "Minimum spanning tree algorithms",
                        desc: "Explore minimum spanning tree algorithms. Optimize network connectivity problems."
                  },
                  {
                        label: "Topological sorting and graph cycle detection",
                        desc: "Learn topological sorting and graph cycle detection. Solve dependency-based scenarios."
                  },
                  {
                        label: "Graph connectivity and component analysis",
                        desc: "Understand graph connectivity and component analysis. Improve graph problem-solving abilities."
                  },
                  {
                        label: "Analyze graph algorithm complexities and performance",
                        desc: "Analyze graph algorithm complexities and performance. Optimize large-scale graph solutions."
                  },
                  {
                        label: "Practice real-world graph",
                        desc: "Practice real-world graph problems and coding interview questions."
                  }
            ]
      },
      {
            id: 8,
            title: "Searching & Sorting Algorithms",
            points: [
                  {
                        label: "Fundamentals of searching techniques",
                        desc: "Learn the fundamentals of searching techniques. Retrieve data efficiently from collections."
                  },
                  {
                        label: "Implement linear search and binary search algorithms",
                        desc: "Implement linear search and binary search algorithms. Improve search performance."
                  },
                  {
                        label: "Sorting concepts and their applications",
                        desc: "Understand sorting concepts and their applications. Organize data effectively."
                  },
                  {
                        label: "Implement Bubble Sort, Selection Sort, and Insertion Sort",
                        desc: "Implement Bubble Sort, Selection Sort, and Insertion Sort. Learn basic sorting mechanisms."
                  },
                  {
                        label: "Merge Sort and Quick Sort algorithms",
                        desc: "Explore Merge Sort and Quick Sort algorithms. Understand divide-and-conquer strategies."
                  },
                  {
                        label: "Heap Sort and Counting Sort techniques",
                        desc: "Learn Heap Sort and Counting Sort techniques. Solve specialized sorting problems."
                  },
                  {
                        label: "Compare sorting algorithm performance and complexities",
                        desc: "Compare sorting algorithm performance and complexities. Select appropriate approaches."
                  },
                  {
                        label: "Optimize searching and sorting operations",
                        desc: "Optimize searching and sorting operations. Improve application efficiency."
                  },
                  {
                        label: "Solve practical data organization challenges",
                        desc: "Solve practical data organization challenges. Develop analytical problem-solving skills."
                  },
                  {
                        label: "Gain hands-on experience",
                        desc: "Gain hands-on experience through algorithm implementation exercises."
                  }
            ]
      },
      {
            id: 9,
            title: "Dynamic Programming & Greedy Algorithms",
            points: [
                  {
                        label: "Dynamic programming",
                        desc: "Understand dynamic programming concepts and problem-solving techniques. Optimize recursive solutions."
                  },
                  {
                        label: "Memoization and tabulation approaches",
                        desc: "Learn memoization and tabulation approaches. Improve algorithm performance."
                  },
                  {
                        label: "Solve classic dynamic programming problems",
                        desc: "Solve classic dynamic programming problems. Build confidence in advanced coding challenges."
                  },
                  {
                        label: "Longest common subsequence and knapsack problems",
                        desc: "Explore longest common subsequence and knapsack problems. Understand optimization techniques."
                  },
                  {
                        label: "Greedy algorithm principles and applications",
                        desc: "Learn greedy algorithm principles and applications. Make efficient local decisions."
                  },
                  {
                        label: "Compare dynamic programming and greedy approaches",
                        desc: "Compare dynamic programming and greedy approaches. Select suitable problem-solving methods."
                  },
                  {
                        label: "Implement interval scheduling and optimization problems",
                        desc: "Implement interval scheduling and optimization problems. Improve algorithm design skills."
                  },
                  {
                        label: "Analyze complexity and efficiency of advanced algorithms",
                        desc: "Analyze complexity and efficiency of advanced algorithms. Optimize resource usage."
                  },
                  {
                        label: "Develop logical thinking",
                        desc: "Develop logical thinking through challenging coding exercises. Strengthen problem-solving abilities."
                  },
                  {
                        label: "Practice frequently asked",
                        desc: "Practice frequently asked interview and competitive programming problems."
                  }
            ]
      },
      {
            id: 10,
            title: "Advanced DSA & Interview Preparation",
            points: [
                  {
                        label: "Advanced data structures and algorithmic concepts",
                        desc: "Explore advanced data structures and algorithmic concepts. Prepare for complex problem-solving scenarios."
                  },
                  {
                        label: "Backtracking techniques",
                        desc: "Learn backtracking techniques and recursive exploration methods. Solve combinatorial challenges effectively."
                  },
                  {
                        label: "Divide-and-conquer strategies for optimization",
                        desc: "Understand divide-and-conquer strategies for optimization. Improve algorithm efficiency."
                  },
                  {
                        label: "Bit manipulation techniques and applications",
                        desc: "Explore bit manipulation techniques and applications. Solve low-level optimization problems."
                  },
                  {
                        label: "Advanced graph and tree-based problem-solving methods",
                        desc: "Learn advanced graph and tree-based problem-solving methods. Strengthen technical expertise."
                  },
                  {
                        label: "Develop coding interview strategies and best practices",
                        desc: "Develop coding interview strategies and best practices. Improve confidence during technical interviews."
                  },
                  {
                        label: "Solve real-world coding",
                        desc: "Solve real-world coding challenges from leading technology companies. Gain industry-relevant experience."
                  },
                  {
                        label: "Participate in mock coding assessments and contests",
                        desc: "Participate in mock coding assessments and contests. Enhance speed and accuracy."
                  },
                  {
                        label: "Problem-solving patterns commonly used in interviews",
                        desc: "Learn problem-solving patterns commonly used in interviews. Improve solution recognition skills."
                  },
                  {
                        label: "Complete a capstone",
                        desc: "Complete a capstone project and comprehensive coding challenge set. Demonstrate mastery of Data Structures and Algorithms."
                  }
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
