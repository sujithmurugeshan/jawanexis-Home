import { useEffect, useState } from "react";
import { Briefcase, ArrowRight, Sparkles, MapPin, Clock } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import JobApplicationModal from "../components/JobApplicationModal.jsx";

const jobs = [
  {
    id: 1,
    title: "Senior Business Development Associate",
    experience: "02 - 04 years",
    type: "Full-Time",
    location: "On-site"
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    experience: "01 - 03 years",
    type: "Full-Time",
    location: "On-site"
  },
  {
    id: 3,
    title: "Lead Generation Specialist",
    experience: "02 - 03 years",
    type: "Full-Time",
    location: "On-site"
  },
  {
    id: 4,
    title: "Senior HR Executive",
    experience: "01 - 03 years",
    type: "Full-Time",
    location: "On-site"
  }
];

function BackgroundPattern({ className }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className={`text-[#19d950]/20 ${className}`}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="40" cy="20" r="3" fill="currentColor" />
      <circle cx="60" cy="20" r="3" fill="currentColor" />
      <circle cx="80" cy="20" r="3" fill="currentColor" />
      <circle cx="20" cy="40" r="3" fill="currentColor" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      <circle cx="60" cy="40" r="3" fill="currentColor" />
      <circle cx="80" cy="40" r="3" fill="currentColor" />
      <circle cx="20" cy="60" r="3" fill="currentColor" />
      <circle cx="40" cy="60" r="3" fill="currentColor" />
      <circle cx="60" cy="60" r="3" fill="currentColor" />
      <circle cx="80" cy="60" r="3" fill="currentColor" />
      <polygon points="100,20 105,28 95,28" fill="currentColor" />
      <polygon points="100,60 105,68 95,68" fill="currentColor" />
    </svg>
  );
}

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-guvi-ink relative overflow-hidden font-sans">
      <Header />

      <main className="relative z-10 pt-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#052412] via-[#094021] to-[#02170b] py-24 lg:py-32 text-white">
          <div className="absolute left-[10%] top-[10%] w-[300px] h-[300px] bg-[#19d950]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute right-[10%] bottom-[10%] w-[350px] h-[350px] bg-[#19d950]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <BackgroundPattern className="absolute -left-10 top-12 opacity-30 hidden md:block" />
          <BackgroundPattern className="absolute -right-10 bottom-8 opacity-30 hidden md:block" />
          
          <div className="shell text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#19d950] border border-white/10 shadow-sm">
              <Sparkles size={14} /> Join Our Team
            </span>
            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.15] text-white sm:text-[54px] lg:text-[62px]">
              Build Your Career With <br className="hidden sm:inline" />
              <span className="text-[#19d950] drop-shadow-[0_2px_8px_rgba(25,217,80,0.15)]">JAWA EDTECH</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-medium leading-8 text-emerald-100/80 sm:text-[18px]">
              We are on a mission to empower the next generation of professionals. If you are passionate about education, technology, and career development, we'd love to have you on board!
            </p>
          </div>
        </section>

        {/* OPEN POSITIONS SECTION */}
        <section className="py-20 lg:py-28 relative">
          <div className="shell max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
                <Briefcase size={14} /> Hiring Now
              </span>
              <h2 className="mt-4 text-[32px] font-extrabold text-black sm:text-[44px]">Current Openings</h2>
              <p className="mt-4 text-[16px] font-medium text-guvi-muted">
                Explore our open roles and find the perfect fit for your skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* LEFT COLUMN: JOBS LIST */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {jobs.map((job) => (
                  <div 
                    key={job.id}
                    className="bg-white rounded-2xl border border-guvi-line/40 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-shadow duration-300 group"
                  >
                    <div>
                      <h3 className="text-[20px] font-extrabold text-black mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={16} className="text-[#19d950]" />
                          {job.experience} Experience
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-[#19d950]" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-[#19d950]" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedJob(job.title)}
                      className="inline-flex items-center justify-center gap-2 h-12 w-full sm:w-auto px-6 rounded-xl btn-glossy-green text-sm font-extrabold shrink-0 group-hover:scale-105 transition-transform"
                    >
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </div>
                ))}

              </div>

              {/* RIGHT COLUMN: WHY JOIN US */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#052412] to-[#094021] rounded-2xl p-8 text-white sticky top-24 shadow-2xl">
                  <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
                    <Sparkles className="text-[#19d950]" size={24} />
                    Why Join Us?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#19d950]/20 flex items-center justify-center shrink-0">
                        🚀
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Fast Growth</h4>
                        <p className="text-sm text-emerald-100/80 mt-1 leading-relaxed">
                          We are a fast-growing edtech startup. Grow your career as we scale!
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#19d950]/20 flex items-center justify-center shrink-0">
                        💡
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Impactful Work</h4>
                        <p className="text-sm text-emerald-100/80 mt-1 leading-relaxed">
                          Your work directly helps students achieve their career dreams.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#19d950]/20 flex items-center justify-center shrink-0">
                        🤝
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Great Team</h4>
                        <p className="text-sm text-emerald-100/80 mt-1 leading-relaxed">
                          Collaborate with passionate, supportive, and brilliant minds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-sm text-emerald-100/80 italic text-center">
                      "JAWA EDTECH is more than a workplace; it's a community of innovators."
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatButton />

      <JobApplicationModal 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
        jobTitle={selectedJob || ""}
      />
    </div>
  );
}

export default CareersPage;
