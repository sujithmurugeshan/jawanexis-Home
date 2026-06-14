import logo from "../assets/logo.png";

const socialLinks = [
  ["Facebook", "fa-brands fa-facebook-f", "bg-[#315ca8]", "https://www.facebook.com/profile.php?id=61574843888000&sk=followers"],
  ["Instagram", "fa-brands fa-instagram", "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", "https://www.instagram.com/jawaedtech/"],
  ["LinkedIn", "fa-brands fa-linkedin-in", "bg-[#2677b5]"],
  ["X", "fa-brands fa-x-twitter", "bg-black"],
  ["Telegram", "fa-brands fa-telegram", "bg-[#229ed9]"],
  ["YouTube", "fa-brands fa-youtube", "bg-[#ff1a1a]"]
];

function getFooterHref(label) {
  if (label === "FAQs") {
    return "#faq";
  }

  if (label === "Contact Us") {
    return "#contact";
  }

  if (label === "About Us") {
    return "#about-us";
  }

  if (label === "Privacy Policy") {
    return "#privacy-policy";
  }

  if (label === "Refund Policy") {
    return "#refund-policy";
  }

  if (label === "Terms and Conditions") {
    return "#terms-and-conditions";
  }

  if (label === "HR Executive Training") {
    return "#hr-executive-course";
  }

  if (label === "HR Recruitment Training") {
    return "#hr-recruitment-course";
  }

  if (label === "Full Stack Development") {
    return "#full-stack-development-course";
  }

  if (label === "Software Quality Testing" || label === "QA Testing") {
    return "#qa-testing-course";
  }

  if (label === "Data Structure And Algorithms" || label === "DSA" || label === "Data Structure and Algorithms") {
    return "#dsa-course";
  }

  if (label === "All Programs") {
    return "#courses-page";
  }

  return "#";
}

function FooterLink({ children }) {
  const label = typeof children === "string" ? children : Array.isArray(children) ? children[0] : children;
  const href = getFooterHref(label);
  const isLegal = ["#privacy-policy", "#refund-policy", "#terms-and-conditions"].includes(href);

  return (
    <a
      href={href}
      target={isLegal ? "_blank" : undefined}
      rel={isLegal ? "noopener noreferrer" : undefined}
      className="block text-[15px] leading-6 text-slate-300 transition hover:text-guvi-green"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1138px] px-6 py-16 lg:px-5">
        
        {/* Top Section: Navigation Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          
          {/* Column 1: LIVE CLASSES */}
          <div>
            <h3 className="flex items-center gap-2 text-[15px] font-extrabold text-white">
              LIVE CLASSES
            </h3>
            <div className="mt-4 space-y-3">
              <FooterLink>HR Executive Training</FooterLink>
              <FooterLink>HR Recruitment Training</FooterLink>
              <FooterLink>Full Stack Development</FooterLink>
              <FooterLink>Software Quality Testing</FooterLink>
              <FooterLink>Data Structure And Algorithms</FooterLink>
              <FooterLink>All Programs</FooterLink>
            </div>
          </div>

          {/* Column 2: Popular Courses */}
          <div>
            <h3 className="text-[15px] font-extrabold text-white">Popular Courses</h3>
            <div className="mt-4 space-y-3">
              <FooterLink>HR Executive Training</FooterLink>
              <FooterLink>HR Recruitment Training</FooterLink>
              <FooterLink>Full Stack Development</FooterLink>
              <FooterLink>QA Testing</FooterLink>
              <FooterLink>DSA</FooterLink>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-[15px] font-extrabold text-white">Company</h3>
            <div className="mt-4 space-y-3">
              <FooterLink>Refund Policy</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-8 border-t border-white/10" />

        {/* Middle Section: Branding on left, Socials on right */}
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-x-20">
          
          {/* Left: Branding */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <img src={logo} alt="Jawa EDTech logo" className="h-14 w-14 rounded-lg object-contain" />
              <div>
                <div className="text-[28px] font-extrabold leading-none text-white">Jawa EDTech</div>
                <p className="mt-1 text-[11px] font-extrabold tracking-[0.22em] text-guvi-green">LEARN, LEAD, INNOVATE!</p>
              </div>
            </div>

            <p className="text-[15px] font-medium leading-relaxed text-slate-300">
              Jawa EDTech is a career-focused learning and skills development company delivering practical training in HR, full stack development, software testing, DSA, and placement preparation.
            </p>
            <p className="text-[15px] font-medium leading-relaxed text-slate-300">
              Our programs combine live classes, mentor guidance, project practice, and career support to help learners build job-ready skills with confidence.
            </p>
          </div>

          {/* Right: Social Follow Grid */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-[15px] font-extrabold text-white">Follow us on</h4>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {socialLinks.map(([label, icon, colorClass, url]) => (
                <a
                  key={label}
                  href={url || "#contact"}
                  target={url ? "_blank" : undefined}
                  rel={url ? "noopener noreferrer" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-lg text-white transition hover:scale-105 ${colorClass}`}
                  aria-label={label}
                >
                  <i className={icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Legal Links & Copyright (No divider line above, right aligned on desktop) */}
        <div className="mt-12 flex flex-col items-center gap-4 text-[13px] text-slate-300 md:flex-row md:justify-end md:gap-6">
          <a
            href="#terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-guvi-green"
          >
            Terms and Conditions
          </a>
          <a
            href="#privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-guvi-green"
          >
            Privacy Policy
          </a>
          <span className="text-slate-400">&copy; 2026 Jawa EDTech. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
