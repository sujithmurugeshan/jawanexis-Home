import { useEffect } from "react";
import { Scale, Shield, FileText, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";

function TermsConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-guvi-ink relative overflow-hidden font-sans">
      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-guvi-soft/70 to-white py-12 border-b border-guvi-line/30">
          <div className="shell text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
              <Scale size={14} /> Legal Center
            </span>
            <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-black sm:text-[44px]">
              Terms &amp; Conditions
            </h1>
            <p className="mx-auto mt-3 max-w-[760px] text-[15px] font-medium leading-relaxed text-guvi-muted">
              Please read these terms carefully before enrolling in our training programs.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION WITH SIDEBAR */}
        <section className="py-12 bg-white">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* STICKY SIDEBAR */}
              <aside className="lg:col-span-3 sticky top-20 bg-white border border-guvi-line/50 rounded-xl p-4 shadow-sm">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-3">
                  Policies &amp; Legal
                </h2>
                <nav className="flex flex-col gap-1">
                  <a
                    href="#terms-and-conditions"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold bg-guvi-mint text-guvi-deepGreen border-l-4 border-guvi-green transition-all"
                  >
                    <Scale size={16} />
                    <span>Terms &amp; Conditions</span>
                  </a>
                  <a
                    href="#privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-guvi-muted hover:bg-slate-50 hover:text-black transition-all"
                  >
                    <Shield size={16} />
                    <span>Privacy Policy</span>
                  </a>
                  <a
                    href="#refund-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-guvi-muted hover:bg-slate-50 hover:text-black transition-all"
                  >
                    <FileText size={16} />
                    <span>Refund Policy</span>
                  </a>
                </nav>
              </aside>

              {/* MAIN TEXT CONTAINER */}
              <article className="lg:col-span-9 bg-white border border-guvi-line/60 rounded-xl p-6 sm:p-10 shadow-sm">
                <div className="prose prose-slate max-w-none">
                  <p className="text-[16px] leading-7 font-medium text-guvi-muted mb-8">
                    Welcome to JAWA EDTECH. By accessing our website and enrolling in our training programs, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
                  </p>

                  {/* Section 1 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">1</span>
                      Acceptance of Terms
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      By using our website, accessing our services, or registering for any training courses, you confirm that you accept and agree to comply with these Terms &amp; Conditions in full. If you do not agree, you must not use our website or services.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">2</span>
                      Course Enrollment
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      Enrollment in any training program at JAWA EDTECH is confirmed only after:
                    </p>
                    <ul className="mt-3 space-y-2.5 pl-5">
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Successful transaction/payment of the prescribed course fee.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Verification of registration details and documentation by the JAWA EDTECH admissions team.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">3</span>
                      Student Responsibilities
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      To ensure a productive learning environment, all enrolled students agree to:
                    </p>
                    <ul className="space-y-2.5 pl-5">
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Provide accurate, complete, and current information during registration.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Attend live classes, training sessions, and mentor reviews regularly and on time.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Complete assignments, assessments, and capstone projects honestly and independently.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span>Maintain respectful, professional behavior toward trainers, mentors, staff, and fellow learners.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">4</span>
                      Intellectual Property Rights
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      All course materials, training content, presentations, source codes, videos, assessments, and associated resources are the exclusive intellectual property of JAWA EDTECH.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
                      <p className="text-[14px] leading-relaxed font-semibold text-amber-800 flex items-center gap-2">
                        <AlertTriangle size={18} className="shrink-0" /> Students are strictly prohibited from:
                      </p>
                      <ul className="mt-2 space-y-1.5 pl-5 text-[14px] leading-relaxed font-medium text-amber-700 list-disc">
                        <li>Copying, reproducing, translating, or distributing course materials.</li>
                        <li>Recording live training sessions or webinars without prior written permission.</li>
                        <li>Sharing login credentials or course-sharing learning resources with third parties.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">5</span>
                      Placement Support Disclaimer
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      JAWA EDTECH offers robust career support, including mock interviews, resume optimization, LinkedIn profile reviews, and placement assistance through our network of hiring partners.
                    </p>
                    <p className="mt-3 text-[15px] leading-7 font-semibold text-black bg-guvi-mint/50 border border-guvi-line/45 rounded-lg p-4">
                      ⚠️ Note: Placement opportunities depend entirely on individual performance, skill proficiency, attendance, market conditions, and specific employer standards. JAWA EDTECH does not guarantee jobs, salary packages, or hiring outcomes.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">6</span>
                      Website &amp; Platform Usage
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      Users accessing our website and educational platform agree to utilize it solely for legitimate learning purposes and must not:
                    </p>
                    <ul className="space-y-2.5 pl-5">
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" />
                        <span>Attempt unauthorized access to our servers, databases, or client accounts.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" />
                        <span>Use the website or services for unlawful commercial activities or advertising.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" />
                        <span>Upload malicious software, virus programs, or harmful content of any type.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 7 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">7</span>
                      Limitation of Liability
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      JAWA EDTECH, its founders, directors, employees, and trainers shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of (or inability to use) our website, services, training courses, or study materials.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">8</span>
                      Changes to Services &amp; Terms
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      We reserve the right to modify course content, schedules, trainers, batch timings, fees, or overall service packages when necessary. We also reserve the right to update these Terms &amp; Conditions without prior notice.
                    </p>
                  </div>

                  {/* Section 9 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">9</span>
                      Governing Law
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of India.
                    </p>
                  </div>

                  {/* Section 10 */}
                  <div className="mb-2">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">10</span>
                      Contact Information
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      If you have any questions or require clarifications regarding these Terms &amp; Conditions, please reach out to us at:
                    </p>
                    <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-5">
                      <p className="text-[15px] font-bold text-black mb-1">JAWA EDTECH</p>
                      <p className="text-[14px] font-medium text-guvi-muted">
                        Email: <a href="mailto:hr@jawaedtech.com" className="text-guvi-deepGreen underline font-semibold">hr@jawaedtech.com</a>
                      </p>
                      <p className="text-[14px] font-medium text-guvi-muted">
                        Phone: <a href="tel:+919790631286" className="text-guvi-deepGreen underline font-semibold">+91 97906 31286</a>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default TermsConditionsPage;
