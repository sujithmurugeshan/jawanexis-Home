import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Gift,
  GraduationCap,
  Laptop,
  Menu,
  Play,
  Puzzle,
  Star,
  Trophy,
  Users,
  X
} from "lucide-react";
import { useState } from "react";
import heroLearning from "./assets/hero-learning.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Internship", href: "#internship" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" }
];

const programs = [
  {
    title: "HR Executive Training",
    tag: "Career-ready HR skills",
    languages: "Tamil, English",
    accent: "bg-emerald-50 text-emerald-700"
  },
  {
    title: "HR Recruitment Training",
    tag: "Hiring and talent acquisition",
    languages: "Tamil, English",
    accent: "bg-amber-50 text-amber-700"
  },
  {
    title: "Full Stack Development",
    tag: "Project based career program",
    languages: "Tamil, English",
    accent: "bg-sky-50 text-sky-700"
  },
  {
    title: "Software Quality Testing(QA Testing)",
    tag: "Manual and automation testing",
    languages: "Tamil, English",
    accent: "bg-rose-50 text-rose-700"
  },
  {
    title: "Data Structure And Algorithms(DSA)",
    tag: "Problem solving and coding interviews",
    languages: "Tamil, English",
    accent: "bg-violet-50 text-violet-700"
  }
];

const practiceTools = [
  {
    icon: Code2,
    title: "CodeKata",
    text: "Structured coding problems to build speed, accuracy, and interview readiness."
  },
  {
    icon: Laptop,
    title: "WebKata",
    text: "Hands-on HTML, CSS, JavaScript, and Bootstrap practice in a browser workspace."
  },
  {
    icon: Database,
    title: "SQLKata",
    text: "Realistic SQL exercises for querying, filtering, joining, and optimizing data."
  },
  {
    icon: Puzzle,
    title: "FixTheCode",
    text: "Debugging challenges that sharpen practical problem-solving habits."
  }
];

const stats = [
  ["4.8M+", "learners"],
  ["2", "languages"],
  ["2500+", "corporate partners"],
  ["200+", "self-paced courses"]
];

const courseChips = [
  "HR Executive Training",
  "HR Recruitment Training",
  "Full Stack Development",
  "Software Quality Testing(QA Testing)",
  "Data Structure And Algorithms(DSA)"
];

const testimonials = [
  {
    name: "Sri Hari K",
    role: "Full Stack Developer",
    text: "The mentor support and mock interviews helped me turn consistent practice into a first tech role."
  },
  {
    name: "B Swathy",
    role: "UI/UX Designer",
    text: "The live program gave me structure, portfolio reviews, and the confidence to switch paths."
  },
  {
    name: "Kesavan",
    role: "Data Scientist",
    text: "Learning in a familiar language made tough concepts easier to revisit and master."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-guvi-ink">
      <header className="sticky top-0 z-50 border-b border-guvi-line bg-white/95 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#home" className="focus-ring flex items-center gap-2 rounded-md" aria-label="HCL GUVI home">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-guvi-green text-lg font-extrabold text-white">
              G
            </span>
            <span className="text-xl font-extrabold tracking-normal text-guvi-dark">HCL GUVI</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-700 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="focus-ring rounded-md hover:text-guvi-green">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#login" className="focus-ring rounded-md px-4 py-2 text-sm font-semibold text-zinc-700 hover:text-guvi-green">
              Login
            </a>
            <a
              href="#signup"
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-guvi-green px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#099f4e]"
            >
              Sign up <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-guvi-line lg:hidden"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-guvi-line bg-white lg:hidden">
            <div className="section-shell grid gap-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="focus-ring rounded-md px-2 py-2 text-sm font-semibold text-zinc-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <a href="#login" className="focus-ring rounded-md border border-guvi-line px-4 py-2 text-center text-sm font-semibold">
                  Login
                </a>
                <a href="#signup" className="focus-ring rounded-md bg-guvi-green px-4 py-2 text-center text-sm font-bold text-white">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="border-b border-guvi-line bg-[#fbfffc]">
          <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm font-bold text-guvi-green">
                <Star size={16} fill="currentColor" /> Learn to code in your native language
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-guvi-dark sm:text-5xl lg:text-6xl">
                Build tech skills with live classes, courses, and practice.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                A GUVI-style learning experience for career programs, self-paced courses, coding practice,
                rewards, and learner progress in one clean platform.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#internship"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-guvi-green px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-[#099f4e]"
                >
                  Explore programs <ArrowRight size={18} />
                </a>
                <a
                  href="#practice"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-6 py-3 text-base font-bold text-guvi-dark hover:border-guvi-green hover:text-guvi-green"
                >
                  <Play size={18} /> Start practice
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-md border border-guvi-line bg-white p-4">
                    <div className="text-2xl font-extrabold text-guvi-dark">{value}</div>
                    <div className="mt-1 text-sm font-medium text-zinc-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroLearning}
                alt="Learners working on programming skills in a modern classroom"
                className="h-auto w-full rounded-lg border border-guvi-line bg-white object-cover shadow-soft"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["IIT-M style rigor", "Placement guidance", "Native language learning"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-guvi-line bg-white px-3 py-3 text-sm font-bold text-zinc-700">
                    <Check className="shrink-0 text-guvi-green" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="section-shell">
            <p className="text-center text-sm font-bold uppercase tracking-normal text-zinc-500">Accreditations and partnerships</p>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">
              {["IIT Madras", "IIM Ahmedabad", "HCL Group", "IIT-M Pravartak", "Industry mentors"].map((name) => (
                <div key={name} className="rounded-md border border-guvi-line bg-zinc-50 px-4 py-4 text-center text-sm font-bold text-zinc-700">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className="border-y border-guvi-line bg-[#f8faf9] py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Live Classes + Placement Guidance"
              title="Career programs built around projects, mentors, and outcomes."
              text="Choose a guided learning path with structured sessions, assignments, reviews, and interview preparation."
            />
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <article key={program.title} className="rounded-lg border border-guvi-line bg-white p-5 shadow-sm">
                  <span className={`inline-flex rounded-md px-3 py-1 text-xs font-bold ${program.accent}`}>{program.tag}</span>
                  <h3 className="mt-5 text-xl font-extrabold text-guvi-dark">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{program.languages}</p>
                  <a href="#signup" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-bold text-guvi-green">
                    Syllabus <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="bg-white py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Self-paced courses"
                title="Learn on your schedule with focused career tracks."
                text="Choose from focused training programs for HR, development, and software testing roles."
              />
              <a
                href="#signup"
                className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-guvi-dark px-5 py-3 text-sm font-bold text-white hover:bg-black"
              >
                View all courses <ArrowRight size={17} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {courseChips.map((chip) => (
                <div key={chip} className="rounded-lg border border-guvi-line bg-[#fbfffc] p-4 text-center">
                  <BookOpen className="mx-auto text-guvi-green" size={24} />
                  <p className="mt-3 text-sm font-extrabold text-guvi-dark">{chip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="practice" className="border-y border-guvi-line bg-guvi-mint py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Practice platforms"
              title="Turn lessons into muscle memory."
              text="Practice coding, web development, SQL, debugging, and compiler workflows in one learning loop."
            />
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {practiceTools.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-guvi-green text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-guvi-dark">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
                  <a href="#signup" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-bold text-guvi-green">
                    Try now <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="bg-white py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-3">
            <FeatureBlock icon={Trophy} title="Leaderboard" text="Track progress, compete with peers, and stay motivated through visible practice streaks." />
            <FeatureBlock icon={Gift} title="Rewards" text="Earn learning credits through videos, exercises, referrals, and consistent platform engagement." />
            <FeatureBlock icon={BriefcaseBusiness} title="Profile" text="Showcase your completed skills, projects, and learning journey as a career-ready portfolio." />
          </div>
        </section>

        <section className="border-y border-guvi-line bg-[#f8faf9] py-16">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Learner journeys"
              title="Stories that make the platform feel career-first."
              text="A strong edtech landing page needs social proof, role changes, ratings, and clear learner outcomes."
            />
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-lg border border-guvi-line bg-white p-5 shadow-sm">
                  <div className="flex gap-1 text-amber-400" aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-zinc-600">{item.text}</p>
                  <div className="mt-5 border-t border-guvi-line pt-4">
                    <p className="font-extrabold text-guvi-dark">{item.name}</p>
                    <p className="text-sm font-medium text-zinc-500">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="bg-white py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Our products"
                title="A broader learning ecosystem for students, teams, and companies."
                text="The page can route different audiences into kids coding, corporate training, placement preparation, and open resources."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [GraduationCap, "HackerKID", "Coding classes for school learners."],
                [Users, "For Corporates", "Hiring and training solutions."],
                [Award, "Placement Prep", "Aptitude and interview readiness."],
                [ChevronDown, "Free Resources", "Blogs, guides, and learn hubs."]
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-lg border border-guvi-line bg-[#fbfffc] p-5">
                  <Icon className="text-guvi-green" size={24} />
                  <h3 className="mt-4 font-extrabold text-guvi-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signup" className="bg-guvi-dark py-16 text-white">
          <div className="section-shell flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-normal text-emerald-300">Ready to begin?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-normal sm:text-4xl">Start your learning journey with a structured path.</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Pick a course, practice daily, collect proof of work, and move toward a role with confidence.
              </p>
            </div>
            <a
              href="#home"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-guvi-green px-6 py-3 text-base font-bold text-white hover:bg-[#099f4e]"
            >
              Get started <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer id="contact-us" className="bg-[#2d2d2d] py-12 text-zinc-300">
        <div className="section-shell grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-guvi-green text-lg font-extrabold text-white">
                G
              </span>
              <span className="text-xl font-extrabold text-white">HCL GUVI</span>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-6">
              A React and Tailwind recreation inspired by the public GUVI landing page structure, using original imagery and rewritten copy.
            </p>
          </div>
          <FooterColumn title="Courses" items={["HR Executive Training", "HR Recruitment Training", "Full Stack Development", "QA Testing", "DSA"]} />
          <FooterColumn title="Company" items={["About Us", "Contact Us", "Privacy Policy", "Refund Policy"]} />
        </div>
        <div className="section-shell mt-10 border-t border-white/20 pt-6 text-sm text-zinc-400">
          HCL GUVI Geek Network Pvt. Ltd. Inspired demo page.
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <p className="text-sm font-extrabold uppercase tracking-normal text-guvi-green">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-normal text-guvi-dark sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">{text}</p>
    </div>
  );
}

function FeatureBlock({ icon: Icon, title, text }) {
  return (
    <article className="rounded-lg border border-guvi-line bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-guvi-mint text-guvi-green">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-extrabold text-guvi-dark">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
    </article>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-extrabold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a href="#home" className="focus-ring rounded-md hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
