import { useEffect, useState, useRef } from "react";
import { Eye, Target, Users, Sparkles, Heart, LogIn, Star, Rocket, Binoculars, Cloud } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";

// Import team member photos
import teamCeo from "../assets/team_ceo.png";
import teamCfo from "../assets/team_cfo.png";
import teamCoo from "../assets/team_coo.png";
import companyLogo from "../assets/logo.png";
import sooryaPhoto from "../assets/soorya.png";
import anishaPhoto from "../assets/anisha.png";
import nithinPhoto from "../assets/nithin.png";
import sunithaPhoto from "../assets/sunitha.jpg";

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

const teamMembers = [
  { name: "Soorya Jawahar", role: "Founder & CEO", badge: "FOUNDER & CEO", photo: sooryaPhoto, slug: "soorya-jawahar" },
  { name: "Anisha", role: "Senior HR - Training & Development", badge: "SENIOR HR", photo: anishaPhoto, slug: "anisha-riya" },
  { name: "Nitinchand", role: "Tech Advisor", badge: "TECH ADVISOR", photo: nithinPhoto, slug: "nitinchand-saravanan" },
  { name: "Sunitha Prakash", role: "Digital Marketing Executive", badge: "DIGITAL MARKETING", photo: sunithaPhoto, slug: "sunitha-prakash" }
];

const testimonials = [
  { name: "Shamugavel", role: "HR - TVS", course: "HR Executive Course", quote: "I successfully completed the HR Executive Course at JAWA EDTECH, and it was a wonderful learning experience. The trainers explained every HR concept clearly and provided practical knowledge of recruitment, onboarding, and HR operations. This course helped me build confidence and prepare for a career in Human Resources." },
  { name: "Anbu", role: "HR - TVS", course: "HR Training", quote: "My experience at JAWA EDTECH was excellent. The HR training program was well-structured and included practical sessions that helped me understand real-world HR processes. The support and guidance from the trainers made learning easy and effective." },
  { name: "Nivetha", role: "HR - Sharp", course: "HR Training", quote: "I am glad I chose JAWA EDTECH for my HR training. The course covered all the important HR functions, and the hands-on approach helped me gain valuable industry knowledge. It was a great step toward achieving my career goals." },
  { name: "Balaji", role: "HR - Hastgags", course: "HR Course", quote: "The HR course at JAWA EDTECH exceeded my expectations. The trainers were knowledgeable and always ready to clarify doubts. I gained practical skills in recruitment and employee management, which increased my confidence for job opportunities." },
  { name: "Akshaya", role: "HR - Freshworks", course: "HR Executive Course", quote: "Completing the HR Executive Course at JAWA EDTECH was a rewarding experience. The training sessions were interactive and informative, helping me understand HR concepts in a simple way. I feel more prepared to start my professional journey in HR." },
  { name: "Gurunath", role: "HR - Payoda Technologies", course: "HR Training", quote: "JAWA EDTECH provided an excellent learning environment for HR aspirants. The course content was relevant to industry requirements, and the practical training helped me develop the skills needed to work in an HR role successfully." },
  { name: "Gokulram", role: "HR - V Support Solutions", course: "HR Training", quote: "I had a great experience learning at JAWA EDTECH. The HR training program gave me valuable insights into recruitment, onboarding, and employee engagement. The trainers were supportive throughout the course and encouraged continuous learning." },
  { name: "Varshini", role: "HR - Ahker", course: "HR Course", quote: "The HR course at JAWA EDTECH helped me gain both theoretical and practical knowledge. The real-time examples and assignments improved my understanding of HR processes and prepared me for workplace challenges. I highly recommend this course to aspiring HR professionals." },
  { name: "Prakash", role: "HR - Reqroots", course: "HR Training", quote: "I am thankful to JAWA EDTECH for providing quality HR training and career guidance. The course enhanced my professional skills and gave me a better understanding of HR practices. It was a valuable learning experience that will help me in my future career." },
  { name: "Tamzhil Arasan", role: "Athen Technology Solutions", course: "Full Stack Development Course", quote: "I successfully completed the Full Stack Development Course at JAWA EDTECH, and it was an excellent learning experience. The trainers taught both front-end and back-end technologies in a simple and practical way. Working on real-time projects helped me improve my coding skills and gain confidence in web development." },
  { name: "Udhaya Mithra", role: "Quest Global", course: "Full Stack Developer Course", quote: "The Full Stack Developer Course at JAWA EDTECH provided me with strong technical knowledge and hands-on experience. I learned technologies like HTML, CSS, JavaScript, React, and database management through practical sessions. The guidance from the trainers helped me become job-ready and improve my problem-solving skills." },
  { name: "Karthick Kathirvel", role: "Tekpillar", course: "Full Stack Development Course", quote: "Joining the Full Stack Development Course at JAWA EDTECH was one of the best decisions for my career. The course covered all the essential concepts required to build modern web applications. The project-based learning approach helped me understand real-world development processes and prepared me for opportunities in the IT industry." },
  { name: "Jamuna", role: "Testriq", course: "QA Testing Course", quote: "The QA Testing Course at JAWA EDTECH provided me with both theoretical knowledge and hands-on experience. The trainers explained testing concepts clearly and guided us through real-time testing scenarios. This course helped me gain confidence in identifying defects and ensuring software quality." },
  { name: "Lakshana", role: "Sasti Infotech", course: "Data Structures and Algorithms Course", quote: "I completed the Data Structures and Algorithms Course at JAWA EDTECH and gained a strong understanding of programming fundamentals. The trainers explained complex concepts like arrays, linked lists, stacks, queues, and algorithms in a simple way. This course significantly improved my problem-solving abilities." }
];

// Colorful card back colors — cycles through the deck
const CARD_BACK_COLORS = [
  "#d1f5d3", // mint green
  "#fde8d8", // peach
  "#e8d8f5", // lavender
  "#d8eef5", // sky blue
  "#f5f5d8", // cream yellow
];

// Fan positions for the background cards (index 1 onward = back cards)
const FAN_CONFIGS = [
  // index 0 = top card (no rotation, centered)
  { rotate: 0, tx: 0, ty: 0, scale: 1, opacity: 1, z: 30 },
  // back cards fanned out
  { rotate: 6, tx: 38, ty: 22, scale: 0.97, opacity: 1, z: 20 },
  { rotate: -7, tx: -36, ty: 26, scale: 0.96, opacity: 1, z: 19 },
  { rotate: 13, tx: 72, ty: 48, scale: 0.94, opacity: 1, z: 18 },
  { rotate: -14, tx: -68, ty: 52, scale: 0.93, opacity: 1, z: 17 },
];

function WallOfLove() {
  const [order, setOrder] = useState(() => testimonials.map((_, i) => i));
  const [transitioning, setTransitioning] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [exitDir, setExitDir] = useState(1); // 1 = right, -1 = left
  const autoRef = useRef(null);

  const advance = (dir = 1) => {
    if (transitioning) return;
    setExitDir(dir);
    setTransitioning(true);
    setTimeout(() => {
      setOrder(prev => {
        if (dir === 1) return [...prev.slice(1), prev[0]];
        return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
      });
      setCurrentIdx(prev =>
        dir === 1
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setTransitioning(false);
    }, 420);
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    autoRef.current = setInterval(() => advance(1), 4000);
    return () => clearInterval(autoRef.current);
  }, [transitioning]);

  const resetAuto = (dir) => {
    clearInterval(autoRef.current);
    advance(dir);
    autoRef.current = setInterval(() => advance(1), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-t border-guvi-line/40">
      {/* Giant watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span
          style={{
            fontSize: "clamp(60px, 14vw, 160px)",
            fontWeight: 900,
            color: "rgba(0,0,0,0.055)",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          Wall Of Love
        </span>
      </div>

      <div className="shell relative z-10">
        {/* Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
            <Heart size={14} className="fill-current" /> WALL OF LOVE
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold text-black sm:text-[44px]">
            Stories of Success
          </h2>
          <p className="mt-3 text-[15px] font-medium text-guvi-muted">
            Real words from our graduates — tap the card or use the arrows to browse.
          </p>
        </div>

        {/* Fan deck area */}
        <div className="relative mx-auto flex items-center justify-center" style={{ height: 460, maxWidth: 700 }}>

          {/* Floating speech bubble — top left */}
          <div
            className="absolute pointer-events-none"
            style={{ left: "4%", top: "6%", animation: "wol-float 4s ease-in-out infinite" }}
            aria-hidden="true"
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#aab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="8" cy="10" r="0.7" fill="#aab" />
              <circle cx="12" cy="10" r="0.7" fill="#aab" />
              <circle cx="16" cy="10" r="0.7" fill="#aab" />
            </svg>
          </div>

          {/* Floating heart — bottom right */}
          <div
            className="absolute pointer-events-none"
            style={{ right: "4%", bottom: "10%", animation: "wol-pulse 3s ease-in-out infinite" }}
            aria-hidden="true"
          >
            <Heart size={30} style={{ opacity: 0.4, stroke: "#aab", fill: "none", strokeWidth: 1.5 }} />
          </div>

          {/* Cards */}
          {order.map((origIdx, stackPos) => {
            if (stackPos >= FAN_CONFIGS.length) return null;
            const cfg = FAN_CONFIGS[stackPos];
            const item = testimonials[origIdx];
            const isTop = stackPos === 0;
            const backColor = CARD_BACK_COLORS[stackPos % CARD_BACK_COLORS.length];

            // Exit animation for top card
            let extraTransform = "";
            if (transitioning && isTop) {
              extraTransform = `translate(${exitDir * 140}px, -30px) rotate(${exitDir * 10}deg) scale(0.9)`;
            }

            const transform = transitioning && isTop
              ? extraTransform
              : `rotate(${cfg.rotate}deg) translate(${cfg.tx}px, ${cfg.ty}px) scale(${cfg.scale})`;

            return (
              <div
                key={origIdx}
                onClick={isTop ? () => resetAuto(1) : undefined}
                style={{
                  position: "absolute",
                  width: "min(480px, 88vw)",
                  transform,
                  opacity: transitioning && isTop ? 0 : cfg.opacity,
                  zIndex: cfg.z,
                  transition: "transform 420ms cubic-bezier(0.34,1.26,0.64,1), opacity 380ms ease",
                  cursor: isTop ? "pointer" : "default",
                  borderRadius: 24,
                  boxShadow: isTop
                    ? "0 20px 60px rgba(0,0,0,0.13)"
                    : "0 8px 24px rgba(0,0,0,0.09)",
                  background: isTop ? "#ffffff" : backColor,
                  border: isTop ? "1.5px solid #e8f5e9" : `1.5px solid ${backColor}`,
                  willChange: "transform, opacity",
                  userSelect: "none",
                }}
              >
                {isTop ? (
                  /* TOP CARD — full testimonial */
                  <div style={{ padding: "28px 30px 26px" }}>
                    {/* Header row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: "50%",
                        background: "#f0faf2", border: "1.5px solid #c9f2cf",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, overflow: "hidden", padding: 6
                      }}>
                        <img src={companyLogo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 16, color: "#8cc63f", fontFamily: "DM Sans, sans-serif" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginTop: 2 }}>
                          {item.course} — {item.role}
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 14, marginBottom: 12 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} style={{ fill: "#f59e0b", stroke: "#f59e0b" }} />
                      ))}
                      <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginLeft: 6 }}>(5/5)</span>
                    </div>

                    {/* Quote */}
                    <div style={{
                      maxHeight: 160,
                      overflowY: "auto",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#d1d5db transparent",
                    }}>
                      <p style={{
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: "#374151",
                        fontWeight: 500,
                        margin: 0,
                        fontFamily: "DM Sans, sans-serif",
                      }}>
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Tap hint */}
                    <div style={{
                      marginTop: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 5,
                      opacity: 0.45,
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b" }}>tap to see next</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                ) : (
                  /* BACK CARD — colored placeholder, no content */
                  <div style={{ height: 240, borderRadius: 22, background: backColor }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }}>
          <button
            onClick={() => resetAuto(-1)}
            disabled={transitioning}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "2px solid #111", background: "#fff", color: "#111",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
              fontSize: 16, fontWeight: 800,
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; }}
            aria-label="Previous"
          >
            ←
          </button>

          <span style={{ fontSize: 13, fontWeight: 700, color: "#64748b" }}>
            <span style={{ color: "#111", fontWeight: 900 }}>{currentIdx + 1}</span> / {testimonials.length}
          </span>

          <button
            onClick={() => resetAuto(1)}
            disabled={transitioning}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "2px solid #111", background: "#111", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
              fontSize: 16, fontWeight: 800,
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#8cc63f"; e.currentTarget.style.borderColor = "#8cc63f"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.borderColor = "#111"; }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes wol-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes wol-pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.6; }
        }
        @keyframes tab-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tab-content-animate {
          animation: tab-fade-in 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}

function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const missionText = "To deliver practical, industry-relevant training and career development programs that help learners gain real-world expertise, achieve their goals, and succeed in their chosen careers.";

  const visionText = "To empower individuals with the skills, confidence, and opportunities needed to build successful careers and create a meaningful impact in the professional world.";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-guvi-ink relative overflow-hidden font-sans">
      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#052412] via-[#094021] to-[#02170b] py-24 lg:py-32 text-white">
          {/* Glowing blur effects */}
          <div className="absolute left-[10%] top-[10%] w-[300px] h-[300px] bg-[#19d950]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute right-[10%] bottom-[10%] w-[350px] h-[350px] bg-[#0b8a32]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <BackgroundPattern className="absolute -left-10 top-12 opacity-30 hidden md:block" />
          <BackgroundPattern className="absolute -right-10 bottom-8 opacity-30 hidden md:block" />
          
          <div className="shell text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#19d950] border border-white/10 shadow-sm">
              <Sparkles size={14} /> Who We Are
            </span>
            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.15] text-white sm:text-[54px] lg:text-[62px]">
              Empowering Next-Gen Professionals <br className="hidden sm:inline" />
              with <span className="text-[#19d950] drop-shadow-[0_2px_8px_rgba(25,217,80,0.15)]">Real-World Expertise</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-medium leading-8 text-emerald-100/80 sm:text-[18px]">
              JAWA EDTECH bridges the gap between traditional learning and industry requirements. We deliver job-focused training programs across emerging domains, preparing candidates to stand out in today's competitive job market.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 bg-white border-y border-guvi-line/40">
          <div className="shell max-w-[800px] mx-auto px-4 text-center">
            {/* Tabs Header */}
            <div className="flex items-center justify-center gap-8 sm:gap-16 mb-10 border-b border-slate-100 pb-0.5">
              {/* Mission Tab */}
              <button
                type="button"
                onClick={() => setActiveTab("mission")}
                className="flex items-center pb-3 cursor-pointer select-none focus:outline-none relative group"
              >
                <span
                  className={`text-[24px] sm:text-[32px] font-extrabold transition-colors duration-200 pb-1.5 ${
                    activeTab === "mission" ? "text-black border-b-[3.5px] border-[#15b957]" : "text-black/35 hover:text-black/55"
                  }`}
                >
                  Our Mission
                </span>
                {activeTab === "mission" && (
                  <div className="ml-2.5 text-[#15b957] flex items-center relative -top-1">
                    <Rocket size={30} className="transform -rotate-12 animate-pulse" />
                    <Cloud size={13} className="absolute -bottom-1 -left-1 opacity-70" />
                    <Cloud size={15} className="absolute -bottom-2 -left-2.5 opacity-40" />
                  </div>
                )}
              </button>

              {/* Vision Tab */}
              <button
                type="button"
                onClick={() => setActiveTab("vision")}
                className="flex items-center pb-3 cursor-pointer select-none focus:outline-none relative group"
              >
                <span
                  className={`text-[24px] sm:text-[32px] font-extrabold transition-colors duration-200 pb-1.5 ${
                    activeTab === "vision" ? "text-black border-b-[3.5px] border-[#15b957]" : "text-black/35 hover:text-black/55"
                  }`}
                >
                  Our Vision
                </span>
                {activeTab === "vision" && (
                  <div className="ml-2.5 text-[#15b957] flex items-center relative -top-1">
                    <Binoculars size={30} className="animate-pulse" />
                  </div>
                )}
              </button>
            </div>

            {/* Tabs Content */}
            <div className="min-h-[160px] flex flex-col justify-center items-center max-w-[700px] mx-auto">
              {activeTab === "mission" ? (
                <div key="mission" className="tab-content-animate">
                  <p className="text-[17px] sm:text-[19px] font-medium leading-[1.8] text-slate-800">
                    {missionText}
                  </p>
                </div>
              ) : (
                <div key="vision" className="tab-content-animate">
                  <p className="text-[17px] sm:text-[19px] font-medium leading-[1.8] text-slate-800">
                    {visionText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 lg:py-28 bg-[#fafbfc]">
          <div className="shell">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
                <Users size={14} /> Our Leaders
              </span>
              <h2 className="mt-4 text-[32px] font-extrabold text-black sm:text-[44px]">Meet Our Team</h2>
              <p className="mt-4 text-[16px] font-medium text-guvi-muted">
                The experienced leaders and advisors driving candidate success and course excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto px-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="relative bg-white rounded-[20px] border border-guvi-line/40 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-300 group h-[380px]"
                >
                  <div className="absolute inset-0 flex items-end justify-center">
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100/50 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none z-20">
                    <span className="text-[10px] tracking-wider font-extrabold text-slate-700 uppercase font-sans">{member.badge}</span>
                  </div>
                  <a href={`#team/${member.slug}`} className="absolute top-4 left-4 bg-black hover:bg-neutral-800 text-white flex items-center gap-1.5 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.18)] pointer-events-none group-hover:pointer-events-auto z-20 no-underline">
                    <LogIn size={13} className="stroke-[2.5]" />
                    <span className="text-[11px] font-extrabold tracking-wide font-sans">View Profile</span>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8cc63f] px-6 py-5 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 z-20 text-left">
                    <h4 className="text-white font-extrabold text-[18px] tracking-wide font-sans leading-tight">{member.name}</h4>
                    <p className="text-white/90 font-medium text-[12px] mt-0.5 font-sans leading-snug">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WALL OF LOVE */}
        <WallOfLove />
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default AboutPage;