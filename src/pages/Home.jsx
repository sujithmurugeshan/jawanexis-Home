import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import LiveCard from "../components/LiveCard.jsx";
import {
  accreditationItems,
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
        <div className="max-w-[1040px] pt-1">
          <p className="text-[22px] font-semibold leading-tight tracking-[-0.01em] text-black sm:text-[31px]">
            Some People Take a Break. Others Build an Advantage.
          </p>
          <h1 className="mt-6 text-[36px] font-extrabold leading-tight tracking-[-0.02em] text-black sm:text-[52px] lg:text-[58px]">
            Save <span className="text-[#18b94b]">Rs. 5,000</span> on HCL GUVI's Zen Class
          </h1>
          <div className="mt-8 inline-flex min-h-[60px] max-w-full items-center rounded-full border-2 border-[#ec4b43] bg-white px-6 text-[15px] font-extrabold leading-tight text-black shadow-[inset_12px_0_0_#f5ee25] sm:px-7 sm:text-[22px]">
            HR Executive Training | HR Recruitment Training | Full Stack Development | Software Quality Testing(QA Testing) | Data Structure And Algorithms(DSA)
          </div>
          <a
            href="#internship"
            className="mt-8 flex h-[54px] w-[250px] items-center justify-center rounded-md bg-[#6f11ee] text-[21px] font-extrabold text-white shadow-sm sm:h-[62px] sm:w-[309px] sm:text-[26px]"
          >
            Claim Rs. 5K Off Now
          </a>
          <p className="mt-4 text-[20px] font-medium text-zinc-700">*Summer Offer Ends Soon</p>
        </div>
      </div>
    </section>
  );
}

function Accreditations() {
  return (
    <section className="bg-guvi-soft py-[66px]">
      <div className="shell">
        <h2 className="text-center text-[26px] font-medium text-black">Our Accreditations & Partnerships</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {accreditationItems.map((item) => (
            <article key={item.name} className="flex h-[123px] items-center justify-center rounded-lg bg-white px-4 text-center">
              <div className="flex items-center justify-center gap-3">
                {item.mark && (
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white ${item.markStyle}`}>
                    {item.mark}
                  </span>
                )}
                <div className="text-left">
                  <div className={item.style}>{item.name}</div>
                  {item.sub && <div className="mt-1 text-[11px] font-bold leading-tight text-zinc-600">{item.sub}</div>}
                </div>
              </div>
            </article>
          ))}
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
            <span className="h-[21px] w-[21px] rounded-full bg-guvi-red" />
            Live Classes + Placement Guidance
          </h2>
          <p className="mt-6 text-[18px] font-medium leading-[1.45] text-guvi-muted sm:text-[24px]">
            HCL GUVI offers one of the industry's leading Project Based Career Programs that promises
            <br className="hidden lg:block" />
            Placement Guidance on completing the program.
          </p>
        </div>

        <div className="mt-[64px] grid gap-5 lg:grid-cols-4">
          {liveCards.map(([thumb, title, language]) => (
            <LiveCard key={title} thumb={thumb} title={title} language={language} />
          ))}
        </div>

        <div className="mt-[52px] flex items-center justify-center gap-6">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-400 text-zinc-400" type="button" aria-label="Previous programs">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <div className="flex h-[35px] items-center gap-[11px] rounded-full bg-[#e7f9eb] px-4">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span key={dot} className={`h-[13px] w-[13px] rounded-full ${dot === 0 ? "bg-[#1fd355]" : "bg-[#94e7a8]"}`} />
            ))}
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black text-black" type="button" aria-label="Next programs">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-[45px] text-center">
          <a href="#courses-page" className="inline-flex h-[73px] w-[276px] items-center justify-center rounded-md border border-zinc-600 text-[20px] font-bold text-zinc-600">
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
        <div className="overflow-hidden rounded-xl bg-[#fbf4ff]">
          <div className="grid min-h-[250px] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-10 lg:p-14">
              <h2 className="text-[30px] font-extrabold leading-tight text-guvi-ink">Not sure which path to choose?</h2>
              <p className="mt-4 max-w-2xl text-[18px] leading-8 text-zinc-600">
                Find a career program that fits your goals, language preference, and current skill level.
              </p>
              <a href="#internship" className="mt-7 inline-flex h-12 items-center justify-center rounded-md bg-[#19d950] px-7 text-[17px] font-extrabold text-white">
                Get Expert Guidance
              </a>
            </div>
            <div className="relative hidden items-end justify-center bg-gradient-to-br from-[#efe7ff] to-[#e8fff1] lg:flex">
              <div className="absolute bottom-0 h-[225px] w-[225px] rounded-full bg-[#19d950]/20" />
              <div className="relative mb-8 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white shadow-card">
                <span className="text-[72px] font-extrabold text-[#19d950]">?</span>
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
    <section className="bg-[#f7f7fb] py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold text-guvi-ink">What Our Learners Are Saying!</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {learnerCards.map(([name, role, skill, job]) => (
            <article key={name} className="rounded-lg border border-[#e6efe8] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9fbe3] text-[20px] font-extrabold text-[#0d8d37]">
                  {name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-guvi-ink">{name}</h3>
                  <p className="text-sm font-bold text-zinc-500">{role}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-md bg-[#effbf2] px-4 py-3 text-sm font-bold text-[#0b8a32]">{skill}</div>
                <div className="rounded-md bg-[#effbf2] px-4 py-3 text-sm font-bold text-[#0b8a32]">{job}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex h-[28px] items-center gap-2 rounded-full bg-white px-4">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className={`h-2.5 w-2.5 rounded-full ${dot === 1 ? "bg-[#19d950]" : "bg-[#9cecab]"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HiringStats() {
  return (
    <section id="about-us" className="bg-white py-16">
      <div className="shell">
        <h2 className="text-center text-[24px] font-extrabold text-guvi-ink">Where Do Our Students Work?</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {companyLogos.map((logo) => (
            <div key={logo} className="flex h-[42px] items-center justify-center rounded-md border border-guvi-line bg-white px-3 text-[13px] font-extrabold text-zinc-600">
              {logo}
            </div>
          ))}
        </div>
        <h3 className="mt-10 text-center text-[20px] font-extrabold text-guvi-ink">We are proud of...</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            ["4464724", "Learners"],
            ["194", "Mentors"],
            ["58892935", "Lines of Code"],
            ["1673", "Videos"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-md bg-[#f0f7f1] py-4 text-center">
              <div className="text-[20px] font-extrabold text-[#15a647]">{value}</div>
              <div className="mt-1 text-sm font-bold text-zinc-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPace() {
  return (
    <section className="bg-[#f7f7fb] py-20">
      <div className="shell">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold text-guvi-ink">Your Learning, Your Pace: Explore, Master, Succeed</h2>
          <p className="mt-2 text-[15px] font-medium text-zinc-500">
            Choose from 1000+ exclusive courses with new courses being published every month.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["HR Executive Training", "HR Recruitment Training", "Full Stack Development", "Software Quality Testing(QA Testing)", "Data Structure And Algorithms(DSA)"].map(
            (tab, index) => (
              <button
                key={tab}
                className={`rounded-md border px-4 py-2 text-sm font-bold ${
                  index === 0 ? "border-[#19d950] bg-[#e8fff0] text-[#0b8a32]" : "border-guvi-line bg-white text-zinc-600"
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
                <span className="rounded-md bg-[#e8295d] px-3 py-1 text-xs font-extrabold text-white">{type}</span>
                <p className="mt-4 text-xs font-bold text-[#0b8a32]">{category}</p>
                <h3 className="mt-2 min-h-[48px] text-[16px] font-extrabold leading-6 text-guvi-ink">{title}</h3>
                <p className="mt-4 text-sm font-bold text-zinc-500">Tamil, English</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#courses-page" className="inline-flex h-10 items-center justify-center rounded-md bg-[#19d950] px-6 text-sm font-extrabold text-white">
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
                index === 0 ? "border-[#19d950] bg-[#e8fff0] text-[#0b8a32]" : "border-guvi-line bg-white text-zinc-600"
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mx-auto mt-8 grid max-w-[1040px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-lg border border-guvi-line bg-white p-4 shadow-sm">
            <div className="rounded-md bg-[#f4f7fb] p-4">
              <div className="h-[250px] rounded-md border border-[#d8e0ed] bg-white p-4">
                <div className="h-8 rounded bg-[#ecf1f8]" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-28 rounded bg-[#d8f8df]" />
                  <div className="h-28 rounded bg-[#eef1f5]" />
                  <div className="h-28 rounded bg-[#eef1f5]" />
                </div>
                <div className="mt-4 h-20 rounded bg-[#eef1f5]" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-extrabold text-guvi-ink">CodeKata</h3>
            <p className="mt-4 text-[17px] leading-8 text-zinc-600">
              CodeKata is an interactive platform for programming practice. Learn to code, improve problem solving skills, and prepare for technical interviews.
            </p>
            <a href="#courses-page" className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#19d950] px-6 text-sm font-extrabold text-white">
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
            <button className="flex h-12 items-center gap-3 rounded-md border border-guvi-line px-4 text-[18px] font-medium text-zinc-600" type="button">
              Sort By <ChevronDown size={18} aria-hidden="true" />
            </button>
            <button className="flex h-12 items-center gap-3 rounded-md border border-guvi-line px-4 text-[18px] font-medium text-zinc-600" type="button">
              Explore <ChevronDown size={18} aria-hidden="true" />
            </button>
            <label className="flex h-12 w-full items-center gap-3 rounded-md border border-guvi-line px-4 text-zinc-500 sm:w-[300px]">
              <Search size={22} aria-hidden="true" />
              <input className="min-w-0 flex-1 border-0 bg-transparent text-[18px] outline-none" placeholder="Search for anything..." />
            </label>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 overflow-hidden">
          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-500" type="button" aria-label="Previous language">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {languages.map((lang, index) => (
              <button
                key={lang}
                className={`h-[52px] shrink-0 rounded-lg border px-5 text-[20px] font-bold ${
                  index === 0 ? "border-[#1da04b] bg-[#eafff0] text-guvi-ink" : "border-guvi-line bg-white text-guvi-ink"
                }`}
                type="button"
              >
                {lang}
              </button>
            ))}
          </div>
          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-500" type="button" aria-label="Next language">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {courseCards.map(([type, title, lang, duration]) => (
            <article key={title} className="min-h-[318px] rounded-lg bg-white p-6 shadow-[0_3px_18px_rgba(15,23,42,0.08)]">
              <span
                className={`inline-flex rounded-md px-8 py-2 text-base font-extrabold text-white ${
                  type === "Free" ? "bg-[#2f80ed]" : type === "Combo" ? "bg-[#f59e0b]" : "bg-[#e91e63]"
                }`}
              >
                {type}
              </span>
              <h3 className="mt-8 min-h-[76px] text-[22px] font-extrabold leading-tight text-guvi-ink">{title}</h3>
              <div className="mt-10 flex items-center justify-between text-sm font-bold text-zinc-500">
                <span>{lang}</span>
                <span>{duration}</span>
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
    <section className="bg-[#f7f7fb] py-12">
      <div className="shell text-center">
        <h2 className="text-[24px] font-extrabold text-guvi-ink">Enhance your Skills NOW!</h2>
        <a href="#courses-page" className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#19d950] px-6 text-sm font-extrabold text-white">
          Explore Now
        </a>
      </div>
    </section>
  );
}

export default Home;
