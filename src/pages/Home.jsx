import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import LiveCard from "../components/LiveCard.jsx";
import {
  accreditationItems,
  achievementPhotos,
  companyLogos,
  journeyLearners,
  learnerCards,
  learningCourses,
  liveCards
} from "./homeData.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-white text-guvi-ink">
      <Header />

      <main>
        <HeroOffer />
        <Accreditations />
        <LiveClasses />
        <JourneyOfLearners />
        <StudentTestimonials />
        <HiringStats />
        <LearningPace />
        <AchievementsGallery />
        <FinalCta />
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

function useManualSlider(itemCount) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const nextIndex = (index + itemCount) % itemCount;
    setActiveIndex(nextIndex);
    trackRef.current?.children[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  };

  return {
    activeIndex,
    trackRef,
    goNext: () => scrollToIndex(activeIndex + 1),
    goPrevious: () => scrollToIndex(activeIndex - 1),
    scrollToIndex
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
  return (
    <section id="home" className="hero-offer">
      <div className="shell flex min-h-[374px] items-center">
        <div className="relative z-10 max-w-[760px] pt-1 xl:max-w-[930px]">
          <p className="text-[18px] font-semibold leading-tight tracking-[-0.01em] text-black sm:text-[25px]">
            Some People Take a Break. Others Build an Advantage.
          </p>
          <h1 className="mt-5 text-[30px] font-extrabold leading-tight tracking-[-0.02em] text-black sm:text-[42px] lg:text-[46px]">
            Save <span className="text-guvi-deepGreen">Rs. 5,000</span> on Jawanexis Zen Class
          </h1>
          <div className="mt-7 inline-flex min-h-[48px] max-w-[760px] items-center rounded-full border-2 border-black bg-white px-5 text-[12px] font-extrabold leading-tight text-black shadow-[inset_10px_0_0_#19d950] sm:px-6 sm:text-[14px] lg:text-[15px]">
            HR Executive Training | HR Recruitment Training | Full Stack Development | Software Quality Testing(QA Testing) | Data Structure And Algorithms(DSA)
          </div>
          <a
            href="#internship"
            className="mt-7 flex h-[48px] w-[220px] items-center justify-center rounded-md bg-black text-[17px] font-extrabold text-white shadow-sm sm:h-[54px] sm:w-[260px] sm:text-[21px]"
          >
            Claim Rs. 5K Off Now
          </a>
          <p className="mt-4 text-[16px] font-medium text-black/70">*Summer Offer Ends Soon</p>
        </div>
      </div>
    </section>
  );
}

function Accreditations() {
  return (
    <section className="bg-guvi-soft py-[66px]">
      <div className="shell">
        <h2 className="text-center text-[26px] font-medium text-black">Our Students Work On</h2>
        <div className="logo-marquee mt-8" aria-label="Companies where our students work">
          <div className="logo-track">
            {[...accreditationItems, ...accreditationItems].map((item, index) => (
              <article key={`${item.name}-${index}`} className="logo-card" aria-hidden={index >= accreditationItems.length}>
                <img src={item.logo} alt={`${item.name} logo`} className="company-logo-img" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveClasses() {
  return (
    <section id="internship" className="bg-white pb-[84px] pt-[94px]">
      <div className="shell">
        <div className="mx-auto max-w-[1030px] text-center">
          <h2 className="flex items-center justify-center gap-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-guvi-ink sm:text-[40px]">
            <span className="h-[21px] w-[21px] rounded-full bg-guvi-green" />
            Live Classes + Placement Guidance
          </h2>
          <p className="mt-6 text-[18px] font-medium leading-[1.45] text-guvi-muted sm:text-[24px]">
            Jawanexis offers one of the industry's leading Project Based Career Programs that promises
            <br className="hidden lg:block" />
            Placement Guidance on completing the program.
          </p>
        </div>

        <div className="mt-[64px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {liveCards.map(([thumb, title, language]) => (
            <LiveCard key={title} thumb={thumb} title={title} language={language} />
          ))}
        </div>

        <div className="mt-[52px] flex items-center justify-center gap-6">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black/40 text-black/40" type="button" aria-label="Previous programs">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <div className="flex h-[35px] items-center gap-[11px] rounded-full bg-guvi-soft px-4">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span key={dot} className={`h-[13px] w-[13px] rounded-full ${dot === 0 ? "bg-guvi-green" : "bg-guvi-green/35"}`} />
            ))}
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black text-black" type="button" aria-label="Next programs">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-[45px] text-center">
          <a href="#courses-page" className="inline-flex h-[73px] w-[276px] items-center justify-center rounded-md border border-black text-[20px] font-bold text-black">
            Explore All Programs
          </a>
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
          <div className="manual-feedback-track journey-slider-track" ref={slider.trackRef}>
            {journeyLearners.map((learner) => (
              <article key={`${learner.name}-${learner.company}`} className="journey-slide-card">
                <div className="journey-slide-top">
                  <img src={learner.photo} alt={`${learner.name} photo`} className="journey-photo" />
                  <div className="mt-5">
                    <h3 className="text-[22px] font-extrabold leading-tight text-guvi-ink">{learner.name}</h3>
                    <p className="mt-2 text-[15px] font-extrabold uppercase tracking-[0.12em] text-guvi-deepGreen">{learner.role}</p>
                  </div>
                </div>
                <div className="journey-slide-body">
                  <span className="journey-badge">1</span>
                  <div>
                    <p className="text-sm font-bold text-black/45">Placed at</p>
                    <p className="mt-1 text-[20px] font-extrabold leading-tight text-guvi-ink">{learner.company}</p>
                    {learner.location ? <p className="mt-2 text-sm font-bold text-black/50">{learner.location}</p> : null}
                  </div>
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
          <div className="manual-feedback-track testimonials-track" ref={slider.trackRef}>
            {learnerCards.map(([name, company, course, story]) => (
              <article key={name} className="testimonial-slide-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-guvi-green text-[24px] font-extrabold text-black">
                    {name.charAt(0)}
                  </div>
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
    ["4464724", "Learners"],
    ["194", "Mentors"],
    ["58892935", "Lines of Code Submission"],
    ["1673", "Videos"]
  ];

  const proudInsights = [
    [72, "of Learners complete their courses within 3 months"],
    [78, "of Learners could recollect the concepts faster"],
    [84, "of Learners have better understanding over complex topics"]
  ];

  return (
    <section id="about-us" className="bg-white py-16">
      <div className="shell">
        <h2 className="text-center text-[24px] font-extrabold text-guvi-ink">Where Do Our Students Work?</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {companyLogos.map((company) => (
            <div key={company.name} className="flex h-[74px] items-center justify-center rounded-md border border-guvi-line bg-white px-4">
              <img src={company.logo} alt={`${company.name} logo`} className="company-grid-logo" />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-[1096px]">
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

function LearningPace() {
  const courseTabs = ["All", ...learningCourses.map(([, title]) => title)];
  const [activeCourseTab, setActiveCourseTab] = useState("All");
  const visibleCourses =
    activeCourseTab === "All" ? learningCourses : learningCourses.filter(([, title]) => title === activeCourseTab);

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
                className={`rounded-md border px-4 py-2 text-sm font-bold ${
                  activeCourseTab === tab ? "border-guvi-green bg-guvi-green text-black" : "border-guvi-line bg-white text-black/70"
                }`}
                type="button"
                onClick={() => setActiveCourseTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {visibleCourses.map(([category, title, type, image]) => (
            <article key={title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-[150px] overflow-hidden">
                <img src={image} alt={`${title} course preview`} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <span className="rounded-md bg-black px-3 py-1 text-xs font-extrabold text-white">{type}</span>
                <p className="mt-4 text-xs font-bold text-guvi-deepGreen">{category}</p>
                <h3 className="mt-2 min-h-[48px] text-[16px] font-extrabold leading-6 text-guvi-ink">{title}</h3>
                <p className="mt-4 text-sm font-bold text-black/55">Tamil, English</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#courses-page" className="inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-extrabold text-white">
            Explore Courses
          </a>
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

  return (
    <section className="bg-white py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-guvi-ink">Achievements</h2>
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
            aria-label="Previous achievements"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="w-full overflow-hidden rounded-2xl bg-transparent">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={`achievement-slide-${slideIndex}`} className="min-w-full">
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {achievementPhotos
                      .slice(slideIndex * photosPerSlide, slideIndex * photosPerSlide + photosPerSlide)
                      .map((photo) => (
                        <article
                          key={photo.id}
                          className="h-full min-h-[300px] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-guvi-green hover:shadow-[0_24px_50px_-22px_rgba(16,185,129,0.35)]"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23999'%3EAdd image file%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/30 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-guvi-green hover:bg-guvi-green/10 md:flex"
            aria-label="Next achievements"
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
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeSlide
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
