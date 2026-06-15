import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, GraduationCap, MapPin } from "lucide-react";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import LiveCard from "../components/LiveCard.jsx";
import SyllabusModal from "../components/SyllabusModal.jsx";
import nativeLanguagesImage from "../assets/native-languages.jpg";
import posterBoat from "../assets/poster-boat.png";
import posterBoatHr from "../assets/poster-boat-hr.jpg";
import {
  achievementPhotos,
  journeyLearners,
  learnerCards,
  learningCourses,
  liveCards,
  studentCompanyRows
} from "./homeData.jsx";

const heroOfferPanels = [
  {
    eyebrow: "Companies Hire Skills.We Help You to Build them.",
    title: (
      <>
        Save <span className="text-guvi-deepGreen">Rs. 7,777</span> on IT Career Programs
      </>
    ),
    image: posterBoat,
    rows: [
      ["HR Executive Training", "HR Recruitment Training", "Full Stack Development"],
      ["Software Quality Testing (QA Testing)", "Data Structure And Algorithms (DSA)"],
    ],
    cta: "Claim Rs. 7,777 Off Now",
    note: "*Offer Ends Soon",
  },
  {
    eyebrow: "Premium Career Development Centre in Coimbatore",
    title: (
      <>
        Expert’s in HR Development course
      </>
    ),
    image: posterBoatHr,
    rows: [
      ["HR Executive Training", "HR Recruitment Training", "Full Stack Development"],
      ["Software Quality Testing (QA Testing)", "Data Structure And Algorithms (DSA)"],
    ],
    cta: " Explore Career Programs ",
    note: "Build practical HR and IT skills with career-focused training.",
  },
];

function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const handleOpenSyllabus = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setIsSyllabusOpen(true);
  };

  const handleCloseSyllabus = () => {
    setIsSyllabusOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-white text-guvi-ink">
      <Header />

      <main>
        <HeroOffer />
        <LiveClasses onSyllabusClick={handleOpenSyllabus} />
        <JourneyOfLearners />
        <StudentTestimonials />
        <StudentCompanies />
        <HiringStats />
        <LearningPace />
        <NativeLanguages />
        <AchievementsGallery />
        <FinalCta />
      </main>

      <Footer />
      <FloatingChatButton />

      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={handleCloseSyllabus}
        courseTitle={selectedCourse}
      />
    </div>
  );
}

function useManualSlider(itemCount) {
  const trackRef = useRef(null);
  const dragStateRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const scrollFrameRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track?.children.length) {
      return;
    }

    const nextIndex = Array.from(track.children).reduce((closestIndex, child, index) => {
      const currentDistance = Math.abs(child.offsetLeft - track.scrollLeft - track.offsetLeft);
      const closestChild = track.children[closestIndex];
      const closestDistance = Math.abs(closestChild.offsetLeft - track.scrollLeft - track.offsetLeft);

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);

    setActiveIndex(nextIndex);
  }, []);

  const scrollToIndex = useCallback((index) => {
    const nextIndex = (index + itemCount) % itemCount;
    const track = trackRef.current;
    const target = track?.children[nextIndex];

    setActiveIndex(nextIndex);

    if (track && target) {
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: "smooth"
      });
    }
  }, [itemCount]);

  const handlePointerDown = useCallback((event) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft
    };
    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((event) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.isDown) {
      return;
    }

    event.preventDefault();
    track.scrollLeft = dragState.scrollLeft - (event.clientX - dragState.startX);
  }, []);

  const finishDrag = useCallback((event) => {
    const track = trackRef.current;

    if (!dragStateRef.current.isDown) {
      return;
    }

    dragStateRef.current.isDown = false;
    if (track?.hasPointerCapture?.(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
    updateActiveIndex();
  }, [updateActiveIndex]);

  const handleScroll = useCallback(() => {
    if (scrollFrameRef.current) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(updateActiveIndex);
  }, [updateActiveIndex]);

  return {
    activeIndex,
    isDragging,
    trackRef,
    goNext: () => scrollToIndex(activeIndex + 1),
    goPrevious: () => scrollToIndex(activeIndex - 1),
    scrollToIndex,
    trackHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: finishDrag,
      onPointerCancel: finishDrag,
      onPointerLeave: finishDrag,
      onScroll: handleScroll
    }
  };
}

function SliderControls({ activeIndex, count, onNext, onPrevious, onSelect }) {
  return (
    <div className="manual-slider-controls">
      <button className="manual-slider-arrow manual-slider-arrow-muted" type="button" aria-label="Previous slide" onClick={onPrevious}>
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <div className="manual-slider-dots">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`manual-slider-dot ${index === activeIndex ? "manual-slider-dot-active" : ""}`}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      <button className="manual-slider-arrow" type="button" aria-label="Next slide" onClick={onNext}>
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}

function HeroOffer() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroOfferPanels.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-offer">
      <div className="hero-offer-viewport">
        <div
          className="hero-offer-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
        {heroOfferPanels.map((panel) => (
          <article className="hero-offer-card" key={panel.eyebrow}>
            <div className="hero-offer-art" aria-hidden="true">
              <img src={panel.image} alt="" />
            </div>
            <div className="shell flex min-h-[374px] items-center">
              <div className="relative z-10 max-w-[760px] pt-1 xl:max-w-[930px]">
                <p className="text-[18px] font-semibold leading-tight tracking-[-0.01em] text-black sm:text-[25px]">
                  {panel.eyebrow}
                </p>
                <h1 className="mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-black sm:text-[42px] lg:text-[46px]">
                  {panel.title}
                </h1>
                {panel.description ? (
                  <p className="mt-3 max-w-[900px] text-[16px] font-extrabold leading-7 text-black/68 sm:text-[19px]">
                    {panel.description}
                  </p>
                ) : null}
                <div className="mt-7 inline-flex max-w-[760px] flex-col gap-y-3 rounded-[24px] border-2 border-black bg-gradient-to-r from-guvi-mint to-white py-4 pl-9 pr-7 shadow-[inset_12px_0_0_#19d950] md:rounded-[28px] lg:max-w-[880px]">
                  {panel.rows.map((row) => (
                    <div key={row.join("-")} className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                      {row.map((course) => (
                        <span
                          key={course}
                          className="flex cursor-default items-center gap-2 whitespace-nowrap text-[15px] font-extrabold text-black sm:text-[16px]"
                        >
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-guvi-green animate-pulse" />
                          <span>{course}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <a
                  href="#internship"
                  className="mt-7 flex h-[48px] w-[220px] items-center justify-center rounded-md btn-glossy-green text-[17px] font-extrabold sm:h-[54px] sm:w-[260px] sm:text-[21px]"
                >
                  {panel.cta}
                </a>
                <p className="mt-4 text-[16px] font-medium text-black/70">{panel.note}</p>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

function LiveClasses({ onSyllabusClick }) {
  return (
    <section id="internship" className="bg-white pb-[84px] pt-[94px]">
      <div className="shell">
        <div className="mx-auto max-w-[1030px] text-center">
          <h2 className="flex items-center justify-center gap-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-guvi-ink sm:text-[40px]">
            <span className="h-[21px] w-[21px] rounded-full bg-guvi-green" />
            Live Classes + Placement Guidance
          </h2>
          <p className="mt-6 text-[18px] font-medium leading-[1.45] text-guvi-muted sm:text-[24px]">
            Jawa EDTECh offers one of the industry's leading Project Based Career Programs that promises
            <br className="hidden lg:block" />
            Placement Guidance on completing the program.
          </p>
        </div>

        <div className="live-program-carousel">
          <div className="live-program-track auto-scroll-track">
            {[...liveCards, ...liveCards].map(([thumb, title, language], index) => (
              <div key={`${title}-${index}`} className="live-program-slide" aria-hidden={index >= liveCards.length}>
                <LiveCard thumb={thumb} title={title} language={language} onSyllabusClick={onSyllabusClick} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function JourneyOfLearners() {
  const slider = useManualSlider(journeyLearners.length);

  return (
    <section className="student-showcase bg-white py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold text-guvi-ink">Journey Of Our Learners</h2>
        </div>
        <div className="manual-feedback-slider">
          <div
            className={`manual-feedback-track journey-slider-track ${slider.isDragging ? "manual-feedback-track-dragging" : ""}`}
            ref={slider.trackRef}
            {...slider.trackHandlers}
          >
            {journeyLearners.map((learner) => (
              <article key={`${learner.name}-${learner.company}`} className="journey-slide-card">
                <div className="journey-slide-top">
                  {learner.photo ? (
                    <img src={learner.photo} alt={`${learner.name} photo`} className="journey-photo" />
                  ) : (
                    <div className="journey-photo journey-photo-fallback" aria-label={`${learner.name} photo`}>
                      {learner.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="journey-slide-body">
                  <h3 className="journey-learner-name">
                    <span>{learner.name}</span>
                  </h3>
                  <p className="journey-learner-role">{learner.role}</p>
                  <p className="journey-working-label">Working At</p>
                  <div className="journey-company-lockup">
                    {learner.companyLogo ? (
                      <img src={learner.companyLogo} alt={`${learner.company} logo`} className="journey-company-logo" />
                    ) : (
                      <span className="journey-company-mark" aria-hidden="true">{learner.companyMark || learner.company.charAt(0)}</span>
                    )}
                  </div>
                  {learner.location ? <p className="journey-location">{learner.location}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
        <SliderControls
          activeIndex={slider.activeIndex}
          count={journeyLearners.length}
          onNext={slider.goNext}
          onPrevious={slider.goPrevious}
          onSelect={slider.scrollToIndex}
        />
      </div>
    </section>
  );
}

function StudentTestimonials() {
  const slider = useManualSlider(learnerCards.length);

  return (
    <section className="bg-guvi-soft py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold text-guvi-ink">What Our Students Are Saying!</h2>
        </div>
        <div className="manual-feedback-slider">
          <div
            className={`manual-feedback-track testimonials-track ${slider.isDragging ? "manual-feedback-track-dragging" : ""}`}
            ref={slider.trackRef}
            {...slider.trackHandlers}
          >
            {learnerCards.map(([name, company, course, story, photo]) => (
              <article key={name} className="testimonial-slide-card">
                <div className="flex items-center gap-4">
                  {photo ? (
                    <img
                      src={photo}
                      alt={`${name} photo`}
                      className="h-[70px] w-[70px] shrink-0 rounded-full object-cover border border-guvi-line shadow-lift"
                    />
                  ) : (
                    <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-guvi-green text-[24px] font-extrabold text-black">
                      {name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-[22px] font-extrabold leading-tight text-guvi-ink">{name}</h3>
                    <p className="mt-1 text-[16px] font-extrabold text-black/55">{company}</p>
                  </div>
                </div>
                <div className="mt-6 rounded-md bg-[#effff3] px-5 py-4 text-[16px] font-extrabold text-guvi-deepGreen">{course}</div>
                <p className="mt-5 text-[17px] font-medium leading-8 text-[#253041]">{story}</p>
              </article>
            ))}
          </div>
        </div>
        <SliderControls
          activeIndex={slider.activeIndex}
          count={learnerCards.length}
          onNext={slider.goNext}
          onPrevious={slider.goPrevious}
          onSelect={slider.scrollToIndex}
        />
      </div>
    </section>
  );
}

function getCompanyWordmarkClass(name) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function StudentCompanies() {
  return (
    <section className="student-companies-section">
      <div className="shell">
        <h2 className="text-center text-[30px] font-extrabold text-guvi-ink">Where Do Our Students Work?</h2>
        <div className="company-wall" aria-label="Companies where our students work">
          {studentCompanyRows.map((row, rowIndex) => (
            <div key={`company-row-${rowIndex}`} className={`company-wall-row company-wall-row-${rowIndex + 1}`}>
              {[...row, ...row].map((company, index) => (
                <article key={`${company.name}-${rowIndex}-${index}`} className="company-work-card" aria-hidden={index >= row.length}>
                  {company.logo ? (
                    <>
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="company-work-logo"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement.querySelector('.company-wordmark');
                          if (fallback) {
                            fallback.style.display = 'inline-flex';
                          }
                        }}
                      />
                      <span
                        className={`company-wordmark company-wordmark-${getCompanyWordmarkClass(company.name)}`}
                        style={{ "--brand-color": company.color, display: 'none' }}
                      >
                        {company.name}
                      </span>
                    </>
                  ) : (
                    <span
                      className={`company-wordmark company-wordmark-${getCompanyWordmarkClass(company.name)}`}
                      style={{ "--brand-color": company.color }}
                    >
                      {company.name}
                    </span>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyCompanyLogo({ name }) {
  if (name === "GNIKUL") {
    return <span className="journey-company journey-company-gnikul">GNIKUL</span>;
  }

  if (name === "RebitBee") {
    return <span className="journey-company journey-company-rebit">RebitBee</span>;
  }

  if (name === "Pixis") {
    return <span className="journey-company journey-company-pixis">Pixis</span>;
  }

  return <span className="journey-company journey-company-fipsar">Fipsar</span>;
}

function HiringStats() {
  const proudStats = [
    ["1000+", "Learners"],
    ["10+", "Mentors"],
    ["Innovative", "Learning Approach"],
    ["50+", "Career Workshops"]
  ];

  const proudInsights = [
    [72, "of Learners complete their courses within 3 months"],
    [78, "of Learners could recollect the concepts faster"],
    [84, "of Learners have better understanding over complex topics"]
  ];

  return (
    <section id="about-us" className="bg-white py-16">
      <div className="shell">
        <div className="mx-auto max-w-[1096px]">
          <h3 className="text-center text-[32px] font-extrabold leading-tight text-[#0f172a]">We are proud of...</h3>
          <div className="mt-8 grid gap-[15px] sm:grid-cols-2 lg:grid-cols-4">
            {proudStats.map(([value, label]) => (
              <article key={label} className="flex min-h-[109px] flex-col items-center justify-center rounded-[4px] bg-[#f5f6f7] px-5 text-center">
                <div className="text-[32px] font-extrabold leading-none text-[#00735d]">{value}</div>
                <div className="mt-6 text-[16px] font-extrabold leading-tight text-[#606a76]">{label}</div>
              </article>
            ))}
          </div>
          <div className="mt-[15px] grid gap-[15px] lg:grid-cols-3">
            {proudInsights.map(([value, text]) => (
              <article key={value} className="proud-insight-card">
                <div className="proud-progress-ring" style={{ "--progress": `${value}%` }} aria-label={`${value}%`}>
                  <span>{value}%</span>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const getCourseHash = (title) => {
  switch (title) {
    case "Full Stack Development":
      return "#full-stack-development-course";
    case "HR Executive Training":
      return "#hr-executive-course";
    case "HR Recruitment Training":
      return "#hr-recruitment-course";
    case "Software Quality Testing(QA Testing)":
    case "Software Quality Testing (QA Testing)":
      return "#qa-testing-course";
    case "DSA":
      return "#dsa-course";
    default:
      return "#know-more";
  }
};

const getCourseImageStyle = (title) => {
  switch (title) {
    case "DSA":
      return { backgroundColor: "#213643", objectFit: "contain" };
    case "Full Stack Development":
      return { backgroundColor: "#f8f9fa", objectFit: "contain" };
    case "HR Executive Training":
      return { backgroundColor: "#161717", objectFit: "contain" };
    case "HR Recruitment Training":
      return { backgroundColor: "#141319", objectFit: "contain" };
    case "Software Quality Testing(QA Testing)":
    case "Software Quality Testing (QA Testing)":
      return { backgroundColor: "#0c1f47", objectFit: "contain" };
    default:
      return { objectFit: "cover" };
  }
};

function LearningPace() {
  const courseTabs = ["All", ...learningCourses.map(([, title]) => title)];
  const [activeCourseTab, setActiveCourseTab] = useState("All");
  const visibleCourses =
    activeCourseTab === "All" ? learningCourses : learningCourses.filter(([, title]) => title === activeCourseTab);
  const marqueeCourses = visibleCourses.length > 1 ? [...visibleCourses, ...visibleCourses] : visibleCourses;

  return (
    <section id="courses-page" className="bg-guvi-soft py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-guvi-ink">Your Learning, Your Pace: Explore, Master, Succeed</h2>
          <p className="mt-2 text-[15px] font-medium text-black/55">
            Choose from 1000+ exclusive courses with new courses being published every month.
          </p>
        </div>
         <div className="mt-7 flex flex-wrap justify-center gap-3">
          {courseTabs.map(
            (tab) => (
              <button
                key={tab}
                className={`rounded-md px-4 py-2 text-sm font-bold transition duration-200 cursor-pointer ${activeCourseTab === tab ? "btn-glossy-green border-transparent" : "border border-guvi-line bg-white text-black/70 hover:bg-guvi-soft"
                  }`}
                type="button"
                onClick={() => setActiveCourseTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="course-carousel">
          <div className={`course-carousel-track ${visibleCourses.length > 1 ? "auto-scroll-track auto-scroll-track-slow" : ""}`}>
            {marqueeCourses.map(([category, title, type, image], index) => (
              <a
                key={`${title}-${index}`}
                href={getCourseHash(title)}
                className="course-slide-card block hover:no-underline"
                aria-hidden={index >= visibleCourses.length}
              >
                <article>
                  <div className="h-[150px] overflow-hidden">
                    <img src={image} alt={`${title} course preview`} className="h-full w-full" style={getCourseImageStyle(title)} />
                  </div>
                  <div className="p-5">
                    <span className="rounded-md bg-black px-3 py-1 text-xs font-extrabold text-white">{type}</span>
                    <p className="mt-4 text-xs font-bold text-guvi-deepGreen">{category}</p>
                    <h3 className="mt-2 min-h-[48px] text-[16px] font-extrabold leading-6 text-guvi-ink">{title}</h3>
                    <p className="mt-4 text-sm font-bold text-black/55">Tamil, English</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

function NativeLanguages() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <div className="mx-auto w-full max-w-[690px]">
            <img
              src={nativeLanguagesImage}
              alt="Student learning with native language icons"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mx-auto max-w-[680px] text-center lg:mx-0 lg:text-left">
            <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.01em] text-guvi-ink sm:text-[40px] lg:text-[46px]">
              Leading EdTech Platform for Learning in Native Languages.
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-8 text-guvi-muted sm:text-[22px] sm:leading-[1.55]">
              Jawa EDTECh helps learners build job-ready skills through practical online learning, career-focused training, and placement
              guidance in regional and global languages.
            </p>
            <p className="mt-8 text-[20px] font-semibold text-guvi-ink sm:text-[24px]">
              <span className="font-extrabold text-guvi-deepGreen">Jawa EDTECh</span>
              <span> - Learn, Upskill, and Grow</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const photosPerSlide = 3;
  const totalSlides = Math.max(1, Math.ceil(achievementPhotos.length / photosPerSlide));

  const showPrevious = () => {
    setActiveSlide((current) => (current === 0 ? totalSlides - 1 : current - 1));
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % totalSlides);
  };

  useEffect(() => {
    if (totalSlides < 2 || isHovered) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [totalSlides, isHovered]);

  // Color palette for college logo initials
  const logoColors = [
    { bg: "#e8f5e9", text: "#2e7d32" },
    { bg: "#e3f2fd", text: "#1565c0" },
    { bg: "#fce4ec", text: "#c62828" },
    { bg: "#fff3e0", text: "#e65100" },
    { bg: "#f3e5f5", text: "#6a1b9a" },
    { bg: "#e0f2f1", text: "#00695c" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="shell">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-guvi-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-guvi-deepGreen mb-4">
            <GraduationCap size={14} /> Academic Partners
          </span>
          <h2 className="text-[32px] font-extrabold text-guvi-ink sm:text-[40px]">Our Academic Collaborations</h2>
          <p className="mt-3 max-w-[600px] mx-auto text-[15px] font-medium text-guvi-muted">
            Partnering with leading institutions to deliver industry-relevant training and career development programs.
          </p>
        </div>

        <div
          className="mt-12 flex items-center justify-center gap-4 lg:gap-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            onClick={showPrevious}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/30 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-guvi-green hover:bg-guvi-green/10 md:flex"
            aria-label="Previous collaborations"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="w-full overflow-hidden rounded-2xl bg-transparent">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={`collab-slide-${slideIndex}`} className="min-w-full">
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {achievementPhotos
                      .slice(slideIndex * photosPerSlide, slideIndex * photosPerSlide + photosPerSlide)
                      .map((photo) => {
                        const colorSet = logoColors[(photo.id - 1) % logoColors.length];
                        const initial = photo.college.charAt(0).toUpperCase();
                        return (
                          <article
                            key={photo.id}
                            className="h-full overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-guvi-green hover:shadow-[0_24px_50px_-22px_rgba(16,185,129,0.35)]"
                          >
                            <div className="h-[240px] w-full overflow-hidden">
                              <img
                                src={photo.src}
                                alt={photo.alt}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23999'%3EAdd image file%3C/text%3E%3C/svg%3E";
                                }}
                              />
                            </div>
                            {/* College info bar */}
                            <div className="flex items-center gap-3 px-5 py-4 border-t border-slate-100">
                              <div
                                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-slate-100 overflow-hidden p-0.5"
                              >
                                {photo.logo ? (
                                  <img
                                    src={photo.logo}
                                    alt={`${photo.college} logo`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center font-extrabold text-[16px]" style="background: ${colorSet.bg}; color: ${colorSet.text}">${initial}</div>`;
                                    }}
                                  />
                                ) : (
                                  <div
                                    className="w-full h-full flex items-center justify-center font-extrabold text-[16px]"
                                    style={{ background: colorSet.bg, color: colorSet.text }}
                                  >
                                    {initial}
                                  </div>
                                )}
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-[14px] font-bold text-guvi-ink leading-tight truncate">{photo.college}</h4>
                                <div className="flex items-center gap-1 mt-0.5">
                                  <MapPin size={11} className="text-guvi-muted flex-shrink-0" />
                                  <span className="text-[12px] font-semibold text-guvi-muted">{photo.location}</span>
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/30 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-guvi-green hover:bg-guvi-green/10 md:flex"
            aria-label="Next collaborations"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeSlide
                  ? "w-6 bg-guvi-green shadow-[0_0_0_4px_rgba(25,217,80,0.12)]"
                  : "w-2.5 bg-guvi-green/35 hover:bg-guvi-green/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-guvi-soft py-12">
      <div className="shell text-center">
        <h2 className="text-[24px] font-extrabold text-guvi-ink">Enhance your Skills NOW!</h2>
        <a href="#courses-page" className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-extrabold text-white">
          Explore Now
        </a>
      </div>
    </section>
  );
}

export default Home;
