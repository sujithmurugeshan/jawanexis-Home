import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import LiveCard from "../components/LiveCard.jsx";
import {
  accreditationItems,
  awardSlides,
  companyLogos,
  courseCards,
  languages,
  learnerCards,
  learningCourses,
  liveCards,
  practiceTabs
} from "./homeData.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-white text-guvi-ink">
      <Header />

      <main>
        <HeroOffer />
        <Accreditations />
        <LiveClasses />
        <PathChooser />
        <LearnerStories />
        <AwardsAchievements />
        <HiringStats />
        <LearningPace />
        <PracticePlatforms />
        <CoursesPagePreview />
        <FinalCta />
      </main>

      <Footer />
      <FloatingChatButton />
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
            Save <span className="text-guvi-deepGreen">Rs. 5,000</span> on Jawa EDTech Zen Class
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

function PathChooser() {
  return (
    <section className="bg-white pb-20">
      <div className="shell">
        <div className="overflow-hidden rounded-xl bg-guvi-soft">
          <div className="grid min-h-[250px] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-10 lg:p-14">
              <h2 className="text-[30px] font-extrabold leading-tight text-guvi-ink">Not sure which path to choose?</h2>
              <p className="mt-4 max-w-2xl text-[18px] leading-8 text-black/65">
                Find a career program that fits your goals, language preference, and current skill level.
              </p>
              <a href="#internship" className="mt-7 inline-flex h-12 items-center justify-center rounded-md bg-black px-7 text-[17px] font-extrabold text-white">
                Get Expert Guidance
              </a>
            </div>
            <div className="relative hidden items-end justify-center bg-gradient-to-br from-white to-guvi-mint lg:flex">
              <div className="absolute bottom-0 h-[225px] w-[225px] rounded-full bg-guvi-green/20" />
              <div className="relative mb-8 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white shadow-card">
                <span className="text-[72px] font-extrabold text-guvi-deepGreen">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnerStories() {
  return (
    <section className="bg-guvi-soft py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold text-guvi-ink">Journey Of Our Learners</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {learnerCards.map(([name, company, course, story]) => (
            <article key={name} className="rounded-lg border border-guvi-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-guvi-green text-[20px] font-extrabold text-black">
                  {name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-guvi-ink">{name}</h3>
                  <p className="text-sm font-bold text-black/55">{company}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-md bg-guvi-soft px-4 py-3 text-sm font-bold text-guvi-deepGreen">{course}</div>
                <p className="text-sm font-medium leading-6 text-black/65">{story}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex h-[28px] items-center gap-2 rounded-full bg-white px-4">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className={`h-2.5 w-2.5 rounded-full ${dot === 1 ? "bg-guvi-green" : "bg-guvi-green/35"}`} />
            ))}
          </div>
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

function AwardsAchievements() {
  const [activeAward, setActiveAward] = useState(0);
  const slide = awardSlides[activeAward];

  const showPrevious = () => {
    setActiveAward((current) => (current === 0 ? awardSlides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveAward((current) => (current + 1) % awardSlides.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="shell">
        <div className="awards-panel">
          <div className="awards-copy">
            <div className="awards-title-wrap">
              <span className="awards-laurel awards-laurel-left" aria-hidden="true" />
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-guvi-deepGreen">Achievements</p>
                <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-guvi-ink">{slide.title}</h2>
                <p className="mt-4 text-[17px] font-medium leading-7 text-black/65">{slide.description}</p>
              </div>
              <span className="awards-laurel awards-laurel-right" aria-hidden="true" />
            </div>
          </div>
          <div className="awards-image-wrap">
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          </div>
          <div className="awards-controls">
            <button className="awards-arrow awards-arrow-left" type="button" aria-label="Previous achievement" onClick={showPrevious}>
              <ArrowLeft size={24} aria-hidden="true" />
            </button>
            <button className="awards-arrow awards-arrow-right" type="button" aria-label="Next achievement" onClick={showNext}>
              <ArrowRight size={24} aria-hidden="true" />
            </button>
            <div className="awards-dots">
              {awardSlides.map((award, index) => (
                <button
                  key={award.title}
                  className={`awards-dot ${index === activeAward ? "awards-dot-active" : ""}`}
                  type="button"
                  aria-label={`Show ${award.title}`}
                  onClick={() => setActiveAward(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
  return (
    <section className="bg-guvi-soft py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-guvi-ink">Your Learning, Your Pace: Explore, Master, Succeed</h2>
          <p className="mt-2 text-[15px] font-medium text-black/55">
            Choose from 1000+ exclusive courses with new courses being published every month.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["HR Executive Training", "HR Recruitment Training", "Full Stack Development", "Software Quality Testing(QA Testing)", "DSA"].map(
            (tab, index) => (
              <button
                key={tab}
                className={`rounded-md border px-4 py-2 text-sm font-bold ${
                  index === 0 ? "border-guvi-green bg-guvi-green text-black" : "border-guvi-line bg-white text-black/70"
                }`}
                type="button"
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {learningCourses.slice(0, 4).map(([category, title, type, image]) => (
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

function PracticePlatforms() {
  return (
    <section className="bg-white py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold text-guvi-ink">Learn. Practice. Earn. Have Fun!</h2>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {practiceTabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-md border px-4 py-2 text-sm font-bold ${
                index === 0 ? "border-guvi-green bg-guvi-green text-black" : "border-guvi-line bg-white text-black/70"
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-[1040px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg border border-guvi-line bg-white p-4 shadow-sm">
            <div className="rounded-md bg-guvi-soft p-4">
              <div className="h-[250px] rounded-md border border-guvi-line bg-white p-4">
                <div className="h-8 rounded bg-black" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-28 rounded bg-guvi-green" />
                  <div className="h-28 rounded bg-guvi-soft" />
                  <div className="h-28 rounded bg-guvi-soft" />
                </div>
                <div className="mt-4 h-20 rounded bg-guvi-soft" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-extrabold text-guvi-ink">CodeKata</h3>
            <p className="mt-4 text-[17px] leading-8 text-black/65">
              CodeKata is an interactive platform for programming practice. Learn to code, improve problem solving skills, and prepare for technical interviews.
            </p>
            <a href="#courses-page" className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-extrabold text-white">
              Explore CodeKata
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesPagePreview() {
  return (
    <section id="courses-page" className="border-t border-guvi-line bg-white pt-[190px]">
      <div className="shell pb-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[32px] font-extrabold tracking-[-0.02em] text-black sm:text-[40px]">All Courses</h2>
          <div className="flex flex-wrap gap-4">
            <button className="flex h-12 items-center gap-3 rounded-md border border-guvi-line px-4 text-[18px] font-medium text-black/70" type="button">
              Sort By <ChevronDown size={18} aria-hidden="true" />
            </button>
            <button className="flex h-12 items-center gap-3 rounded-md border border-guvi-line px-4 text-[18px] font-medium text-black/70" type="button">
              Explore <ChevronDown size={18} aria-hidden="true" />
            </button>
            <label className="flex h-12 w-full items-center gap-3 rounded-md border border-guvi-line px-4 text-black/55 sm:w-[300px]">
              <Search size={22} aria-hidden="true" />
              <input className="min-w-0 flex-1 border-0 bg-transparent text-[18px] outline-none" placeholder="Search for anything..." />
            </label>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 overflow-hidden">
          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black" type="button" aria-label="Previous language">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {languages.map((lang, index) => (
              <button
                key={lang}
                className={`h-[52px] shrink-0 rounded-lg border px-5 text-[20px] font-bold ${
                  index === 0 ? "border-guvi-green bg-guvi-green text-black" : "border-guvi-line bg-white text-black"
                }`}
                type="button"
              >
                {lang}
              </button>
            ))}
          </div>
          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black" type="button" aria-label="Next language">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {courseCards.map(([type, title, lang, duration]) => (
            <article key={title} className="min-h-[228px] rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(15,23,42,0.08)]">
              <span
                className={`inline-flex rounded-md px-4 py-1.5 text-sm font-extrabold text-white ${
                  "bg-black"
                }`}
              >
                {type}
              </span>
              <h3 className="mt-5 min-h-[72px] text-[18px] font-extrabold leading-snug text-guvi-ink">{title}</h3>
              <div className="mt-7 flex items-center justify-between gap-3 text-xs font-bold text-black/55">
                <span>{lang}</span>
                <span className="text-right">{duration}</span>
              </div>
            </article>
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
