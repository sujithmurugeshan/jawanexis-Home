import { Briefcase, Users, Award, Rocket, BookOpen } from "lucide-react";
import studentsImg from "../assets/fullstack-students.png";

const benefits = [
  {
    title: "Practical, hands-on learning",
    desc: "Work on real tasks and scenarios instead of only theory.",
    icon: BookOpen
  },
  {
    title: "Industry-oriented curriculum",
    desc: "Learn skills that companies actively look for in candidates.",
    icon: Briefcase
  },
  {
    title: "Mentorship from experienced trainers",
    desc: "Get guidance and feedback throughout the internship.",
    icon: Users
  },
  {
    title: "Certificate of completion",
    desc: "Receive an internship certificate after successful completion.",
    icon: Award
  },
  {
    title: "Career support",
    desc: "Improve your resume, interview skills, and job readiness.",
    icon: Rocket
  }
];

export default function InternshipIntro({ courseKey }) {
  const names = {
    "hr-executive": "HR Executive",
    "hr-recruitment": "HR Recruitment",
    "full-stack": "Full Stack Development"
  };
  const displayName = names[courseKey] ? `${names[courseKey]} Internship Program` : "Internship Program";

  return (
    <section className="internship-intro-section">

      {/* ── HERO AREA ── */}
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(175deg, #f0fff4 0%, #f4fff7 40%, #ffffff 100%)" }}>

        {/* Decorative glowing orbs */}
        <div style={{
          position: "absolute", left: "-6%", top: "20%", width: 360, height: 420,
          background: "radial-gradient(ellipse at center, rgba(25,217,80,0.22) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", right: "-6%", top: "25%", width: 340, height: 400,
          background: "radial-gradient(ellipse at center, rgba(25,217,80,0.22) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none"
        }} />
        {/* Subtle top-right accent */}
        <div style={{
          position: "absolute", right: "10%", top: "-8%", width: 200, height: 200,
          background: "radial-gradient(circle, rgba(25,217,80,0.10) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none"
        }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
          {/* Badge pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-green-200 text-green-700 text-xs font-extrabold uppercase tracking-widest mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            JAWA EDTECH Certified
          </span>

          <h2 className="text-[28px] sm:text-[40px] md:text-[50px] font-extrabold leading-tight tracking-tight text-gray-900 max-w-[900px]">
            {displayName}
          </h2>

          <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-gray-500 max-w-[720px] font-medium">
            Kickstart your career with hands-on internship course designed to give you practical
            experience, industry exposure, and job-ready skills. Our 1-Month Internship Programs
            help students, graduates, and job seekers build confidence through real-world tasks,
            mentorship, and guided learning.
          </p>
        </div>

        {/* Hero Image + Feature Cards Row */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">

            {/* Left Feature Cards (Benefits 1, 2 & 3) */}
            <div className="flex flex-col gap-5 w-full md:w-[220px] lg:w-[250px] shrink-0">
              {benefits.slice(0, 3).map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                      <Icon size={17} className="text-white stroke-[2.5]" />
                    </div>
                    <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">{b.title}</h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Center Student Image */}
            <div className="relative flex-1 flex justify-center items-end min-w-0 md:max-w-[440px] lg:max-w-[500px]">
              <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 90%, rgba(25,217,80,0.12) 0%, transparent 70%)" }} />
              <img
                src={studentsImg}
                alt="JAWA EDTECH Internship Students"
                className="relative w-full block object-contain object-bottom drop-shadow-xl rounded-2xl"
                style={{ maxHeight: 480, minHeight: 240 }}
              />
            </div>

            {/* Right Feature Cards (Benefits 4 & 5) */}
            <div className="flex flex-col gap-5 w-full md:w-[220px] lg:w-[250px] shrink-0">
              {benefits.slice(3).map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_4px_24px_rgba(25,217,80,0.08)] border border-green-100 hover:shadow-[0_8px_32px_rgba(25,217,80,0.15)] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 shadow-sm">
                      <Icon size={17} className="text-white stroke-[2.5]" />
                    </div>
                    <h4 className="font-extrabold text-[14px] text-gray-900 mb-1.5 leading-snug">{b.title}</h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
