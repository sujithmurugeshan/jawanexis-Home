import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { API_BASE_URL } from "../config";

import { CheckCircle2, X, ChevronRight, Star, Search, BookOpen, Award, Briefcase, Sparkles, Users, Laptop, FileText, MessageSquare } from "lucide-react";
import { coursesConfig } from "../data/coursesConfig.js";
import {
  JavaScriptLogo, HTMLLogo, CSSLogo, TailwindCSSLogo, ReactLogo, ReduxLogo,
  MySQLLogo, MongoDBLogo, NodeJsLogo, ExpressJsLogo, PostmanLogo, AWSLogo,
  VSCodeLogo, MongooseLogo, GitHubLogo, GitLogo, CursorAILogo,
  ExcelLogo, GoogleSheetsLogo, HRMSLogo, ZohoLogo, SapLogo, PayrollLogo,
  OfficeLogo, PowerBiLogo, LinkedInLogo, NaukriLogo, IndeedLogo, ATSLogo,
  GoogleWorkspaceLogo, SourcingToolsLogo, SeleniumLogo, JiraLogo, TestNGLogo,
  MavenLogo, SQLLogo, JenkinsLogo, DevToolsLogo, SwaggerLogo,
  CPlusPlusLogo, JavaLogo, PythonLogo, LeetCodeLogo, HackerRankLogo,
  CodeChefLogo, GeeksforGeeksLogo, ChatGPTLogo, GeminiLogo, EightfoldLogo, ParadoxLogo,
  KekaToolLogo, GreytHRToolLogo, DarwinboxToolLogo, EightfoldImgLogo, ZohoRecruitToolLogo
} from "../components/ToolLogos.jsx";

// Map tool keys to SVG components
const LOGO_MAP = {
  js: <JavaScriptLogo />,
  html: <HTMLLogo />,
  css: <CSSLogo />,
  tailwind: <TailwindCSSLogo />,
  react: <ReactLogo />,
  redux: <ReduxLogo />,
  mysql: <MySQLLogo />,
  mongodb: <MongoDBLogo />,
  node: <NodeJsLogo />,
  express: <ExpressJsLogo />,
  postman: <PostmanLogo />,
  aws: <AWSLogo />,
  vscode: <VSCodeLogo />,
  mongoose: <MongooseLogo />,
  github: <GitHubLogo />,
  git: <GitLogo />,
  cursor: <CursorAILogo />,

  excel: <ExcelLogo />,
  excel_hr: <ExcelLogo />,
  sheets: <GoogleSheetsLogo />,
  hrms: <HRMSLogo />,
  zoho: <ZohoLogo />,
  sap: <SapLogo />,
  payroll: <PayrollLogo />,
  office: <OfficeLogo />,
  powerbi: <PowerBiLogo />,
  chatgpt: <ChatGPTLogo />,
  gemini: <GeminiLogo />,
  eightfold: <EightfoldLogo />,
  paradox: <ParadoxLogo />,

  linkedin: <LinkedInLogo />,
  naukri: <NaukriLogo />,
  indeed: <IndeedLogo />,
  ats: <ATSLogo />,
  workspace: <GoogleWorkspaceLogo />,
  sourcing: <SourcingToolsLogo />,

  selenium: <SeleniumLogo />,
  jira: <JiraLogo />,
  testng: <TestNGLogo />,
  maven: <MavenLogo />,
  sql: <SQLLogo />,
  jenkins: <JenkinsLogo />,
  devtools: <DevToolsLogo />,
  swagger: <SwaggerLogo />,

  cpp: <CPlusPlusLogo />,
  java: <JavaLogo />,
  python: <PythonLogo />,
  leetcode: <LeetCodeLogo />,
  hackerrank: <HackerRankLogo />,
  codechef: <CodeChefLogo />,
  geeksforgeeks: <GeeksforGeeksLogo />,

  keka: <KekaToolLogo />,
  greythr: <GreytHRToolLogo />,
  darwinbox: <DarwinboxToolLogo />,
  eightfold_img: <EightfoldImgLogo />,
  zoho_recruit: <ZohoRecruitToolLogo />
};

/* ─────────────── Hiring Partner SVGs ─────────────── */
const FreshworksLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#1e293b]">
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" fill="#00C08B"/>
      <circle cx="16" cy="16" r="6" fill="#FF5252"/>
    </svg>
    <span>freshworks</span>
  </div>
);

const OneDPOLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#1e293b]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="10" width="16" height="11" rx="2" fill="#0EA5E9" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#0EA5E9" strokeWidth="2.5" fill="none" />
    </svg>
    <span className="font-semibold text-gray-500">one</span>
    <span className="text-[#1e293b]">DPO</span>
  </div>
);

const PayPalLogo = () => (
  <div className="flex items-center gap-1 text-sm font-extrabold text-[#003087]">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 21h3.7c.6 0 1.2-.4 1.3-1l2-12.8c0-.3-.3-.6-.6-.6H9.7c-.6 0-1.2.4-1.3 1l-2 12.8c0 .3.3.6.6.6z" fill="#0079C1" />
      <path d="M10.5 18h3.7c.6 0 1.2-.4 1.3-1l2-12.8c0-.3-.3-.6-.6-.6h-3.7c-.6 0-1.2.4-1.3 1l-2 12.8c0 .3.3.6.6.6z" fill="#00457C" opacity="0.6" />
    </svg>
    <span className="italic font-bold">PayPal</span>
  </div>
);

const SQCESSLogo = () => (
  <div className="flex items-center gap-1 text-sm font-extrabold text-gray-900 tracking-tight">
    <span className="text-red-600 font-extrabold text-base border-r border-red-600 pr-1.5 mr-0.5">S</span>
    <span className="text-gray-800">IQCSESS</span>
  </div>
);

const TataCommunicationsLogo = () => (
  <div className="flex flex-col text-left leading-none font-sans font-black">
    <span className="text-[#005A9C] text-sm tracking-widest font-black uppercase">TATA</span>
    <span className="text-gray-500 text-[9px] uppercase tracking-wider font-bold">COMMUNICATIONS</span>
  </div>
);

const ScapicLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#1e293b]">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#EF4444" />
      <path d="M8 12a4 4 0 1 1 8 0" stroke="white" strokeWidth="2.5" fill="none" />
    </svg>
    <span>scapic</span>
  </div>
);

const ChargebeeLogo = () => (
  <div className="flex items-center gap-1 text-sm font-extrabold text-[#1e293b]">
    <span className="text-amber-500 text-xl font-bold mr-0.5">✳</span>
    <span>chargebee</span>
  </div>
);

const FlipkartLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-gray-800">
    <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="12" width="48" height="44" rx="8" fill="#2874F0" />
      <path d="M22 28h20v2H22zm0 8h20v2H22z" fill="white" />
      <circle cx="46" cy="18" r="8" fill="#FFE500" />
      <text x="43" y="24" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#2874F0">f</text>
    </svg>
    <span className="italic text-[#2874F0]">Flipkart</span>
  </div>
);

const ZohoRecruitLogo = () => (
  <div className="flex items-center gap-2 text-sm font-extrabold text-gray-800">
    <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
      <div className="bg-[#E21C26] rounded-sm" />
      <div className="bg-[#39B54A] rounded-sm" />
      <div className="bg-[#0071BC] rounded-sm" />
      <div className="bg-[#F7931E] rounded-sm" />
    </div>
    <span>Zoho Recruit</span>
  </div>
);

const ZohoPeopleLogo = () => (
  <div className="flex items-center gap-2 text-sm font-extrabold text-gray-800">
    <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
      <div className="bg-[#E21C26] rounded-sm" />
      <div className="bg-[#39B54A] rounded-sm" />
      <div className="bg-[#0071BC] rounded-sm" />
      <div className="bg-[#F7931E] rounded-sm" />
    </div>
    <span>Zoho People</span>
  </div>
);

const LinkedInHiringLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#0077B5]">
    <svg width="20" height="20" viewBox="0 0 72 72" fill="none">
      <rect width="72" height="72" rx="12" fill="#0077B5"/>
      <path d="M24.6 57V29h-9.3v28h9.3zm-4.7-31.8c3.2 0 5.2-2.1 5.2-4.8c-.1-2.7-2-4.8-5.1-4.8c-3.1 0-5.2 2.1-5.2 4.8c0 2.7 2 4.8 5 4.8h.1zM57.6 57V39.6c0-9.3-5-13.6-11.6-13.6c-5.3 0-7.7 2.9-9 5v-7.6h-9.3c.1 2.6 0 28 0 28h9.3V41.4c0-.8.1-1.7.3-2.3c.7-1.7 2.2-3.5 4.8-3.5c3.4 0 4.8 2.6 4.8 6.4V57h9.3z" fill="white"/>
    </svg>
    <span>LinkedIn</span>
  </div>
);

const NaukriHiringLogo = () => (
  <div className="flex items-center gap-1 text-sm font-extrabold text-[#0B2B5C] relative">
    <span>naukri</span>
    <span className="w-1.5 h-1.5 bg-[#FF4F00] rounded-full absolute -top-0.5 -right-2" />
  </div>
);

const QuickRecruitLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-gray-800">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#10B981" />
      <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" fill="none" />
    </svg>
    <span>Quick Recruit</span>
  </div>
);

const GreytHRLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#00A5EC]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#00A5EC" />
      <text x="5" y="16" fontFamily="Arial Black, sans-serif" fontSize="12" fontWeight="bold" fill="white">g</text>
    </svg>
    <span>greytHR</span>
  </div>
);

const DarwinboxLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="#EA580C" />
      <polygon points="12,6 18,10 18,14 12,18 6,14 6,10" fill="white" />
    </svg>
    <span className="text-gray-900 font-bold">darwin</span><span className="text-orange-600 font-bold">box</span>
  </div>
);

const EightfoldAILogo = () => (
  <div className="flex items-center gap-2 text-sm font-extrabold text-[#11153b] font-sans">
    <svg width="26" height="20" viewBox="0 0 28 20" fill="none">
      <path d="M8 4a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6a6 6 0 0 0-6-6zm12 0a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6a6 6 0 0 0-6-6z" stroke="url(#eightfold-grad)" strokeWidth="3.5" fill="none"/>
      <defs>
        <linearGradient id="eightfold-grad" x1="0" y1="0" x2="28" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7"/>
          <stop offset="1" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
    </svg>
    <span>eightfold.ai</span>
  </div>
);

const KekaLogo = () => (
  <div className="flex items-center gap-1.5 text-sm font-extrabold text-[#F25F22]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#F25F22" />
      <text x="6" y="15" fontFamily="Arial Black, sans-serif" fontSize="12" fontWeight="bold" fill="white">K</text>
    </svg>
    <span>Keka</span>
  </div>
);

/* ─────────────── Dropdown Arrow Helper ─────────────── */
const DropArrow = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500">
    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
);

/* ─────────────── Custom Select Field ─────────────── */
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

/* ─────────────── Lead Application Form ─────────────── */
const ApplyForm = ({ data, onChange, onPhoneChange, onSubmit, submitted, loading, error }) => (

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
        {error && <div className="mb-4 p-2 bg-red-50 text-red-600 font-semibold rounded border border-red-200 text-sm">{error}</div>}

        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Name*</label>
            <input type="text" name="name" value={data.name} onChange={onChange} placeholder="Enter your name" required
              className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Email ID*</label>
            <input type="email" name="email" value={data.email} onChange={onChange} placeholder="Enter your email" required
              className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Phone Number*</label>
            <div className="flex gap-2">
              <div className="relative min-w-[88px]">
                <select name="countryCode" value={data.countryCode} onChange={onChange}
                  className="w-full h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-sm font-bold focus:outline-none cursor-pointer appearance-none pr-6">
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+971">AE +971</option>
                </select>
                <DropArrow/>
              </div>
              <input type="tel" name="phone" value={data.phone} onChange={onPhoneChange} placeholder="Enter phone number" required
                className="flex-1 h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400"/>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Educational Qualification*</label>
            <SelectField name="education" value={data.education} onChange={onChange} placeholder="Education Qualification">
              <option>Under Graduate (Engineering)</option>
              <option>Under Graduate (Arts/Science/Commerce)</option>
              <option>Post Graduate</option><option>PhD / Research Scholar</option>
            </SelectField>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Current Profile*</label>
            <SelectField name="profile" value={data.profile} onChange={onChange} placeholder="Select">
              <option>College Student (Final Year)</option>
              <option>College Student (1st/2nd/3rd Year)</option>
              <option>Working Professional (IT)</option>
              <option>Working Professional (Non-IT)</option>
              <option>Job Seeker / Unemployed</option>
              <option>Freelancer / Self-employed</option>
            </SelectField>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Year of Graduation*</label>
            <SelectField name="graduationYear" value={data.graduationYear} onChange={onChange} placeholder="Year of Graduation">
              {Array.from({ length: 15 }, (_, i) => 2029 - i).map((y) => <option key={y}>{y}</option>)}
              <option>Before 2015</option>
            </SelectField>
          </div>
          <div>
            <label className="mb-1 block text-[14px] font-bold text-gray-600">Speaking Language*</label>
            <SelectField name="language" value={data.language} onChange={onChange} placeholder="Select">
              <option>Tamil</option><option>English</option><option>Telugu</option>
              <option>Kannada</option><option>Hindi</option><option>Malayalam</option><option>Other</option>
            </SelectField>
          </div>
          <div className="text-center">
            <button type="button" className="text-xs font-bold text-green-700 hover:underline">
              Have a Coupon code? <span className="underline">Redeem</span>
            </button>
          </div>
          <button type="submit" disabled={loading}
            className="w-full h-12 btn-glossy-green font-extrabold text-base rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-50">
            {loading ? "Submitting..." : "Apply Now"}

          </button>
          <p className="text-[10px] text-gray-400 leading-snug text-center">
            By registering, I agree to be contacted via phone, SMS, or email for offers &amp; products, even if I am on a DNC/NDNC list.
          </p>
        </form>
      </>
    )}
  </div>
);

/* ─────────────── FAQ Accordion Section ─────────────── */
function FaqSection({ faqs, title }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-500 font-medium">
            Everything you need to know about the Jawa EDTECh {title} Program.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? "border-green-200 bg-green-50/40" : "border-gray-100 bg-gray-50/60 hover:border-gray-200"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className={`text-[15px] font-semibold leading-snug ${isOpen ? "text-green-800" : "text-gray-800"}`}>
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors ${
                    isOpen ? "bg-guvi-green border-guvi-green text-black" : "border-gray-300 text-gray-500"
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[14px] leading-relaxed text-gray-600 font-medium">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Course Preview Tabs Component ─────────────── */
function CoursePreviewTabs({ previewContent }) {
  const [activeTab, setActiveTab] = useState("learn");

  const tabs = [
    { id: "learn", label: "What You'll Learn", icon: BookOpen, content: previewContent.learningOutcomes, type: "list" },
    { id: "master", label: "What You'll Master", icon: Award, content: previewContent.whatYoullMaster, type: "tags" },
    { id: "careers", label: "Career Roles", icon: Briefcase, content: previewContent.careerOpportunities, type: "tags" },
    { id: "why", label: "Why Choose Us", icon: Sparkles, content: previewContent.whyChoose, type: "bullets" }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(25,217,80,0.06)]">
      {/* Tab Navigation */}
      <div style={{ background: "linear-gradient(135deg,#f0fdf4,#ffffff)" }} className="flex flex-wrap gap-1.5 border-b border-gray-100 p-4">
        {tabs.map(tab => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-green-600 text-white shadow-md scale-[1.02]"
                  : "text-gray-500 hover:text-green-700 hover:bg-green-50/80"
              }`}
            >
              <IconComponent size={15} className={isActive ? "text-white" : "text-green-500"} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-8 min-h-[220px]">
        {currentTab.id === "learn" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTab.content.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-300 hover:shadow-[0_4px_16px_rgba(22,163,74,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <CheckCircle2 size={16} className="text-green-600 stroke-[2.5]" />
                </span>
                <span className="text-sm font-semibold text-gray-700 leading-relaxed mt-0.5">{item}</span>
              </div>
            ))}
          </div>
        )}

        {currentTab.id === "master" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTab.content.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-300 hover:shadow-[0_4px_16px_rgba(22,163,74,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Award size={16} className="text-green-600 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-gray-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        )}

        {currentTab.id === "careers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTab.content.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-300 hover:shadow-[0_4px_16px_rgba(22,163,74,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Briefcase size={16} className="text-green-600 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-gray-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        )}

        {currentTab.id === "why" && (
          <div className="space-y-3.5">
            {currentTab.content.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-green-300 hover:shadow-[0_4px_20px_rgba(22,163,74,0.04)] transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Sparkles size={16} className="text-green-600 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────── Success Stories Testimonial Slider ─────────────── */
function TestimonialsSection({ testimonials }) {
  const [current, setCurrent] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-3">
            ❤️ Wall of Love
          </span>
          <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">
            Success Stories
          </h2>
          <p className="mt-3 text-gray-500 font-medium max-w-2xl mx-auto">
            Read stories of transformation and career success from our program graduates.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Card container */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-xl font-bold text-green-700">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-gray-900">{testimonials[current].name}</h4>
                <p className="text-xs font-bold text-gray-500 uppercase mt-0.5">
                  {testimonials[current].role} at {testimonials[current].company}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 text-base md:text-lg font-medium italic leading-relaxed">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
          </div>

          {/* Slider controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer text-lg font-bold">
              &larr;
            </button>
            <span className="text-sm font-bold text-gray-500">
              <span className="text-gray-900">{current + 1}</span> / {testimonials.length}
            </span>
            <button onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer text-lg font-bold">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Hiring Companies Scrolling Carousel ─────────────── */
function HiringCompanies() {
  const companies = [
    <FreshworksLogo />, <OneDPOLogo />, <PayPalLogo />, <SQCESSLogo />, 
    <TataCommunicationsLogo />, <ScapicLogo />, <ChargebeeLogo />, <FlipkartLogo />, 
    <ZohoRecruitLogo />, <ZohoPeopleLogo />, <LinkedInHiringLogo />, <NaukriHiringLogo />, 
    <QuickRecruitLogo />, <GreytHRLogo />, <DarwinboxLogo />, <EightfoldAILogo />, <KekaLogo />
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">
          Our Hiring Companies
        </h2>
      </div>

      {/* Scrolling Carousel Row */}
      <div className="relative w-full overflow-hidden flex items-center bg-gray-50/50 py-6 border-y border-gray-100/80">
        {/* Scrolling wrapper */}
        <div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full">
          {/* First set of logos */}
          {companies.map((logo, idx) => (
            <div key={idx} className="inline-flex items-center justify-center bg-white border border-gray-100/60 rounded-2xl px-6 py-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] select-none">
              {logo}
            </div>
          ))}
          {/* Duplicated set of logos for infinite effect */}
          {companies.map((logo, idx) => (
            <div key={`dup-${idx}`} className="inline-flex items-center justify-center bg-white border border-gray-100/60 rounded-2xl px-6 py-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] select-none">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Style injection for keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}/* ─────────────── Course Overview Card Component ─────────────── */
/* ─────────────── Course Preview Section Component ─────────────── */
function CoursePreviewSection({ config }) {
  const description = config.previewContent.description;
  const sentences = description.split(/(?<=[.?!])\s+/).map(s => s.trim()).filter(Boolean);

  if (sentences.length === 0) return null;

  // Detect hook sentences (intro questions or bold statements)
  let hookSentences = [];
  if (sentences[0].endsWith("?") || (sentences[1] && (sentences[1].endsWith("?") || sentences[1].includes("!")))) {
    if (sentences[0].endsWith("?")) {
      hookSentences.push(sentences[0]);
      if (sentences[1] && (sentences[1].includes("!") || sentences[1].length < 35)) {
        hookSentences.push(sentences[1]);
      }
    } else {
      hookSentences.push(sentences[0]);
    }
  } else {
    hookSentences.push(sentences[0]);
  }

  const remainingSentences = sentences.slice(hookSentences.length);
  
  // Split remainder into two parts
  const halfLength = Math.ceil(remainingSentences.length / 2);
  const blockASentences = remainingSentences.slice(0, halfLength);
  const blockBSentences = remainingSentences.slice(halfLength);

  const hookText = hookSentences.join(" ");
  const blockAText = blockASentences.join(" ");
  const blockBText = blockBSentences.join(" ");

  // Highlight key terms case-insensitively
  const highlightKeyWords = (text) => {
    const keywords = [
      "real-world HR responsibilities",
      "best talent",
      "employee engagement",
      "performance management",
      "Payroll to develop the organization",
      "hands-on projects",
      "real-time case studies",
      "succeed in today's job market",
      "talent acquisition",
      "find, screen, interview and hire",
      "ways to recruit",
      "find candidates",
      "screen them",
      "use the tools",
      "Full Stack Developers",
      "web applications",
      "front end and the back end",
      "projects and assignments",
      "get help from experts",
      "software development",
      "identify defects",
      "improve software quality",
      "real-time testing projects",
      "software quality assurance",
      "problem-solving and programming skills",
      "technical interviews",
      "coding practice",
      "logical thinking",
      "algorithm optimization",
      "interview preparation",
      "Jawa EDTECh",
      "Jawa EDTECh"
    ];

    let highlighted = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
      highlighted = highlighted.replace(regex, (match) => {
        return `<strong class="text-green-700 font-extrabold">${match}</strong>`;
      });
    });

    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <div className="flex flex-col gap-6 w-full select-text">
      
      {/* 1. Quote-style / Hook Callout Container (Full Width) */}
      <div className="relative pl-8 py-4 border-l-4 border-green-500 bg-gradient-to-r from-green-50/50 via-green-50/10 to-transparent rounded-r-2xl shadow-[inset_1px_1px_2px_rgba(25,217,80,0.03)] group">
        <span className="absolute -left-4 -top-6 text-[90px] text-green-200/40 font-serif select-none pointer-events-none leading-none">“</span>
        <p className="text-lg md:text-xl font-extrabold text-green-900 leading-relaxed italic relative z-10">
          {hookText}
        </p>
      </div>

      {/* 2. Premium Content Containers in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-2">
        
        {/* Block A Card */}
        <div className="bg-gradient-to-br from-white to-gray-50/30 border-l-4 border-l-green-600/30 border border-gray-150 rounded-r-2xl rounded-l-md p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-l-green-600 hover:shadow-[0_8px_30px_rgba(25,217,80,0.03)] hover:border-gray-200 transition-all duration-300 relative flex flex-col justify-between">
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-green-400" />
          <p className="text-[15px] sm:text-base leading-relaxed text-gray-650 font-semibold">
            {highlightKeyWords(blockAText)}
          </p>
        </div>

        {/* Block B Card */}
        {blockBText && (
          <div className="bg-gradient-to-br from-white to-gray-50/30 border-l-4 border-l-green-600/30 border border-gray-150 rounded-r-2xl rounded-l-md p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-l-green-600 hover:shadow-[0_8px_30px_rgba(25,217,80,0.03)] hover:border-gray-200 transition-all duration-300 relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-[15px] sm:text-base leading-relaxed text-gray-650 font-semibold">
              {highlightKeyWords(blockBText)}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

/* ─────────────── CORE COURSE PAGE COMPONENT ─────────────── */
export default function CoursePage({ courseKey, isInternship }) {
  const config = coursesConfig[courseKey];

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white border rounded-2xl shadow-md max-w-sm">
          <h2 className="text-xl font-bold text-red-600">Course Not Found</h2>
          <p className="text-gray-500 mt-2">The requested course configuration could not be loaded.</p>
          <a href="#home" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold">Back to Home</a>
        </div>
      </div>
    );
  }

  const empty = { name: "", email: "", countryCode: "+91", phone: "", education: "", profile: "", graduationYear: "", language: "" };
  const [formData, setFormData] = useState(empty);
  const [modalForm, setModalForm] = useState(empty);
  const [pageOk, setPageOk] = useState(false);
  const [modalOk, setModalOk] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");


  useEffect(() => { window.scrollTo(0, 0); }, [courseKey]);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  const hc = (setter) => (e) => { const { name, value } = e.target; setter(p => ({ ...p, [name]: value })); };
  const hp = (setter) => (e) => setter(p => ({ ...p, phone: e.target.value.replace(/\D/g, "") }));

  const submitForm = async (data, isModal) => {
    setServerError("");
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        education: data.education,
        graduationYear: parseInt(data.graduationYear) || undefined,
        language: data.language,
        courseKey: courseKey
      };

      const res = await fetch(`${API_BASE_URL}/api/internship/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      const resData = await res.json();
      if (!res.ok) throw new Error(resData.detail || "Failed to submit application");

      if (isModal) {
        setModalOk(true);
        setTimeout(() => { setModalOk(false); setShowModal(false); setModalForm(empty); }, 4000);
      } else {
        setPageOk(true);
        setTimeout(() => { setPageOk(false); setFormData(empty); }, 4000);
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitPage = (e) => {
    e.preventDefault(); 
    submitForm(formData, false);
  };
  const submitModal = (e) => {
    e.preventDefault();
    submitForm(modalForm, true);
  };

  const mod = config.modules[activeModule] || config.modules[0];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {!isInternship && <Header />}
      <main>

        {/* ── HERO SECTION ── */}
        {!isInternship && (
          <section className="relative overflow-hidden"
          style={{ background: "linear-gradient(175deg,#f0fff4 0%,#f4fff7 40%,#ffffff 100%)" }}>
          
          <style>{`
            @keyframes badgeGlowPulse {
              0%, 100% {
                box-shadow: 0 0 8px rgba(34, 197, 94, 0.2);
                border-color: rgba(187, 247, 208, 0.8);
              }
              50% {
                box-shadow: 0 0 18px rgba(34, 197, 94, 0.6);
                border-color: rgba(34, 197, 94, 0.6);
              }
            }
          `}</style>

          <div style={{
            position: "absolute", left: "-6%", top: "30%", width: 320, height: 400,
            background: "radial-gradient(ellipse at center,rgba(25,217,80,0.25) 0%,transparent 70%)",
            borderRadius: "50%", pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute", right: "-6%", top: "30%", width: 320, height: 400,
            background: "radial-gradient(ellipse at center,rgba(25,217,80,0.25) 0%,transparent 70%)",
            borderRadius: "50%", pointerEvents: "none"
          }} />

          <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border text-green-700 text-xs font-extrabold uppercase tracking-widest mb-5"
              style={{
                animation: "badgeGlowPulse 3.2s infinite ease-in-out",
                borderColor: "rgba(187, 247, 208, 0.8)"
              }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Jawa EDTECh Certified
            </span>
            <h1 className="text-[28px] sm:text-[40px] md:text-[50px] font-extrabold leading-tight tracking-tight text-gray-900 max-w-[900px]">
              {config.heroTitle}
            </h1>
            <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-gray-500 max-w-[720px] font-medium">
              {config.heroDesc}
            </p>
            <div className="mt-8 mb-4">
              <button id="hero-enroll-btn" onClick={() => setShowModal(true)}
                className="inline-flex h-[52px] min-w-[200px] items-center justify-center rounded-lg btn-glossy-green text-[17px] font-extrabold cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>

          {/* ── Hero Image + Feature Cards Row ── */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">

              {/* ── Left Feature Cards ── */}
              <div className="flex flex-col gap-5 w-full md:w-[220px] lg:w-[250px] shrink-0">
                {/* Card 1 */}
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <BookOpen size={17} className="text-white stroke-[2.5]" />
                  </div>
                  <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">100% Practical Training</h4>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Learn through hands-on assignments, projects, and real-world scenarios.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <Users size={17} className="text-white stroke-[2.5]" />
                  </div>
                  <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">Expert Mentor Guidance</h4>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Get support from experienced industry professionals throughout the program.</p>
                </div>
              </div>

              {/* ── Center: Student Image (clean, no overlays) ── */}
              <div className="relative flex-1 flex justify-center items-end min-w-0 md:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]">
                {/* Subtle glow behind the image */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 90%,rgba(25,217,80,0.12) 0%,transparent 70%)" }} />
                <img
                  src={config.studentsImg}
                  alt={`Jawa EDTECh ${config.title} Students`}
                  className="relative w-full block object-contain object-bottom drop-shadow-xl"
                  style={{ maxHeight: 520, minHeight: 280 }}
                />
              </div>

              {/* ── Right Feature Cards ── */}
              <div className="flex flex-col gap-5 w-full md:w-[220px] lg:w-[250px] shrink-0">
                {/* Card 3 */}
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <Laptop size={17} className="text-white stroke-[2.5]" />
                  </div>
                  <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">Portfolio &amp; Project Building</h4>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Build industry-level projects and create a job-ready portfolio.</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                    <Award size={17} className="text-white stroke-[2.5]" />
                  </div>
                  <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">Career Support &amp; Certification</h4>
                  <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Receive interview preparation, resume guidance, and course certification.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        )}

        {/* ── 1. GET CAREER-READY PERKS SECTION ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 tracking-tight">
                Get Career-Ready with These Powerful Perks!
              </h2>
              <p className="mt-3 text-gray-500 font-semibold text-base">
                Discover everything you need to build, grow, and get hired as a {config.title} professional.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mentors */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight: 220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Mentors</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Live interactive classes, hands-on practice sessions &amp; expert-led doubt clarification.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4ade80,#16a34a)", boxShadow: "0 8px 24px rgba(22,163,74,0.35)" }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M14 12L6 20L14 28" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M26 12L34 20L26 28" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M23 8L17 32" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Unlimited Practice */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight: 220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Unlimited Practice</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Sharpen your skills with multiple programming problems or real-world practice case studies.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <circle cx="36" cy="36" r="28" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="6 4" />
                        <circle cx="36" cy="36" r="20" fill="#dcfce7" />
                        <path d="M25 36L32 43L48 27" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </article>
                {/* Career Launch */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight: 220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Career Launch Support</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Gain placement guidance, resume reviews, and job prep to accelerate your career.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                        <circle cx="36" cy="36" r="30" stroke="#16a34a" strokeWidth="2.5" fill="white" />
                        <circle cx="36" cy="36" r="21" stroke="#16a34a" strokeWidth="2" fill="white" />
                        <circle cx="36" cy="36" r="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                        <circle cx="36" cy="36" r="5" fill="#16a34a" />
                        <path d="M52 20L38 34" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M52 20L46 21.5M52 20L50.5 26" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </article>
                {/* Real-Time Projects */}
                <article className="flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow" style={{ minHeight: 220 }}>
                  <h3 className="text-[17px] font-extrabold text-gray-900">Real-Time Project Work</h3>
                  <p className="mt-2 text-[13px] font-medium text-gray-500 leading-relaxed">Work on extensive hours of real-world, industry-relevant projects to build a job-winning portfolio.</p>
                  <div className="mt-auto pt-5 flex justify-center">
                    <div className="w-full max-w-[170px] h-[110px] bg-gradient-to-br from-[#f0fff4] to-[#dcfce7] rounded-2xl border border-green-100 flex items-center justify-center">
                      <svg width="96" height="68" viewBox="0 0 96 68" fill="none">
                        <rect x="2" y="2" width="92" height="56" rx="6" fill="#0f172a" />
                        <rect x="10" y="10" width="76" height="40" rx="3" fill="#1e293b" />
                        <circle cx="16" cy="16" r="3" fill="#ef4444" />
                        <circle cx="24" cy="16" r="3" fill="#eab308" />
                        <circle cx="32" cy="16" r="3" fill="#22c55e" />
                        <path d="M16 28L23 34L16 40" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="27" y="31" width="32" height="3" rx="1.5" fill="#64748b" />
                        <rect x="38" y="58" width="20" height="5" rx="2" fill="#64748b" />
                        <rect x="30" y="63" width="36" height="3" rx="1.5" fill="#475569" />
                      </svg>
                    </div>
                  </div>
                </article>
              </div>
              <ApplyForm data={formData} onChange={hc(setFormData)} onPhoneChange={hp(setFormData)} onSubmit={submitPage} submitted={pageOk} loading={loading} error={serverError} />

            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-b border-gray-100" id="preview-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-extrabold uppercase tracking-wider mb-4">
                <Search size={12} className="text-green-600" />
                Course Preview &amp; Insights
              </span>
              <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 tracking-tight leading-tight">
                {config.previewContent.tagline}
              </h2>
            </div>

            <div className="flex flex-col gap-10">
              
              {/* Course Preview Content */}
              <CoursePreviewSection config={config} />

              {/* Interactive Tabs */}
              <div className="w-full">
                <CoursePreviewTabs previewContent={config.previewContent} />
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. COURSE SYLLABUS SECTION ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#f4fff7" }} id="syllabus-section">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-[26px] md:text-[36px] font-extrabold text-gray-900 leading-tight">
                Master {config.title} with Our<br className="hidden sm:block" /> Industry-Aligned Curriculum
              </h2>
              <p className="mt-3 text-gray-500 font-medium max-w-2xl mx-auto">
                Explore each phase of the course with structured, expert-led modules.
              </p>
            </div>

            {/* Outer card */}
            <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(25,217,80,0.06)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]" style={{ minHeight: 480 }}>

                {/* Left: module buttons */}
                <div className="border-r border-gray-100 py-6 px-4 flex flex-col gap-2 bg-white overflow-y-auto max-h-[500px] md:max-h-none">
                  {config.modules.map((m, idx) => {
                    const isActive = activeModule === idx;
                    return (
                      <button key={m.id} onClick={() => setActiveModule(idx)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                          isActive
                            ? "border-2 border-green-500 text-green-700 font-bold bg-green-50/60"
                            : "border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600 hover:bg-green-50/30"
                        }`}>
                        Module {m.id}
                      </button>
                    );
                  })}
                </div>

                {/* Right: module details */}
                <div className="p-8 flex flex-col">
                  <h3 className="text-[19px] font-extrabold text-gray-900 mb-6">
                    {mod.title}
                  </h3>

                  <div className="flex flex-col gap-4 flex-1">
                    {mod.points.map((pt) => (
                      <div key={pt.label} className="flex items-start gap-3">
                        {/* Green diamond bullet */}
                        <span className="mt-0.5 flex-shrink-0 text-green-500" style={{ fontSize: 18, lineHeight: 1 }}>✦</span>
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
                      className="px-7 py-3 rounded-xl btn-glossy-green font-extrabold text-sm cursor-pointer">
                      Download Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. TOOLS YOU'LL LEARN (CLEAN LIGHT DESIGN WITH SQUARE CARDS) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">
                Build Real-World Skills with {config.title} Tools
              </h2>
              <p className="mt-3 text-gray-500 font-medium">
                Get hands-on experience with industry-standard tools to solidify your learning!
              </p>
            </div>

            {/* Clean square/rounded-square cards layout with original logos */}
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {config.tools.map(({ name, logoKey }) => (
                <div key={name} className="flex flex-col items-center justify-center bg-white border border-gray-150 rounded-2xl p-5 w-[140px] h-[140px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-green-200 transition-all duration-300 group cursor-default">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 transition-transform duration-300 group-hover:scale-110 [&_img]:!w-[72px] [&_img]:!h-[72px] [&_svg]:!w-[72px] [&_svg]:!h-[72px]">
                    {LOGO_MAP[logoKey] || <span className="text-xs font-bold text-gray-400">{name.substring(0, 3)}</span>}
                  </div>
                  <span className="text-xs font-bold text-gray-700 text-center leading-tight transition-colors group-hover:text-green-600">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. OUR HIRING COMPANIES CAROUSEL ── */}
        <HiringCompanies />

        {/* ── 6. SUCCESS STORIES ── */}
        <TestimonialsSection testimonials={config.testimonials} />

        {/* ── 7. PRICING ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[26px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">
                Our Value-Packed Pricing
              </h2>
              <p className="mt-3 text-gray-500 font-medium">
                Invest in your career without breaking the bank.
              </p>
            </div>

            <div className={`grid grid-cols-1 ${config.hasInternshipCard ? "md:grid-cols-2" : "max-w-md mx-auto"} gap-6 mb-6`}>
              {/* Card 1: Main Course */}
              <div className="bg-white rounded-3xl border border-[#e8e6ff] p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
                  backgroundSize: "18px 18px"
                }} />
                <div className="relative z-10">
                  <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">{config.title} Course</p>
                  <div className="flex items-baseline gap-3 mt-2 mb-1">
                    <span className="text-[40px] font-extrabold text-gray-900 leading-none">{config.price}</span>
                    <span className="text-xl font-semibold text-gray-400 line-through">{config.strikethroughPrice}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mb-6">Inclusive of GST</p>

                  <p className="text-sm font-extrabold text-gray-900 mb-4">Features</p>
                  <ul className="space-y-3 mb-8">
                    {config.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10">
                  <button onClick={() => setShowModal(true)}
                    className="w-full h-12 rounded-xl btn-glossy-green font-extrabold text-base cursor-pointer">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Card 2: Internship Course (if exists) */}
              {config.hasInternshipCard && (
                <div className="bg-white rounded-3xl border border-[#c9f2cf] p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: "radial-gradient(circle, #19d950 1px, transparent 1px)",
                    backgroundSize: "18px 18px"
                  }} />
                  <div className="relative z-10">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">{config.title} Internship</p>
                    <div className="flex items-baseline gap-3 mt-2 mb-1">
                      <span className="text-[40px] font-extrabold text-gray-900 leading-none">{config.internshipPrice}</span>
                      <span className="text-xl font-semibold text-gray-400 line-through">{config.internshipStrikethrough}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium mb-6">Inclusive of GST</p>

                    <p className="text-sm font-extrabold text-gray-900 mb-4">Features</p>
                    <ul className="space-y-3 mb-8">
                      {config.internshipFeatures.map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7L8 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10">
                    <button onClick={() => setShowModal(true)}
                      className="w-full h-12 rounded-xl btn-glossy-green font-extrabold text-base cursor-pointer">
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Internship note */}
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
              <span className="text-green-500 mt-0.5 flex-shrink-0 text-lg">ℹ️</span>
              <p className="text-sm font-semibold text-green-800">
                For the 1-month internship program, please{" "}
                <button onClick={() => setShowModal(true)} className="underline font-bold hover:text-green-600 transition cursor-pointer">
                  contact us
                </button>{" "}
                for more details.
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <FaqSection faqs={config.faqs} title={config.title} />

      </main>

      {/* ── 9. ENROLL / APPLY POPUP MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.52)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full mx-4 relative overflow-y-auto shadow-2xl" style={{ maxHeight: "95vh" }}>
            <button onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition cursor-pointer">
              <X size={18} />
            </button>
            {modalOk ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="text-green-500 mb-4 animate-bounce" size={64} />
                <h3 className="text-2xl font-extrabold text-green-700 mb-3">Offer Locked!</h3>
                <p className="text-gray-700 font-bold text-base mb-2">Thank you, {modalForm.name || "there"}!</p>
                <p className="text-gray-400 text-sm max-w-xs">Our career counselor will get in touch shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-extrabold text-gray-900 text-center mb-6">Apply now to Unlock Offer!</h3>
                {serverError && <div className="mt-4 p-3 bg-red-50 text-red-600 font-semibold rounded-md border border-red-200 text-sm">{serverError}</div>}

                <form onSubmit={submitModal} className="mt-6 space-y-4">

                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Name*</label>
                    <input type="text" name="name" value={modalForm.name} onChange={hc(setModalForm)} placeholder="Enter your name" required
                      className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Email ID*</label>
                    <input type="email" name="email" value={modalForm.email} onChange={hc(setModalForm)} placeholder="Enter your email" required
                      className="w-full h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Phone Number*</label>
                    <div className="flex gap-2">
                      <div className="relative min-w-[88px]">
                        <select name="countryCode" value={modalForm.countryCode} onChange={hc(setModalForm)}
                          className="w-full h-10 px-3 border border-gray-300 rounded-md bg-gray-50 text-sm font-bold focus:outline-none cursor-pointer appearance-none pr-6">
                          <option value="+91">IN +91</option><option value="+1">US +1</option>
                          <option value="+44">UK +44</option><option value="+971">AE +971</option>
                        </select>
                        <DropArrow />
                      </div>
                      <input type="tel" name="phone" value={modalForm.phone} onChange={hp(setModalForm)} placeholder="Enter phone number" required
                        className="flex-1 h-10 px-3 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400/40 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Educational Qualification*</label>
                    <SelectField name="education" value={modalForm.education} onChange={hc(setModalForm)} placeholder="Education Qualification">
                      <option>Under Graduate (Engineering)</option>
                      <option>Under Graduate (Arts/Science/Commerce)</option>
                      <option>Post Graduate</option><option>PhD / Research Scholar</option>
                    </SelectField>
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Current Profile*</label>
                    <SelectField name="profile" value={modalForm.profile} onChange={hc(setModalForm)} placeholder="Select">
                      <option>College Student (Final Year)</option>
                      <option>College Student (1st/2nd/3rd Year)</option>
                      <option>Working Professional (IT)</option>
                      <option>Working Professional (Non-IT)</option>
                      <option>Job Seeker / Unemployed</option>
                      <option>Freelancer / Self-employed</option>
                    </SelectField>
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Year of Graduation*</label>
                    <SelectField name="graduationYear" value={modalForm.graduationYear} onChange={hc(setModalForm)} placeholder="Year of Graduation">
                      {Array.from({ length: 15 }, (_, i) => 2029 - i).map(y => <option key={y}>{y}</option>)}
                      <option>Before 2015</option>
                    </SelectField>
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] font-bold text-gray-600">Speaking Language*</label>
                    <SelectField name="language" value={modalForm.language} onChange={hc(setModalForm)} placeholder="Select">
                      <option>Tamil</option><option>English</option><option>Telugu</option>
                      <option>Kannada</option><option>Hindi</option><option>Malayalam</option><option>Other</option>
                    </SelectField>
                  </div>
                  <div className="text-center">
                    <button type="button" className="text-xs font-bold text-green-700 hover:underline">
                      Have a Coupon code? <span className="underline">Redeem</span>
                    </button>
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full h-12 btn-glossy-green font-extrabold text-base rounded-xl flex items-center justify-center cursor-pointer mt-6 disabled:opacity-50">
                    {loading ? "Submitting..." : "Submit Application"}

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

      {!isInternship && <Footer />}
    </div>
  );
}
