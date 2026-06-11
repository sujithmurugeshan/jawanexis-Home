import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { CheckCircle2, X, ChevronRight } from "lucide-react";
import studentsImg from "../assets/fullstack-students.png";

/* ─────────────── Small SVG logos ─────────────── */
const ReactLogo = () => (
  <svg width="36" height="36" viewBox="-11.5 -10.23174 23 20.46348" fill="none"
    style={{ animation: "spin 12s linear infinite" }}>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);
const VSCodeLogo = () => (
  <svg width="36" height="36" viewBox="0 0 128 128" fill="none">
    <path d="M89.7 15.6L46.3 54.4L18.4 36.3C15.4 34.3 11.4 35.8 10.4 39.3L1.1 72.3C-0.3 77.2 1.4 82.5 5.4 85.5L34.2 107.1L89.7 112.4C93.4 112.8 97.1 110.6 98.4 107.1L125.7 36.3C127.8 30.8 123.7 24.9 117.8 24.9L89.7 15.6Z" fill="#23A9F2"/>
    <path d="M89.7 15.6L102.3 43.1L89.7 72.3L46.3 54.4L89.7 15.6Z" fill="#0877B9"/>
    <path d="M1.1 72.3C-0.3 77.2 1.4 82.5 5.4 85.5L34.2 107.1L46.3 54.4L1.1 72.3Z" fill="#AE251E"/>
    <path d="M117.8 24.9L89.7 15.6L46.3 54.4L89.7 72.3L125.7 36.3C127.8 30.8 123.7 24.9 117.8 24.9Z" fill="#3C99D4"/>
  </svg>
);
const DropArrow = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500">
    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
);

/* ─────────────── Curriculum Data ─────────────── */
const MODULES = [
  {
    id: 1, title: "Programming & Web Development Fundamentals",
    points: [
      { label: "Web Foundations", desc: "Master HTML5 structure, CSS3 styling, and core JavaScript programming concepts from the ground up." },
      { label: "Modern JavaScript", desc: "Apply ES6+ features including arrow functions, destructuring, template literals, and modules." },
      { label: "DOM Interaction", desc: "Manipulate page elements dynamically and handle user events with confidence." },
      { label: "Programming Logic", desc: "Develop strong problem-solving skills through algorithmic thinking and code challenges." },
    ]
  },
  {
    id: 2, title: "Responsive Front-End Development",
    points: [
      { label: "Mobile-First Design", desc: "Build layouts that adapt beautifully across all screen sizes and devices." },
      { label: "CSS Mastery", desc: "Use Flexbox, Grid, and media queries to create polished, professional interfaces." },
      { label: "UI Best Practices", desc: "Apply design principles for consistent, accessible, and visually appealing web pages." },
      { label: "Cross-Browser Compatibility", desc: "Ensure your applications work seamlessly across all major browsers and platforms." },
    ]
  },
  {
    id: 3, title: "React.js Application Development",
    points: [
      { label: "Component Architecture", desc: "Build reusable, modular UI components using React's component-based structure." },
      { label: "State & Props", desc: "Manage data flow between components using state management and props effectively." },
      { label: "React Hooks", desc: "Leverage useState, useEffect, useContext and custom hooks for clean, functional components." },
      { label: "React Router", desc: "Create multi-page single-page applications with dynamic navigation and routing." },
    ]
  },
  {
    id: 4, title: "Backend Development with Node.js",
    points: [
      { label: "Node.js Runtime", desc: "Understand the event loop, asynchronous programming, and Node.js fundamentals." },
      { label: "Express Framework", desc: "Build server-side applications and define routes, middleware, and controllers." },
      { label: "REST API Design", desc: "Design and implement RESTful APIs following industry-standard architecture principles." },
      { label: "Error Handling", desc: "Implement robust error handling, logging, and server-side validation strategies." },
    ]
  },
  {
    id: 5, title: "Database Design & Management",
    points: [
      { label: "SQL Fundamentals", desc: "Write queries, define schemas, and manage relational databases effectively." },
      { label: "MongoDB & NoSQL", desc: "Work with document-based databases and understand when to use NoSQL solutions." },
      { label: "Data Modelling", desc: "Design efficient schemas with proper relationships, indexing, and optimisation." },
      { label: "CRUD Operations", desc: "Perform create, read, update, and delete operations across both SQL and NoSQL databases." },
    ]
  },
  {
    id: 6, title: "REST API Development & Integration",
    points: [
      { label: "API Architecture", desc: "Design scalable, well-structured RESTful APIs using HTTP standards and best practices." },
      { label: "Request/Response Cycle", desc: "Handle HTTP methods, status codes, headers, and response formats correctly." },
      { label: "Third-Party APIs", desc: "Integrate external services such as payment gateways, maps, and data providers." },
      { label: "API Documentation", desc: "Document your APIs with Swagger/OpenAPI for better developer collaboration." },
    ]
  },
  {
    id: 7, title: "Authentication & Application Security",
    points: [
      { label: "JWT Authentication", desc: "Implement JSON Web Token-based authentication for secure, stateless sessions." },
      { label: "OAuth2 & Social Login", desc: "Enable login via Google, GitHub, and other identity providers using OAuth2 flows." },
      { label: "Role-Based Access Control", desc: "Define user roles and permissions to protect sensitive application resources." },
      { label: "Security Best Practices", desc: "Guard against OWASP vulnerabilities including XSS, CSRF, and SQL injection." },
    ]
  },
  {
    id: 8, title: "AI Integration & Prompt Engineering",
    points: [
      { label: "LLM API Integration", desc: "Connect to OpenAI and other large language model APIs to build AI-powered features." },
      { label: "Prompt Engineering", desc: "Craft effective prompts to get precise, reliable outputs from AI models." },
      { label: "Intelligent Features", desc: "Build chatbots, content generators, and AI-assisted tools within your applications." },
      { label: "Responsible AI", desc: "Understand the ethical considerations and limitations of deploying AI in production." },
    ]
  },
  {
    id: 9, title: "Cloud Deployment & DevOps Fundamentals",
    points: [
      { label: "Git & GitHub", desc: "Master version control workflows, branching strategies, and collaborative development." },
      { label: "CI/CD Pipelines", desc: "Automate testing and deployment using continuous integration and delivery pipelines." },
      { label: "Cloud Hosting", desc: "Deploy applications on platforms such as AWS, Vercel, and Render with confidence." },
      { label: "Environment Management", desc: "Handle secrets, environment variables, and production configuration securely." },
    ]
  },
  {
    id: 10, title: "Industry-Level Capstone Project",
    points: [
      { label: "Full-Stack Application", desc: "Design and build a complete, production-ready web application end-to-end." },
      { label: "AI Feature Integration", desc: "Incorporate at least one AI-powered feature to demonstrate modern development skills." },
      { label: "Code Reviews", desc: "Receive structured feedback from mentors and iterate to production quality." },
      { label: "Portfolio & Interview Prep", desc: "Present your project, polish your resume, and prepare for technical interviews." },
    ]
  },
];

/* ─────────────── Select Field ─────────────── */
const SelectField = ({ name, value, onChange, placeholder, children }) => (
  <div className="relative">
    <select name={name} value={value} onChange={onChange} required
      className={`w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400/40 appearance-none pr-8 cursor-pointer transition ${value ? "text-gray-900 font-semibold" : "text-gray-400 font-medium"}`}>
      <option value="" disabled>{placeholder}</option>
      {children}
    </select>
    <DropArrow/>
  </div>
);

/* ─────────────── Apply Form ─────────────── */
const ApplyForm = ({ data, onChange, onPhoneChange, onSubmit, submitted }) => (
  <div className="w-full bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)] sticky top-24">
    {submitted ? (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="text-green-500 mb-4 animate-bounce" size={56}/>
        <h3 className="text-2xl font-extrabold text-green-700 mb-2">Offer Locked!</h3>
        <p className="text-gray-600 font-semibold">Thank you, {data.name || "there"}!</p>
        <p className="text-gray-400 text-sm mt-1 max-w-xs">Our career counselor will reach out to you shortly.</p>
      </div>
    ) : (
      <>
        <h3 className="text-[20px] font-extrabold text-gray-900 text-center mb-5">Apply now to Unlock Offer!</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <input type="text" name="name" value={data.name} onChange={onChange} placeholder="Name" required
            className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
          <input type="email" name="email" value={data.email} onChange={onChange} placeholder="Email" required
            className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
          <div className="flex gap-2">
            <div className="relative min-w-[88px]">
              <select name="countryCode" value={data.countryCode} onChange={onChange}
                className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-sm font-bold focus:outline-none cursor-pointer appearance-none pr-6">
                <option value="+91">IN +91</option>
                <option value="+1">US +1</option>
                <option value="+44">UK +44</option>
                <option value="+971">AE +971</option>
              </select>
              <DropArrow/>
            </div>
            <input type="tel" name="phone" value={data.phone} onChange={onPhoneChange} placeholder="Mobile Number" required
              className="flex-1 h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
          </div>
          <SelectField name="education" value={data.education} onChange={onChange} placeholder="Education Qualification">
            <option>10th/12th Pass</option><option>Diploma / ITI</option>
            <option>Under Graduate (Engineering)</option>
            <option>Under Graduate (Arts/Science/Commerce)</option>
            <option>Post Graduate</option><option>PhD / Research Scholar</option>
          </SelectField>
          <SelectField name="profile" value={data.profile} onChange={onChange} placeholder="Current Profile">
            <option>College Student (Final Year)</option>
            <option>College Student (1st/2nd/3rd Year)</option>
            <option>Working Professional (IT)</option>
            <option>Working Professional (Non-IT)</option>
            <option>Job Seeker / Unemployed</option>
            <option>Freelancer / Self-employed</option>
          </SelectField>
          <SelectField name="graduationYear" value={data.graduationYear} onChange={onChange} placeholder="Year of Graduation">
            {Array.from({ length: 15 }, (_, i) => 2029 - i).map((y) => <option key={y}>{y}</option>)}
            <option>Before 2015</option>
          </SelectField>
          <SelectField name="language" value={data.language} onChange={onChange} placeholder="Speaking Language">
            <option>Tamil</option><option>English</option><option>Telugu</option>
            <option>Kannada</option><option>Hindi</option><option>Malayalam</option><option>Other</option>
          </SelectField>
          <div className="text-center">
            <button type="button" className="text-xs font-bold text-green-700 hover:underline">
              Have a Coupon code? <span className="underline">Redeem</span>
            </button>
          </div>
          <button type="submit"
            className="w-full h-12 bg-[#19d950] hover:bg-[#12c443] text-black font-extrabold text-base rounded-lg shadow-md transition duration-200 flex items-center justify-center cursor-pointer">
            Apply Now
          </button>
          <p className="text-[10px] text-gray-400 leading-snug text-center">
            By registering, I agree to be contacted via phone, SMS, or email for offers &amp; products, even if I am on a DNC/NDNC list.
          </p>
        </form>
      </>
    )}
  </div>
);

/* ══════════════════════ PAGE ══════════════════════ */
export default function FullStackCoursePage() {
  const empty = { name:"", email:"", countryCode:"+91", phone:"", education:"", profile:"", graduationYear:"", language:"" };
  const [formData, setFormData] = useState(empty);
  const [modalForm, setModalForm] = useState(empty);
  const [pageOk, setPageOk] = useState(false);
  const [modalOk, setModalOk] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  const hc = (setter) => (e) => { const {name,value}=e.target; setter(p=>({...p,[name]:value})); };
  const hp = (setter) => (e) => setter(p=>({...p, phone:e.target.value.replace(/\D/g,"")}));

  const submitPage = (e) => {
    e.preventDefault(); setPageOk(true);
    setTimeout(()=>{ setPageOk(false); setFormData(empty); }, 5000);
  };
  const submitModal = (e) => {
    e.preventDefault(); setModalOk(true);
    setTimeout(()=>{ setModalOk(false); setShowModal(false); setModalForm(empty); }, 5000);
  };

  const mod = MODULES[activeModule];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header/>
      <main>

        {/* ── 1. HERO ── */}
        <section className="relative overflow-hidden"
          style={{ background:"linear-gradient(175deg,#ecebff 0%,#f4f3ff 40%,#ffffff 100%)" }}>
          <div style={{ position:"absolute",left:"-6%",top:"30%",width:320,height:400,
            background:"radial-gradient(ellipse at center,rgba(167,139,250,0.35) 0%,transparent 70%)",
            borderRadius:"50%",pointerEvents:"none" }}/>
          <div style={{ position:"absolute",right:"-6%",top:"30%",width:320,height:400,
            background:"radial-gradient(ellipse at center,rgba(167,139,250,0.35) 0%,transparent 70%)",
            borderRadius:"50%",pointerEvents:"none" }}/>

          <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-purple-200 text-purple-700 text-xs font-extrabold uppercase tracking-widest mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"/>
              Jawanexis Certified
            </span>
            <h1 className="text-[28px] sm:text-[40px] md:text-[50px] font-extrabold leading-tight tracking-tight text-gray-900 max-w-[900px]">
              Jawanexis Full Stack Development Program
            </h1>
            <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-gray-500 max-w-[720px] font-medium">
              Build full stack skills in{" "}
              <span className="font-extrabold text-gray-800">Full Stack Development</span>{" "}
              with expert guidance, hands-on projects, and career support. Master tools like{" "}
              <span className="font-bold text-gray-800">Git</span>,{" "}
              <span className="font-bold text-gray-800">MongoDB</span>,{" "}
              <span className="font-bold text-gray-800">Express</span>,{" "}
              <span className="font-bold text-gray-800">React</span>,{" "}
              <span className="font-bold text-gray-800">Node.js</span> and more!
            </p>
            <button id="hero-enroll-btn" onClick={()=>setShowModal(true)}
              className="mt-7 inline-flex h-[52px] min-w-[200px] items-center justify-center rounded-lg bg-[#19d950] text-[17px] font-extrabold text-black shadow-lg transition hover:scale-105 hover:bg-[#12c443]">
              Enroll Now
            </button>
          </div>

          <div className="relative w-full" style={{ minHeight:320 }}>
            <img src={studentsImg} alt="Jawanexis Full Stack Students"
              className="w-full block object-contain object-top" style={{ maxHeight:480 }}/>
            <div className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-lg border border-gray-100" style={{ left:"22%",top:"42%" }}>
              <span className="text-xs font-bold text-gray-500">&lt;/&gt;</span>
              <span className="text-xs font-extrabold text-gray-800">Frontend</span>
            </div>
            <div className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-lg border border-gray-100" style={{ right:"22%",top:"42%" }}>
              <span className="text-xs font-extrabold text-gray-800">Backend</span>
              <span className="text-xs font-bold text-gray-500">&lt;/&gt;</span>
            </div>
            <div className="absolute hidden sm:flex p-3 bg-white rounded-2xl shadow-lg border border-gray-100" style={{ left:"1%",bottom:"8%",animation:"bounce 5s infinite ease-in-out" }}>
              <ReactLogo/>
            </div>
            <div className="absolute hidden sm:flex p-3 bg-white rounded-2xl shadow-lg border border-gray-100" style={{ right:"1%",bottom:"8%",animation:"bounce 4.5s infinite ease-in-out" }}>
              <VSCodeLogo/>
            </div>
            <div className="absolute hidden lg:block top-0 bottom-0" style={{ left:"18%",width:1,background:"linear-gradient(to bottom,transparent,rgba(139,92,246,0.15),transparent)" }}/>
            <div className="absolute hidden lg:block top-0 bottom-0" style={{ right:"18%",width:1,background:"linear-gradient(to bottom,transparent,rgba(139,92,246,0.15),transparent)" }}/>
          </div>
        </section>

        {/* ── 2. PERKS + FORM ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 tracking-tight">
                Get Career-Ready with These Powerful Perks!
              </h2>
              <p className="mt-3 text-gray-500 font-semibold text-base">
                Discover everything you need to build, grow, and get hired as a Full Stack developer.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mentors */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight:220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Mentors</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Live interactive classes, hands-on practice sessions &amp; expert-led doubt clarification.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background:"linear-gradient(135deg,#4ade80,#16a34a)",boxShadow:"0 8px 24px rgba(22,163,74,0.35)" }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M14 12L6 20L14 28" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M26 12L34 20L26 28" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23 8L17 32" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Unlimited Practice */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight:220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Unlimited Practice</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Sharpen your coding skills with 1500+ problems on top programming platforms.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <circle cx="36" cy="36" r="28" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="6 4"/>
                        <circle cx="36" cy="36" r="20" fill="#dcfce7"/>
                        <path d="M25 36L32 43L48 27" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </article>
                {/* Career Launch */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight:220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Career Launch Support</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Gain placement guidance, resume reviews, and job prep to accelerate your tech career.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <circle cx="36" cy="36" r="30" stroke="#16a34a" strokeWidth="2.5" fill="white"/>
                        <circle cx="36" cy="36" r="21" stroke="#16a34a" strokeWidth="2" fill="white"/>
                        <circle cx="36" cy="36" r="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
                        <circle cx="36" cy="36" r="5" fill="#16a34a"/>
                        <path d="M52 20L38 34" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M52 20L46 21.5M52 20L50.5 26" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </article>
                {/* Real-Time Projects */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight:220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Real-Time Project Work</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Work on <span className="font-bold text-gray-800">100+</span> hours of real-world, industry-relevant projects to build a job-winning portfolio.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="96" height="68" viewBox="0 0 96 68" fill="none">
                        <rect x="2" y="2" width="92" height="56" rx="6" fill="#0f172a"/>
                        <rect x="10" y="10" width="76" height="40" rx="3" fill="#1e293b"/>
                        <circle cx="16" cy="16" r="3" fill="#ef4444"/>
                        <circle cx="24" cy="16" r="3" fill="#eab308"/>
                        <circle cx="32" cy="16" r="3" fill="#22c55e"/>
                        <path d="M16 28L23 34L16 40" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="27" y="31" width="32" height="3" rx="1.5" fill="#64748b"/>
                        <rect x="38" y="58" width="20" height="5" rx="2" fill="#64748b"/>
                        <rect x="30" y="63" width="36" height="3" rx="1.5" fill="#475569"/>
                      </svg>
                    </div>
                  </div>
                </article>
              </div>
              <ApplyForm data={formData} onChange={hc(setFormData)} onPhoneChange={hp(setFormData)} onSubmit={submitPage} submitted={pageOk}/>
            </div>
          </div>
        </section>

        {/* ── 3. PROGRAM OVERVIEW ── */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest">
                🚀 Program Overview
              </span>
            </div>
            <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 text-center leading-tight mb-4">
              Full Stack Development Course —<br className="hidden sm:block"/> Become a Job-Ready Developer
            </h2>
            <p className="text-center text-gray-500 font-medium text-base max-w-3xl mx-auto mb-12">
              Do you want to build websites and web applications that companies use every day? At <span className="font-bold text-gray-800">Jawanexis</span>, our Full Stack Development Training Program helps students and working professionals become industry-ready Full Stack Developers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl">💡</div>
                  <h3 className="font-extrabold text-gray-900 text-base">Industry-Aligned Curriculum</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">Our curriculum is designed with what companies actually need. You will work on real-world projects and assignments that mirror day-to-day professional tasks — giving you the skills and confidence to land your first tech role.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl">🎯</div>
                  <h3 className="font-extrabold text-gray-900 text-base">Expert-Led, Hands-On Training</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">Learn from industry professionals who have built and shipped production-grade software. Every concept is reinforced through hands-on practice, live sessions, and structured doubt-clearing support.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm mb-8">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6">What You Will Master</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["HTML5, CSS3 & JavaScript","Responsive & mobile-first design","Front-End development with React.js","Back-End development with Node.js","Express.js RESTful APIs","Database management with MongoDB","Authentication & application security","AI integration & prompt engineering","Git & GitHub version control","Cloud deployment & DevOps basics","Industry-level capstone project","Portfolio building & interview prep"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-gray-900 mb-4">Why Choose Jawanexis?</h3>
                <ul className="space-y-2.5">
                  {["Learn the latest skills companies are actively hiring for","Build real-world projects with hands-on training","Get trained by experienced industry professionals","Create a strong portfolio to showcase your abilities","Receive resume building & interview preparation support","Benefit from placement assistance & career guidance","Earn an industry-recognised certification on completion","Access continuous support through our Career Development Centre"].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <ChevronRight size={15} className="text-green-500 mt-0.5 flex-shrink-0"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-gray-900 mb-4">Job Roles After Completion</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Full Stack Developer","Front-End Developer","Back-End Developer","Web Developer","Software Developer","Application Developer","JavaScript Developer","UI Developer"].map(role => (
                    <div key={role} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-100 text-xs font-semibold text-green-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"/>{role}
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl text-white text-center" style={{ background:"linear-gradient(135deg,#16a34a,#22c55e)" }}>
                  <p className="font-extrabold text-base">Learn. Build. Get Hired.</p>
                  <p className="text-green-100 text-xs mt-1">Your full stack journey starts here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CURRICULUM (reference-style) ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background:"#f4f5ff" }}>
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-[26px] md:text-[36px] font-extrabold text-gray-900 leading-tight">
                Master Full Stack Development with Our<br className="hidden sm:block"/> AI-Powered Curriculum
              </h2>
              <p className="mt-3 text-gray-500 font-medium max-w-2xl mx-auto">
                Explore each phase of Full Stack Development with structured, expert-led modules and AI tools.
              </p>
            </div>

            {/* Outer card */}
            <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(99,102,241,0.10)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]" style={{ minHeight:480 }}>

                {/* Left: module pill buttons */}
                <div className="border-r border-gray-100 py-6 px-4 flex flex-col gap-2 bg-white">
                  {MODULES.map((m, idx) => {
                    const isActive = activeModule === idx;
                    return (
                      <button key={m.id} onClick={() => setActiveModule(idx)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                          isActive
                            ? "border-2 border-violet-500 text-violet-700 font-bold bg-violet-50/60"
                            : "border border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50/30"
                        }`}>
                        Module {m.id}
                      </button>
                    );
                  })}
                </div>

                {/* Right: module detail */}
                <div className="p-8 flex flex-col">
                  <h3 className="text-[19px] font-extrabold text-gray-900 mb-6">
                    {mod.title}
                  </h3>

                  <div className="flex flex-col gap-4 flex-1">
                    {mod.points.map((pt) => (
                      <div key={pt.label} className="flex items-start gap-3">
                        {/* Green diamond bullet */}
                        <span className="mt-0.5 flex-shrink-0 text-green-500" style={{ fontSize:18, lineHeight:1 }}>✦</span>
                        <p className="text-[14px] leading-relaxed text-gray-700">
                          <span className="font-bold text-gray-900">{pt.label}:</span>{" "}
                          <span>{pt.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Download Syllabus */}
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-7 py-3 rounded-xl bg-[#19d950] hover:bg-[#12c443] text-black font-extrabold text-sm shadow-md transition hover:scale-105">
                      Download Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── ENROLL MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background:"rgba(0,0,0,0.52)", backdropFilter:"blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full mx-4 relative overflow-y-auto shadow-2xl" style={{ maxHeight:"95vh" }}>
            <button onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition">
              <X size={18}/>
            </button>
            {modalOk ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="text-green-500 mb-4 animate-bounce" size={64}/>
                <h3 className="text-2xl font-extrabold text-green-700 mb-3">Offer Locked!</h3>
                <p className="text-gray-700 font-bold text-base mb-2">Thank you, {modalForm.name || "there"}!</p>
                <p className="text-gray-400 text-sm max-w-xs">Our career counselor will get in touch shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-gray-900 text-center mb-6">Apply now to Unlock Offer!</h3>
                <form onSubmit={submitModal} className="space-y-3">
                  <input type="text" name="name" value={modalForm.name} onChange={hc(setModalForm)} placeholder="Name" required
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
                  <input type="email" name="email" value={modalForm.email} onChange={hc(setModalForm)} placeholder="Email" required
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
                  <div className="flex gap-2">
                    <div className="relative min-w-[88px]">
                      <select name="countryCode" value={modalForm.countryCode} onChange={hc(setModalForm)}
                        className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-sm font-bold focus:outline-none cursor-pointer appearance-none pr-6">
                        <option value="+91">IN +91</option><option value="+1">US +1</option>
                        <option value="+44">UK +44</option><option value="+971">AE +971</option>
                      </select>
                      <DropArrow/>
                    </div>
                    <input type="tel" name="phone" value={modalForm.phone} onChange={hp(setModalForm)} placeholder="Mobile Number" required
                      className="flex-1 h-11 px-4 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
                  </div>
                  <SelectField name="education" value={modalForm.education} onChange={hc(setModalForm)} placeholder="Education Qualification">
                    <option>10th/12th Pass</option><option>Diploma / ITI</option>
                    <option>Under Graduate (Engineering)</option>
                    <option>Under Graduate (Arts/Science/Commerce)</option>
                    <option>Post Graduate</option><option>PhD / Research Scholar</option>
                  </SelectField>
                  <SelectField name="profile" value={modalForm.profile} onChange={hc(setModalForm)} placeholder="Current Profile">
                    <option>College Student (Final Year)</option>
                    <option>College Student (1st/2nd/3rd Year)</option>
                    <option>Working Professional (IT)</option>
                    <option>Working Professional (Non-IT)</option>
                    <option>Job Seeker / Unemployed</option>
                    <option>Freelancer / Self-employed</option>
                  </SelectField>
                  <SelectField name="graduationYear" value={modalForm.graduationYear} onChange={hc(setModalForm)} placeholder="Year of Graduation">
                    {Array.from({length:15},(_,i)=>2029-i).map(y=><option key={y}>{y}</option>)}
                    <option>Before 2015</option>
                  </SelectField>
                  <SelectField name="language" value={modalForm.language} onChange={hc(setModalForm)} placeholder="Speaking Language">
                    <option>Tamil</option><option>English</option><option>Telugu</option>
                    <option>Kannada</option><option>Hindi</option><option>Malayalam</option><option>Other</option>
                  </SelectField>
                  <div className="text-center">
                    <button type="button" className="text-xs font-bold text-green-700 hover:underline">
                      Have a Coupon code? <span className="underline">Redeem</span>
                    </button>
                  </div>
                  <button type="submit"
                    className="w-full h-12 bg-[#19d950] hover:bg-[#12c443] text-black font-extrabold text-base rounded-lg shadow-md transition flex items-center justify-center cursor-pointer">
                    Apply Now
                  </button>
                  <p className="text-[10px] text-gray-400 leading-snug text-center">
                    By registering, I agree to be contacted via phone, SMS, or email for offers &amp; products, even if I am on a DNC/NDNC list.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer/>
    </div>
  );
}
