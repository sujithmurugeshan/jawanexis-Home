import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import InternshipIntro from "../components/InternshipIntro.jsx";
import { API_BASE_URL } from "../config";

import { 
  CheckCircle2, X, ChevronRight, Award, Briefcase, BookOpen, 
  Clock, ShieldCheck, GraduationCap, ChevronDown, Check, UserCheck, Star, HelpCircle 
} from "lucide-react";

const internshipData = {
  "hr-executive": {
    title: "HR Executive",
    subtitle: "Build a Career in Human Resources with Practical HR Training",
    description: "The HR Executive Internship Program at JAWA EDTECH is designed for students, graduates, and aspiring HR professionals who want to gain practical exposure to Human Resource Management. This internship bridges the gap between academic learning and real corporate HR practices.",
    description2: "Human Resources plays a vital role in every organization. From hiring the right talent and onboarding employees to managing records and supporting employee engagement, HR professionals contribute significantly to business growth. Our internship program provides hands-on experience and industry-relevant knowledge that helps learners become job-ready HR professionals.",
    description3: "During this 1-month internship, students will learn the fundamentals of HR operations, employee lifecycle management, HR documentation, onboarding processes, payroll basics, compliance support, and workplace communication.",
    curriculum: [
      {
        title: "Employee Lifecycle Management",
        points: [
          "Introduction to Human Resources",
          "HR Roles and Responsibilities",
          "Employee Records Management",
          "HR Documentation",
          "HR Policies and Procedures",
          "Employee Engagement Activities"
        ]
      },
      {
        title: "Onboarding and HR Operations",
        points: [
          "Joining Formalities",
          "Employee Verification Process",
          "Documentation Collection",
          "Attendance Management",
          "Leave Management",
          "Exit Process Management"
        ]
      },
      {
        title: "Payroll, Compliance & HR Reporting",
        points: [
          "Payroll Fundamentals",
          "Salary Structure Understanding",
          "Statutory Compliance Basics",
          "PF and ESI Introduction",
          "HR Analytics Basics"
        ]
      }
    ],
    highlights: [
      "1 Month Practical Internship",
      "Industry-Oriented Curriculum",
      "Live HR Documentation Practice",
      "Real Corporate Case Studies",
      "Internship Completion Certificate",
      "Resume Building Support",
      "Interview Preparation Sessions",
      "Career Guidance from HR Experts"
    ],
    careerOpportunities: [
      "HR Executive",
      "HR Coordinator",
      "HR Administrator",
      "HR Operations Executive",
      "HR Assistant",
      "Talent Management Coordinator"
    ],
    originalFee: "₹7,000",
    discountedFee: "₹5,000",
    whyChooseTitle: "Why Choose JAWA EDTECH?",
    whyChooseDesc: "At JAWA EDTECH, we focus on practical learning rather than theoretical concepts. Our trainers bring industry experience and provide real-world HR exposure that helps students understand corporate HR environments and become confident professionals."
  },
  "hr-recruitment": {
    title: "HR Recruitment",
    subtitle: "Master Talent Acquisition and Recruitment Skills",
    description: "The HR Recruitment Internship Program is designed for individuals who want to build a successful career in Talent Acquisition and Recruitment. Recruitment is one of the fastest-growing domains in Human Resources, and companies constantly seek skilled recruiters who can identify and attract top talent.",
    description2: "This internship provides practical exposure to sourcing, screening, interviewing, candidate engagement, and recruitment operations. Participants will work on real recruitment scenarios and learn industry-standard hiring processes.",
    description3: "Whether you're looking to start a career in HR or refine your sourcing skills, this recruitment program gives you concrete tool knowledge and workflows that are actively used by companies today.",
    curriculum: [
      {
        title: "Recruitment Fundamentals",
        points: [
          "Introduction to Recruitment",
          "Recruitment Lifecycle",
          "Understanding Job Descriptions",
          "Hiring Process Workflow",
          "Recruitment Terminologies",
          "Recruitment Metrics"
        ]
      },
      {
        title: "Talent Sourcing and Screening",
        points: [
          "Job Portal Sourcing",
          "LinkedIn Recruitment",
          "Resume Screening",
          "Candidate Shortlisting",
          "Candidate Assessment",
          "Database Management"
        ]
      },
      {
        title: "Interview Coordination & Reporting",
        points: [
          "Interview Scheduling",
          "Candidate Communication",
          "Follow-up Strategies",
          "Offer Management",
          "Joining Coordination",
          "Recruitment Sourcing Metrics",
          "Recruitment Reporting Basics"
        ]
      }
    ],
    highlights: [
      "1 Month Practical Internship",
      "Hands-on Recruitment Training",
      "Live Resume Screening Practice",
      "LinkedIn Recruitment Training",
      "Mock Interview Sessions",
      "Internship Certificate",
      "Resume Enhancement Support",
      "Placement Assistance"
    ],
    careerOpportunities: [
      "HR Recruiter",
      "Talent Acquisition Executive",
      "Recruitment Specialist",
      "Technical Recruiter",
      "Staffing Coordinator",
      "Talent Acquisition Associate"
    ],
    originalFee: "₹5,000",
    discountedFee: "₹3,500",
    whyChooseTitle: "Benefits of This Internship",
    whyChooseDesc: "Recruitment professionals are in demand across IT, Non-IT, Consulting, Manufacturing, Healthcare, and Startup sectors. This internship equips learners with practical recruitment skills that employers value."
  },
  "full-stack": {
    title: "Full Stack Development",
    subtitle: "Gain Real-World Software Development Experience",
    description: "The Full Stack Development Internship Program is designed for students and aspiring software developers who want to learn how modern web applications are built. This internship focuses on practical coding skills, project development, and industry-standard software development practices.",
    description2: "Participants will gain hands-on experience in front-end development, back-end development, databases, APIs, version control, deployment, and project implementation.",
    description3: "Our practical framework ensures that you don't just study code, you write it, debug it, and deploy it to live hosting environments.",
    curriculum: [
      {
        title: "Front-End Development",
        points: [
          "HTML5 Fundamentals",
          "CSS3 Styling",
          "Responsive Web Design",
          "JavaScript Essentials",
          "Bootstrap Framework",
          "User Interface Development"
        ]
      },
      {
        title: "Back-End Development",
        points: [
          "Server-Side Programming",
          "REST API Development",
          "Authentication Concepts",
          "Business Logic Implementation",
          "Database Connectivity",
          "Application Security Basics"
        ]
      },
      {
        title: "Database and Project Development",
        points: [
          "Database Design",
          "SQL Fundamentals",
          "CRUD Operations",
          "Git and GitHub",
          "Live Project Development",
          "Project Deployment"
        ]
      }
    ],
    highlights: [
      "1 Month Project-Based Internship",
      "Real-Time Development Practice",
      "Industry-Level Coding Standards",
      "Live Project Exposure",
      "Internship Completion Certificate",
      "Portfolio Development Support",
      "GitHub Project Guidance",
      "Technical Interview Preparation"
    ],
    careerOpportunities: [
      "Full Stack Developer",
      "Web Developer",
      "Front-End Developer",
      "Back-End Developer",
      "Software Developer",
      "Junior Software Engineer"
    ],
    originalFee: "₹5,000",
    discountedFee: "₹3,500",
    whyChooseTitle: "Why Start Your Development Career with JAWA EDTECH?",
    whyChooseDesc: "Technology companies look for candidates who can demonstrate practical skills and project experience. Our Full Stack Development Internship helps learners build real-world applications, strengthen coding abilities, and create an impressive portfolio for job opportunities."
  }
};

const faqs = [
  {
    q: "Is this an online or offline internship?",
    a: "The internship can be conducted in online, offline, or hybrid mode based on batch availability."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. All participants who successfully complete the internship will receive an Internship Completion Certificate."
  },
  {
    q: "Is this suitable for beginners?",
    a: "Absolutely. The internship is designed for students, freshers, and beginners looking to gain practical experience."
  },
  {
    q: "What is the duration?",
    a: "All internship programs are conducted for a duration of 1 month."
  },
  {
    q: "Will there be practical assignments?",
    a: "Yes. Each internship includes practical exercises, assignments, and hands-on learning activities."
  },
  {
    q: "How can I enroll?",
    a: "You can contact JAWA EDTECH through the website, phone, or email to reserve your seat in the upcoming batch."
  }
];

export default function InternshipPage({ courseKey }) {
  const config = internshipData[courseKey];
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalOk, setModalOk] = useState(false);
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [courseKey]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white border rounded-3xl shadow-md max-w-sm">
          <h2 className="text-xl font-bold text-red-600">Internship Not Found</h2>
          <p className="text-gray-500 mt-2">The requested program config could not be loaded.</p>
          <a href="#home" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold">Back to Home</a>
        </div>
      </div>
    );
  }

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setLoading(true);

    try {
      const payload = {
        ...formData,
        graduationYear: parseInt(formData.graduationYear),
        courseKey: courseKey
      };

      const res = await fetch(`${API_BASE_URL}/api/internship/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Failed to submit application");
      }

      setModalOk(true);
      setTimeout(() => {
        setModalOk(false);
        setShowModal(false);
        setFormData({ name: "", email: "", countryCode: "+91", phone: "", education: "", profile: "", graduationYear: "", language: "" });
      }, 4000);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <InternshipIntro courseKey={courseKey} />

      <main className="relative overflow-hidden">
        {/* Decorative background gradients for the whole page flow */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-radial-gradient from-green-50/60 to-transparent pointer-events-none rounded-full" />
        <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-radial-gradient from-green-50/50 to-transparent pointer-events-none rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-radial-gradient from-green-50/40 to-transparent pointer-events-none rounded-full" />

        {/* ── 1. PROGRAM OVERVIEW ── */}
        <div className="py-12" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f6fff9 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="relative overflow-hidden bg-white/80 backdrop-blur-md border border-green-200/60 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(25,217,80,0.04)] hover:shadow-[0_12px_40px_rgba(25,217,80,0.08)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-88 h-88 bg-radial-gradient from-green-100/30 to-transparent pointer-events-none rounded-full" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-55/80 border border-green-200 text-green-700 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
                  <Star size={12} className="fill-green-600 stroke-none" />
                  Program Overview
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-gray-900 leading-tight">
                  {config.subtitle}
                </h3>
                <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-semibold">
                  <p>{config.description}</p>
                  <p>{config.description2}</p>
                  {config.description3 && <p>{config.description3}</p>}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── 2. WHAT YOU WILL LEARN (CURRICULUM) ── */}
        <div className="py-16" style={{ background: "linear-gradient(180deg, #f6fff9 0%, #ffffff 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-green-200 text-green-700 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
                  <BookOpen size={12} className="text-green-600" />
                  Curriculum Details
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-gray-900 tracking-tight">
                  What You Will Learn
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500 font-bold max-w-xl mx-auto">
                  Our 1-month structured modules ensure you gain core functional skills.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.curriculum.map((module, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-green-100 rounded-3xl p-7 shadow-[0_6px_24px_rgba(25,217,80,0.03)] hover:shadow-[0_12px_36px_rgba(25,217,80,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5 border-b border-green-50 pb-4 flex-shrink-0">
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-sm font-extrabold shadow-sm">
                        {idx + 1}
                      </span>
                      <h4 className="font-extrabold text-[16px] text-gray-900 leading-snug">
                        {module.title}
                      </h4>
                    </div>
                    <ul className="space-y-3.5 flex-1">
                      {module.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-gray-600 leading-normal">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0 stroke-[3]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── 3. HIGHLIGHTS & CAREERS ── */}
        <div className="py-16" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f3fff6 50%, #ffffff 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Highlights */}
              <section className="bg-white/90 backdrop-blur-sm border border-green-150 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(25,217,80,0.05)] hover:shadow-[0_12px_36px_rgba(25,217,80,0.10)] transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                    <Award className="text-green-600" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-900">Internship Highlights</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                  {config.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-50 border border-green-200 text-green-700 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Opportunities */}
              <section className="bg-white/90 backdrop-blur-sm border border-green-150 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(25,217,80,0.05)] hover:shadow-[0_12px_36px_rgba(25,217,80,0.10)] transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                    <Briefcase className="text-green-600" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-900">Career Opportunities</h4>
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-500 mb-5 leading-relaxed">
                  Upon finishing the program, you will be prepared for multiple high-demand job profiles:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {config.careerOpportunities.map((opp, i) => (
                    <span 
                      key={i} 
                      className="px-3.5 py-2.5 rounded-xl bg-green-55 border border-green-200/80 text-xs sm:text-sm font-extrabold text-green-800 hover:bg-green-100 hover:scale-[1.02] transition duration-200 cursor-default"
                    >
                      {opp}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* ── 4. PRICING & TRUST BLOCK ── */}
        <div className="py-16" style={{ background: "linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Trust notes */}
              <section className="bg-white/95 backdrop-blur-sm border border-green-200 rounded-3xl p-8 md:p-10 flex flex-col justify-center shadow-[0_10px_30px_rgba(25,217,80,0.06)]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-4 max-w-fit shadow-sm">
                  <ShieldCheck size={12} />
                  Verified Sponsoring
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                  {config.whyChooseTitle}
                </h4>
                <p className="mt-4 text-sm sm:text-base text-gray-500 font-semibold leading-relaxed">
                  {config.whyChooseDesc}
                </p>
              </section>

              {/* Price Card */}
              <section className="relative bg-gradient-to-br from-green-950 to-green-900 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(22,163,74,0.25)] border border-green-800 hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }} />

                <div className="relative z-10">
                  <p className="text-xs font-extrabold text-green-400 uppercase tracking-widest mb-1">
                    1-Month Certified Internship
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold">{config.title} Program Fee</h4>
                  <div className="flex items-baseline gap-4 mt-5 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white leading-none">{config.discountedFee}</span>
                    <span className="text-xl font-semibold text-green-300/60 line-through">{config.originalFee}</span>
                    <span className="text-xs font-extrabold px-2 py-1 bg-green-500/25 border border-green-500/40 text-green-300 rounded-lg">SAVE 30%</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-200/80 leading-relaxed mt-3">
                    Special limited-time fee for current batches. Get lifetime access to materials, projects, and certification validation.
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full h-12 rounded-xl bg-white hover:bg-green-50 text-green-950 font-extrabold text-base shadow-lg transition hover:scale-[1.02] cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* ── 5. FAQs ── */}
        <div className="py-16" style={{ background: "linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-green-200 text-green-700 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
                  <HelpCircle size={12} className="text-green-600" />
                  FAQ Help
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-gray-900 tracking-tight">
                  Frequently Asked Questions
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500 font-bold max-w-xl mx-auto">
                  Answers to common queries about our 1-month certification internships.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen ? "border-green-300 bg-green-50/20 shadow-[0_8px_24px_rgba(25,217,80,0.06)]" : "border-green-100 bg-white hover:border-green-200 shadow-[0_4px_20px_rgba(25,217,80,0.02)]"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-sm sm:text-base font-bold leading-snug ${isOpen ? "text-green-800" : "text-gray-800"}`}>
                          {faq.q}
                        </span>
                        <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors ${
                          isOpen ? "bg-green-600 border-green-600 text-white" : "border-green-200 text-green-400"
                        }`}>
                          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 border-t border-green-100/50 pt-3.5">
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/* ── 6. CONCLUSION SECTION ── */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="bg-gradient-to-br from-white to-green-50/25 border border-green-200 rounded-3xl p-8 md:p-10 shadow-[0_6px_24px_rgba(25,217,80,0.04)] text-center max-w-4xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                Take the First Step Toward Your Professional Career
              </h4>
              <p className="mt-4 text-sm sm:text-base text-gray-500 font-semibold leading-relaxed max-w-2xl mx-auto">
                Our 1-Month Internship Programs give you the practical skills, live corporate workflows, and resume-building projects you need to succeed.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-green-700 font-extrabold uppercase tracking-wider">
                For batch details, enrollment, and support, contact our team.
              </p>
            </section>
          </div>
        </div>

        {/* ── 7. PROMO CTA BANNER ── */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-850 to-green-800 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-800">
              {/* Glowing background highlights */}
              <div style={{
                position: "absolute", left: "-10%", top: "-30%", width: 360, height: 360,
                background: "radial-gradient(circle, rgba(25,217,80,0.15) 0%, transparent 70%)",
                borderRadius: "50%", pointerEvents: "none"
              }} />
              <div style={{
                position: "absolute", right: "-10%", bottom: "-30%", width: 360, height: 360,
                background: "radial-gradient(circle, rgba(25,217,80,0.15) 0%, transparent 70%)",
                borderRadius: "50%", pointerEvents: "none"
              }} />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left max-w-2xl">
                  <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                    Start Your Professional Journey Today
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-green-100 font-medium leading-relaxed">
                    Whether you aspire to become an HR Executive, HR Recruiter, or Full Stack Developer, our internship programs provide the practical skills, mentorship, and industry exposure needed to build a successful career. Join JAWA EDTECH and take the first step toward becoming industry-ready.
                  </p>
                </div>
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-8 h-12 bg-white hover:bg-green-50 text-green-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition flex items-center justify-center shrink-0 hover:scale-[1.02] cursor-pointer"
                >
                  Get Started Now
                </button>
              </div>
            </section>
          </div>
        </div>

      </main>

      {/* ── APPLICATION OVERLAY FORM MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg overflow-hidden bg-white border border-green-150 shadow-2xl rounded-[8px]">
            {/* Modal close */}
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white transition cursor-pointer"
              aria-label="Close form"
            >
              <X size={20} />
            </button>

            {modalOk ? (
              <div className="p-10 text-center flex flex-col items-center justify-center min-h-[360px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-md">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900">Application Submitted!</h4>
                <p className="mt-3 text-xs sm:text-sm font-semibold text-gray-500 leading-relaxed max-w-xs">
                  Thank you for applying to the {config.title} Internship. Our team will contact you shortly with the enrollment steps.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-[#00684f] px-6 py-5 text-white">
                  <h4 className="text-xl font-extrabold tracking-wide">
                    Apply for {config.title}
                  </h4>
                </div>

                <div className="p-6 max-h-[82vh] overflow-y-auto">
                <p className="mb-4 text-xs text-gray-400 font-semibold leading-relaxed">
                  Enter your details below to request registration for the upcoming 1-month internship batch.
                </p>

                {serverError && <div className="mt-4 p-3 bg-red-50 text-red-600 font-semibold rounded-md border border-red-200 text-sm">{serverError}</div>}

                <form onSubmit={handleApplySubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Name*</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45]"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Email ID*</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45]"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Phone Number*</label>
                    <div className="flex gap-2">
                      <div className="relative">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] cursor-pointer appearance-none pr-8"
                        >
                          <option value="+91">IN +91</option>
                          <option value="+1">US +1</option>
                          <option value="+44">UK +44</option>
                          <option value="+971">AE +971</option>
                          <option value="+65">SG +65</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                      </div>
                      <input 
                        type="tel" 
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0,10) })}
                        className="flex-1 h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45]"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Educational Qualification*</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${formData.education === "" ? "text-gray-400" : "text-black font-semibold"}`}
                      >
                        <option value="" disabled>Education Qualification</option>
                        <option value="Under Graduate (Engineering)">Under Graduate (Engineering)</option>
                        <option value="Under Graduate (Arts/Science/Commerce)">Under Graduate (Arts/Science/Commerce)</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="PhD / Research Scholar">PhD / Research Scholar</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Current Profile*</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.profile}
                        onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                        className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${formData.profile === "" ? "text-gray-400" : "text-black font-semibold"}`}
                      >
                        <option value="" disabled>Select</option>
                        <option value="College Student (Final Year)">College Student (Final Year)</option>
                        <option value="College Student (1st/2nd/3rd Year)">College Student (1st/2nd/3rd Year)</option>
                        <option value="Working Professional (IT)">Working Professional (IT)</option>
                        <option value="Working Professional (Non-IT)">Working Professional (Non-IT)</option>
                        <option value="Job Seeker / Unemployed">Job Seeker / Unemployed</option>
                        <option value="Freelancer / Self-employed">Freelancer / Self-employed</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Year of Graduation*</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.graduationYear}
                        onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${formData.graduationYear === "" ? "text-gray-400" : "text-black font-semibold"}`}
                      >
                        <option value="" disabled>Year of Graduation</option>
                        {Array.from({ length: 15 }, (_, i) => 2029 - i).map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-gray-600 mb-1">Speaking Language*</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className={`w-full h-10 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guvi-green/35 focus:border-[#005c45] appearance-none pr-8 cursor-pointer ${formData.language === "" ? "text-gray-400" : "text-black font-semibold"}`}
                      >
                        <option value="" disabled>Select</option>
                        <option value="Tamil">Tamil</option>
                        <option value="English">English</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-700" size={16} />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 btn-glossy-green font-extrabold text-base rounded-md flex items-center justify-center cursor-pointer mt-6 disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Application"}

                  </button>
                  <p className="text-[10px] text-gray-400 leading-snug text-center mt-2">
                    By submitting, I agree to be contacted via WhatsApp, call, or email regarding batch schedules and enrollment steps.
                  </p>
                </form>
              </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
