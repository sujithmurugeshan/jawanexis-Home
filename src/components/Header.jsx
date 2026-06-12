import { Menu, X, ChevronDown, Briefcase, UserPlus, Code2, Bug, Cpu } from "lucide-react";
import { useState } from "react";
import logo3d from "../assets/3dlogo.png";
import { navItems } from "../pages/homeData.jsx";

const courseItems = [
  {
    label: "HR Executive Training",
    href: "#hr-executive-course",
    desc: "Core HR, Payroll & Compliance",
    icon: Briefcase
  },
  {
    label: "HR Recruitment Training",
    href: "#hr-recruitment-course",
    desc: "Talent Sourcing & Interview Prep",
    icon: UserPlus
  },
  {
    label: "Full Stack Development",
    href: "#full-stack-development-course",
    desc: "Web Dev & AI Integration",
    icon: Code2
  },
  {
    label: "Software Quality Testing",
    href: "#qa-testing-course",
    desc: "Manual & Automation Testing",
    icon: Bug
  },
  {
    label: "DSA",
    href: "#dsa-course",
    desc: "Data Structures & Algorithms",
    icon: Cpu
  }
];

const internshipItems = [
  {
    label: "HR Executive Training",
    href: "#hr-executive-internship",
    desc: "Core HR, Payroll & Compliance",
    icon: Briefcase
  },
  {
    label: "HR Recruitment Training",
    href: "#hr-recruitment-internship",
    desc: "Talent Sourcing & Interview Prep",
    icon: UserPlus
  },
  {
    label: "Full Stack Development",
    href: "#full-stack-development-internship",
    desc: "Web Dev & AI Integration",
    icon: Code2
  }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileInternshipOpen, setMobileInternshipOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-[160px] items-center gap-2" aria-label="JAWA EDTech home">
          <img
            src={logo3d}
            alt=""
            className="h-8 w-8 object-contain"
            aria-hidden="true"
          />
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-black">Jawa EDTech</span>
            <span className="mt-0.5 text-[6px] font-bold tracking-[0.16em] text-black/60">LEARN, LEAD, INNOVATE!</span>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-4 text-[15px] font-bold text-guvi-ink" aria-label="Primary navigation">
            {navItems.map((item) => {
              if (item.label === "Courses") {
                return (
                  <div key={item.label} className="relative group py-2">
                    <button
                      type="button"
                      className="flex h-9 items-center gap-1 rounded-md border border-transparent px-2 hover:border-guvi-green hover:bg-guvi-soft cursor-pointer text-[15px] font-bold text-guvi-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-80 rounded-xl bg-white border border-guvi-line shadow-menu opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 p-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                      <div className="grid gap-1">
                        {courseItems.map((course) => {
                          const Icon = course.icon;
                          return (
                            <a
                              key={course.label}
                              href={course.href}
                              className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-guvi-soft transition-colors duration-150"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-guvi-mint text-guvi-green">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="text-left">
                                <h5 className="text-sm font-bold text-guvi-ink leading-tight">{course.label}</h5>
                                <p className="text-xs text-guvi-muted font-medium mt-0.5 leading-snug">{course.desc}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              if (item.label === "Internship") {
                return (
                  <div key={item.label} className="relative group/intern py-2">
                    <button
                      type="button"
                      className="flex h-9 items-center gap-1 rounded-md border border-transparent px-2 hover:border-guvi-green hover:bg-guvi-soft cursor-pointer text-[15px] font-bold text-guvi-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover/intern:rotate-180" />
                    </button>
                    
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-80 rounded-xl bg-white border border-guvi-line shadow-menu opacity-0 invisible translate-y-2 group-hover/intern:opacity-100 group-hover/intern:visible group-hover/intern:translate-y-0 transition-all duration-200 z-50 p-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                      <div className="grid gap-1">
                        {internshipItems.map((course) => {
                          const Icon = course.icon;
                          return (
                            <a
                              key={course.label}
                              href={course.href}
                              className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-guvi-soft transition-colors duration-150"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-guvi-mint text-guvi-green">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="text-left">
                                <h5 className="text-sm font-bold text-guvi-ink leading-tight">{course.label}</h5>
                                <p className="text-xs text-guvi-muted font-medium mt-0.5 leading-snug">{course.desc}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex h-9 items-center rounded-md border border-transparent px-2 hover:border-guvi-green hover:bg-guvi-soft"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="flex h-9 min-w-[76px] items-center justify-center rounded-md border border-guvi-green px-4 text-[15px] font-extrabold text-black"
            >
              Login
            </a>
            <a
              href="#signup"
              className="flex h-9 min-w-[84px] items-center justify-center rounded-md btn-glossy-green px-4 text-[15px] font-extrabold"
            >
              Sign up
            </a>
          </div>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-guvi-line lg:hidden"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-guvi-line bg-white lg:hidden">
          <div className="shell grid gap-2 py-3">
            {navItems.map((item) => {
              if (item.label === "Courses") {
                return (
                  <div key={item.label} className="grid gap-1">
                    <button
                      type="button"
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="flex items-center justify-between w-full rounded-md px-2 py-1.5 text-sm font-bold text-left hover:bg-guvi-soft cursor-pointer text-guvi-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="grid gap-1 pl-4 mt-1 border-l border-guvi-line">
                        {courseItems.map((course) => {
                          const Icon = course.icon;
                          return (
                            <a
                              key={course.label}
                              href={course.href}
                              className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-guvi-soft"
                              onClick={() => {
                                setMobileCoursesOpen(false);
                                setMobileOpen(false);
                              }}
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded bg-guvi-mint text-guvi-green">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-xs font-bold text-guvi-ink">{course.label}</span>
                                <span className="text-[10px] text-guvi-muted leading-tight">{course.desc}</span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.label === "Internship") {
                return (
                  <div key={item.label} className="grid gap-1">
                    <button
                      type="button"
                      onClick={() => setMobileInternshipOpen(!mobileInternshipOpen)}
                      className="flex items-center justify-between w-full rounded-md px-2 py-1.5 text-sm font-bold text-left hover:bg-guvi-soft cursor-pointer text-guvi-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileInternshipOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileInternshipOpen && (
                      <div className="grid gap-1 pl-4 mt-1 border-l border-guvi-line">
                        {internshipItems.map((course) => {
                          const Icon = course.icon;
                          return (
                            <a
                              key={course.label}
                              href={course.href}
                              className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-guvi-soft"
                              onClick={() => {
                                setMobileInternshipOpen(false);
                                setMobileOpen(false);
                              }}
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded bg-guvi-mint text-guvi-green">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-xs font-bold text-guvi-ink">{course.label}</span>
                                <span className="text-[10px] text-guvi-muted leading-tight">{course.desc}</span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-sm font-bold text-guvi-ink hover:bg-guvi-soft"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a href="#login" className="rounded-md border border-guvi-green px-4 py-2.5 text-center text-sm font-bold text-black">
                Login
              </a>
              <a href="#signup" className="rounded-md btn-glossy-green px-4 py-2.5 text-center text-sm font-bold">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
