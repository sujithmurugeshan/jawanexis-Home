import { useEffect, useState } from "react";
import { Eye, Target, Quote, ChevronRight, Users, Sparkles, Heart } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";

// Import team member photos
import sooryaPhoto from "../assets/soorya.png";
import anishaPhoto from "../assets/anisha.png";
import nithinPhoto from "../assets/nithin.png";
import sunithaPhoto from "../assets/sunitha.png";

// Custom decorative SVG pattern for background
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
  {
    name: "Soorya Jawahar",
    role: "Founder & CEO",
    photo: sooryaPhoto,
    initials: "SJ",
    gradient: "from-[#0b8a32] to-[#19d950]",
    description: "Driving the strategic vision and educational excellence of Jawa EdTech to empower global talent."
  },
  {
    name: "Anisha",
    role: "Senior HR - Training & Development",
    photo: anishaPhoto,
    initials: "AN",
    gradient: "from-blue-600 to-indigo-500",
    description: "Structuring practical, industry-first curricula and mentoring candidates for career readiness."
  },
  {
    name: "Nitinchand",
    role: "Tech Advisor",
    photo: nithinPhoto,
    initials: "NC",
    gradient: "from-purple-600 to-pink-500",
    description: "Guiding the technological roadmap and integration of state-of-the-art tools in developer courses."
  },
  {
    name: "Sunitha Prakash",
    role: "Digital Marketing Executive",
    photo: sunithaPhoto,
    initials: "SP",
    gradient: "from-amber-500 to-orange-500",
    description: "Expanding Jawa EdTech's outreach to make quality education accessible to aspiring students."
  }
];

const testimonials = [
  {
    name: "Shamugavel",
    role: "HR - TVS",
    course: "HR Executive Course",
    quote: "I successfully completed the HR Executive Course at Jawa EdTech, and it was a wonderful learning experience. The trainers explained every HR concept clearly and provided practical knowledge of recruitment, onboarding, and HR operations. This course helped me build confidence and prepare for a career in Human Resources."
  },
  {
    name: "Anbu",
    role: "HR - TVS",
    course: "HR Training",
    quote: "My experience at Jawa EdTech was excellent. The HR training program was well-structured and included practical sessions that helped me understand real-world HR processes. The support and guidance from the trainers made learning easy and effective."
  },
  {
    name: "Nivetha",
    role: "HR - Sharp",
    course: "HR Training",
    quote: "I am glad I chose Jawa EdTech for my HR training. The course covered all the important HR functions, and the hands-on approach helped me gain valuable industry knowledge. It was a great step toward achieving my career goals."
  },
  {
    name: "Balaji",
    role: "HR - Hastgags",
    course: "HR Course",
    quote: "The HR course at Jawa EdTech exceeded my expectations. The trainers were knowledgeable and always ready to clarify doubts. I gained practical skills in recruitment and employee management, which increased my confidence for job opportunities."
  },
  {
    name: "Akshaya",
    role: "HR - Freshworks",
    course: "HR Executive Course",
    quote: "Completing the HR Executive Course at Jawa EdTech was a rewarding experience. The training sessions were interactive and informative, helping me understand HR concepts in a simple way. I feel more prepared to start my professional journey in HR."
  },
  {
    name: "Gurunath",
    role: "HR - Payoda Technologies",
    course: "HR Training",
    quote: "Jawa EdTech provided an excellent learning environment for HR aspirants. The course content was relevant to industry requirements, and the practical training helped me develop the skills needed to work in an HR role successfully."
  },
  {
    name: "Gokulram",
    role: "HR - V Support Solutions",
    course: "HR Training",
    quote: "I had a great experience learning at Jawa EdTech. The HR training program gave me valuable insights into recruitment, onboarding, and employee engagement. The trainers were supportive throughout the course and encouraged continuous learning."
  },
  {
    name: "Varshini",
    role: "HR - Ahker",
    course: "HR Course",
    quote: "The HR course at Jawa EdTech helped me gain both theoretical and practical knowledge. The real-time examples and assignments improved my understanding of HR processes and prepared me for workplace challenges. I highly recommend this course to aspiring HR professionals."
  },
  {
    name: "Prakash",
    role: "HR - Reqroots",
    course: "HR Training",
    quote: "I am thankful to Jawa EdTech for providing quality HR training and career guidance. The course enhanced my professional skills and gave me a better understanding of HR practices. It was a valuable learning experience that will help me in my future career."
  },
  {
    name: "Tamzhil Arasan",
    role: "Athen Technology Solutions",
    course: "Full Stack Development Course",
    quote: "I successfully completed the Full Stack Development Course at Jawa EdTech, and it was an excellent learning experience. The trainers taught both front-end and back-end technologies in a simple and practical way. Working on real-time projects helped me improve my coding skills and gain confidence in web development."
  },
  {
    name: "Udhaya Mithra",
    role: "Quest Global",
    course: "Full Stack Developer Course",
    quote: "The Full Stack Developer Course at Jawa EdTech provided me with strong technical knowledge and hands-on experience. I learned technologies like HTML, CSS, JavaScript, React, and database management through practical sessions. The guidance from the trainers helped me become job-ready and improve my problem-solving skills."
  },
  {
    name: "Karthick Kathirvel",
    role: "Tekpillar",
    course: "Full Stack Development Course",
    quote: "Joining the Full Stack Development Course at Jawa EdTech was one of the best decisions for my career. The course covered all the essential concepts required to build modern web applications. The project-based learning approach helped me understand real-world development processes and prepared me for opportunities in the IT industry."
  },
  {
    name: "Jamuna",
    role: "Testriq",
    course: "QA Testing Course",
    quote: "The QA Testing Course at Jawa EdTech provided me with both theoretical knowledge and hands-on experience. The trainers explained testing concepts clearly and guided us through real-time testing scenarios. This course helped me gain confidence in identifying defects and ensuring software quality."
  },
  {
    name: "Lakshana",
    role: "Sasti Infotech",
    course: "Data Structures and Algorithms Course",
    quote: "I completed the Data Structures and Algorithms Course at Jawa EdTech and gained a strong understanding of programming fundamentals. The trainers explained complex concepts like arrays, linked lists, stacks, queues, and algorithms in a simple way. This course significantly improved my problem-solving abilities."
  }
];

function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Manage card order indices for the Wall of Love carousel
  const [cardsOrder, setCardsOrder] = useState(() =>
    testimonials.map((_, i) => i)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCardsOrder((prev) => {
        const nextOrder = [...prev.slice(1), prev[0]];
        return nextOrder;
      });
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white text-guvi-ink relative overflow-hidden font-sans">
      <Header />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-guvi-soft/80 to-white py-20 lg:py-28">
          <BackgroundPattern className="absolute -left-10 top-12 opacity-50 hidden md:block" />
          <BackgroundPattern className="absolute -right-10 bottom-8 opacity-50 hidden md:block" />

          <div className="shell text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
              <Sparkles size={14} /> Who We Are
            </span>
            <h1 className="mt-6 text-[38px] font-extrabold leading-[1.15] text-black sm:text-[54px] lg:text-[62px]">
              Empowering Next-Gen Professionals <br className="hidden sm:inline" />
              with <span className="text-guvi-deepGreen">Real-World Expertise</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-medium leading-8 text-guvi-muted sm:text-[18px]">
              Jawa EdTech bridges the gap between traditional learning and industry requirements. We deliver job-focused training programs across emerging domains, preparing candidates to stand out in today's competitive job market.
            </p>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="py-16 bg-white border-y border-guvi-line/40">
          <div className="shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card */}
              <div className="relative group overflow-hidden rounded-2xl border border-guvi-line bg-gradient-to-br from-white to-guvi-soft/30 p-8 shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-guvi-green text-black shadow-lift group-hover:scale-110 transition-transform duration-300">
                  <Eye size={24} className="stroke-[2.5]" />
                </div>
                <h2 className="mt-6 text-[22px] font-extrabold text-black">Our Vision</h2>
                <p className="mt-4 text-[16px] font-medium leading-7 text-guvi-muted">
                  To empower individuals with the skills, confidence, and opportunities needed to build successful careers and create a meaningful impact in the professional world.
                </p>
                <div className="absolute top-0 right-0 h-24 w-24 bg-guvi-green/5 rounded-bl-full pointer-events-none" />
              </div>

              {/* Mission Card */}
              <div className="relative group overflow-hidden rounded-2xl border border-guvi-line bg-gradient-to-br from-white to-guvi-soft/30 p-8 shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-guvi-green text-black shadow-lift group-hover:scale-110 transition-transform duration-300">
                  <Target size={24} className="stroke-[2.5]" />
                </div>
                <h2 className="mt-6 text-[22px] font-extrabold text-black">Our Mission</h2>
                <p className="mt-4 text-[16px] font-medium leading-7 text-guvi-muted">
                  To deliver practical, industry-relevant training and career development programs that help learners gain real-world expertise, achieve their goals, and succeed in their chosen careers.
                </p>
                <div className="absolute top-0 right-0 h-24 w-24 bg-guvi-green/5 rounded-bl-full pointer-events-none" />
              </div>
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
              <h2 className="mt-4 text-[32px] font-extrabold text-black sm:text-[44px]">
                Meet Our Team
              </h2>
              <p className="mt-4 text-[16px] font-medium text-guvi-muted">
                The experienced leaders and advisors driving candidate success and course excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl border border-guvi-line/60 p-6 text-center hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="relative mx-auto h-24 w-24 mb-6">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover border-2 border-guvi-green shadow-lift group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr ${member.gradient} text-white font-extrabold text-2xl shadow-lift group-hover:rotate-12 transition-transform duration-500`}>
                        {member.initials}
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 bg-white h-7 w-7 rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                      <div className="h-4.5 w-4.5 rounded-full bg-guvi-green animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-[19px] font-extrabold text-black group-hover:text-guvi-deepGreen transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-extrabold uppercase tracking-wide text-guvi-deepGreen bg-guvi-soft/80 inline-block px-3 py-0.5 rounded-full">
                    {member.role}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed font-medium text-guvi-muted">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS STACK SECTION */}
        <section className="py-20 lg:py-28 bg-white border-t border-guvi-line/40 relative overflow-hidden">
          <div className="shell">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen">
                <Heart size={14} className="fill-current" /> WALL OF LOVE
              </span>
              <h2 className="mt-4 text-[32px] font-extrabold text-black sm:text-[44px]">
                Stories of Success
              </h2>
              <p className="mt-4 text-[16px] font-medium text-guvi-muted">
                See how our graduates secured placements, elevated their careers, and achieved professional milestones. Click the active card to send it behind and view the next.
              </p>
            </div>

            {/* 3D Stack Container */}
            <div className="relative mx-auto max-w-[640px] h-[420px] sm:h-[340px] md:h-[300px] flex items-center justify-center">
              {cardsOrder.map((originalIndex, orderIndex) => {
                const item = testimonials[originalIndex];
                
                // We only render the first 4 cards to keep DOM lightweight and performant
                if (orderIndex >= 4) return null;

                let transformStyle = "";
                let opacityStyle = 1;
                let zIndexStyle = 30 - orderIndex;
                let pointerEvents = "pointer-events-none";

                if (isTransitioning) {
                  if (orderIndex === 0) {
                    // Top card exits
                    transformStyle = "translate(125%, -20px) rotate(8deg) scale(0.95)";
                    opacityStyle = 0;
                  } else if (orderIndex === 1) {
                    // Second card goes to front
                    transformStyle = "translate(0, 0) scale(1)";
                    opacityStyle = 1;
                    zIndexStyle = 30;
                    pointerEvents = "pointer-events-auto cursor-pointer";
                  } else if (orderIndex === 2) {
                    // Third card goes to second
                    transformStyle = "translate(0, 16px) scale(0.95)";
                    opacityStyle = 0.9;
                    zIndexStyle = 20;
                  } else if (orderIndex === 3) {
                    // Fourth card goes to third
                    transformStyle = "translate(0, 32px) scale(0.9)";
                    opacityStyle = 0.8;
                    zIndexStyle = 10;
                  }
                } else {
                  if (orderIndex === 0) {
                    transformStyle = "translate(0, 0) scale(1)";
                    opacityStyle = 1;
                    pointerEvents = "pointer-events-auto cursor-pointer";
                  } else if (orderIndex === 1) {
                    transformStyle = "translate(0, 16px) scale(0.95)";
                    opacityStyle = 0.9;
                  } else if (orderIndex === 2) {
                    transformStyle = "translate(0, 32px) scale(0.9)";
                    opacityStyle = 0.8;
                  } else if (orderIndex === 3) {
                    transformStyle = "translate(0, 48px) scale(0.85)";
                    opacityStyle = 0; // Pre-load card hidden under stack
                  }
                }

                return (
                  <div
                    key={originalIndex}
                    onClick={orderIndex === 0 ? handleNext : undefined}
                    style={{
                      transform: transformStyle,
                      opacity: opacityStyle,
                      zIndex: zIndexStyle,
                    }}
                    className={`absolute w-full top-0 bg-white rounded-2xl border border-guvi-line p-6 md:p-8 shadow-soft transition-all duration-500 ease-out select-none flex flex-col justify-between h-[360px] sm:h-[280px] md:h-[250px] ${pointerEvents}`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-[17px] md:text-[19px] font-extrabold text-black">
                            {item.name}
                          </h4>
                          <p className="text-[12px] md:text-[13px] font-bold text-guvi-deepGreen uppercase tracking-wider mt-0.5">
                            {item.role}
                          </p>
                        </div>
                        <span className="inline-flex text-[11px] font-extrabold bg-guvi-mint text-guvi-deepGreen px-3 py-1 rounded-full whitespace-nowrap">
                          {item.course}
                        </span>
                      </div>
                      
                      <div className="mt-4 relative">
                        <Quote size={40} className="text-guvi-green/15 absolute -top-5 -left-4 pointer-events-none" />
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-guvi-muted font-medium italic relative z-10">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 flex justify-between items-center mt-auto">
                      <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
                        Jawa EdTech Wall of Love
                      </span>
                      <span className="text-[12px] font-extrabold text-guvi-deepGreen flex items-center gap-1">
                        Click card to next <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex justify-center items-center gap-6">
              <span className="text-[14px] font-extrabold text-guvi-muted">
                Showing Testimonial <span className="text-black font-black">{currentIndex + 1}</span> of {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="flex items-center justify-center h-10 w-28 bg-black hover:bg-guvi-deepGreen text-white text-[13px] font-extrabold rounded-full transition-colors duration-300 shadow-md disabled:opacity-50"
                aria-label="Next Testimonial"
              >
                Next {currentIndex + 1 === testimonials.length ? "↺" : "→"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default AboutPage;
