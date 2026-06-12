import { useEffect } from "react";
import { Scale, Shield, FileText, CheckCircle2, Lock, Info, RefreshCw, Eye } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";

function PrivacyPolicyPage() {
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
              <Shield size={14} /> Trust &amp; Privacy
            </span>
            <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-black sm:text-[44px]">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-3 max-w-[760px] text-[15px] font-medium leading-relaxed text-guvi-muted">
              Your privacy and personal data security are our top priorities.
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
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold bg-guvi-mint text-guvi-deepGreen border-l-4 border-guvi-green transition-all"
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
                    At Jawa EdTech, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, enroll in our courses, or interact with our services.
                  </p>

                  {/* Section 1 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">1</span>
                      Information We Collect
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      We may collect the following types of information when you register, purchase courses, or query our team:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-4">
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Name</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Email Address</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Phone Number</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Educational Qualifications</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Resume or Career Information</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Payment Information (where applicable)</span>
                      </li>
                      <li className="flex items-center gap-2 text-[15px] font-medium text-guvi-muted md:col-span-2">
                        <CheckCircle2 size={16} className="text-guvi-green shrink-0" />
                        <span>Website Usage Data and Analytics (IP address, cookies, device info)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">2</span>
                      How We Use Your Information
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      We collect and process your information for the following specific purposes:
                    </p>
                    <ul className="space-y-2.5 pl-5">
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Process Course Enrollments:</strong> Creating credentials, processing payments, and managing student databases.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Provide Training &amp; Resources:</strong> Granting course access, sending curriculum materials, and enabling interactive dashboards.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Support Communication:</strong> Reaching out to you regarding live session updates, support tickets, and scheduling changes.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Improve Platform &amp; Website Experience:</strong> Conducting analytical research, fixing bugs, and optimizing page layouts.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Placement &amp; Career Guidance:</strong> Sharing profiles, resumes, and project details with recruiter partners for hiring pipelines.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-guvi-muted">
                        <CheckCircle2 size={16} className="text-guvi-green mt-1 shrink-0" />
                        <span><strong>Legal Obligations:</strong> Compliance with auditing, tax reporting, or government directives.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">3</span>
                      Information Sharing &amp; Disclosure
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted mb-3">
                      Jawa EdTech does not sell, rent, trade, or compromise your personal information with external advertisers or third parties.
                    </p>
                    <div className="bg-guvi-mint/40 border border-guvi-line/45 rounded-lg p-4 text-[15px] leading-relaxed font-medium text-guvi-muted">
                      💡 <strong>Trusted Partners:</strong> We may share data with service providers who assist in payment processing, backend server hosting, or corporate placement support. These partners are legally bound to protect your data and are not authorized to use it for marketing purposes.
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">4</span>
                      Data Security
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      We implement robust technical, administrative, and physical security controls to defend your personal information against unauthorized access, disclosure, alteration, or deletion.
                    </p>
                    <p className="mt-2 text-[15px] leading-7 font-medium text-guvi-muted">
                      Our platform employs secure socket layers (SSL), encrypted databases, and restricted access protocols. However, please remember that no system is 100% immune from security breaches.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">5</span>
                      Cookies Policy
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      Our website uses cookies and similar identifiers to enhance user experience, track referral patterns, analyze site performance, and retain user choices (such as theme and language settings).
                    </p>
                    <p className="mt-2 text-[15px] leading-7 font-medium text-guvi-muted font-semibold text-black">
                      🍪 You can choose to disable cookies through your browser settings, though doing so might restrict certain dynamic capabilities of our educational dashboard.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">6</span>
                      Third-Party Links
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      Our platform may feature reference links to external websites, services, or documentation resources. Jawa EdTech is not responsible for the privacy practices, content, or policies of outside services. We recommend reviewing the terms of any website you visit.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">7</span>
                      Policy Updates
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      Jawa EdTech reserves the right to modify or replace this Privacy Policy at any time. Any changes will be published directly on this page with an updated modification date. Your continued enrollment or interaction with our services implies consent to the revised terms.
                    </p>
                  </div>

                  {/* Section 8 */}
                  <div className="mb-2">
                    <h2 className="flex items-center gap-2.5 text-[20px] font-extrabold text-black mb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-guvi-mint text-guvi-deepGreen text-sm font-extrabold">8</span>
                      Contact Us
                    </h2>
                    <p className="text-[15px] leading-7 font-medium text-guvi-muted">
                      If you have questions, feedback, or concerns regarding your privacy, data security, or this document, please reach out to us at:
                    </p>
                    <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-5">
                      <p className="text-[15px] font-bold text-black mb-1">Jawa EdTech</p>
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

export default PrivacyPolicyPage;
