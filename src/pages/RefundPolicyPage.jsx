import { useEffect } from "react";
import { Scale, Shield, FileText, CheckCircle2, AlertTriangle, Calendar, RefreshCw, XCircle } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";

function RefundPolicyPage() {
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
              <FileText size={14} /> Fees &amp; Refunds
            </span>
            <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-black sm:text-[44px]">
              Refund Policy
            </h1>
            <p className="mx-auto mt-3 max-w-[760px] text-[15px] font-medium leading-relaxed text-guvi-muted">
              Please read our refund terms carefully before course subscription.
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-guvi-muted hover:bg-slate-50 hover:text-black transition-all"
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold bg-guvi-mint text-guvi-deepGreen border-l-4 border-guvi-green transition-all"
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
                    At JAWA EDTECH, we strive to provide high-quality training programs, expert mentors, and a rich learning experience. Please read our refund policy carefully before enrolling in any of our courses.
                  </p>

                  {/* Section 1 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">1</span>
                      Course Enrollment Agreement
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      By registering and enrolling in a training course offered by JAWA EDTECH, you acknowledge that you have read, understood, and agreed to be bound by the terms outlined in this Refund Policy.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">2</span>
                      Refund Eligibility
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      Refund requests will be considered only under the following limited circumstances:
                    </p>
                    <ul className="space-y-3.5 pl-5">
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={18} className="text-guvi-green mt-0.5 shrink-0" />
                        <span><strong>Duplicate Payment:</strong> Where a student makes multiple payments for the same course admission by mistake.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={18} className="text-guvi-green mt-0.5 shrink-0" />
                        <span><strong>Course Cancellation:</strong> In case a scheduled course or batch is canceled entirely by JAWA EDTECH.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={18} className="text-guvi-green mt-0.5 shrink-0" />
                        <span><strong>Technical Issues:</strong> Unresolved system-level or administrative issues on our learning portal that prevent course access, provided they have been reported and cannot be resolved by our tech team within a reasonable timeframe.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">3</span>
                      Non-Refundable Situations
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      Refunds will NOT be issued under the following circumstances:
                    </p>
                    <ul className="space-y-3.5 pl-5">
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span>The student has attended classes, accessed training videos, or downloaded course materials.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span>The student decides to discontinue the course voluntarily due to personal reasons or schedules.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span>The student fails to attend classes, live meetings, or complete projects after enrollment confirmation.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span>The course has already commenced and training resources, syllabus repositories, or workspace credentials have been shared.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">4</span>
                      Refund Processing
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      If a refund request meets eligibility criteria and receives approval from JAWA EDTECH management:
                    </p>
                    <div className="flex items-center gap-3.5 bg-slate-50 border border-slate-200 rounded-lg p-5">
                      <Calendar className="text-guvi-deepGreen shrink-0" size={24} />
                      <p className="text-[15px] leading-normal font-semibold text-guvi-muted">
                        The approved refund will be processed within <span className="text-black font-extrabold">7–14 business days</span>. The transaction will be credited back via the original payment method (e.g. Credit Card, UPI, Netbanking) used during enrollment.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">5</span>
                      Course Transfer &amp; Batch Changes
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      In lieu of refunds, JAWA EDTECH may, at its sole discretion, allow course transfers or batch changes:
                    </p>
                    <p className="mt-2 text-[15px] leading-7 font-medium text-guvi-muted">
                      Such requests are evaluated on a case-by-case basis, subject to course seat availability, batch capacity, and formal approval by the management. Administrative processing charges may apply for batch transfers.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">6</span>
                      Policy Changes
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      JAWA EDTECH reserves the right to modify, add, or amend any parts of this Refund Policy without prior notice. Any modifications take effect immediately upon posting to this page.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="mb-2">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">7</span>
                      Contact Us
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      For any questions, requests, or disputes related to payments or refund claims, please contact our support desk:
                    </p>
                    <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-5">
                      <p className="text-[15px] font-bold text-black mb-1">JAWA EDTECH Admissions Support</p>
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

export default RefundPolicyPage;
