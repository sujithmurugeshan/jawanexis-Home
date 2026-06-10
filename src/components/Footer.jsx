import logo from "../assets/logo.png";

const footerGroups = [
  {
    title: "ZEN CLASS",
    badge: "LIVE CLASS",
    links: [
      "HR Executive Training",
      "HR Recruitment Training",
      "Full Stack Development",
      "Software Quality Testing",
      "Data Structure And Algorithms",
      "All Programs"
    ]
  },
  {
    title: "Popular Courses",
    links: [
      "HR Executive Training",
      "HR Recruitment Training",
      "Full Stack Development",
      "QA Testing",
      "DSA"
    ]
  },
  {
    title: "Company",
    links: ["Refund Policy", "FAQs", "Contact Us", "About Us", "Privacy Policy"]
  }
];

const socialLinks = [
  ["Facebook", "fa-brands fa-facebook-f", "bg-[#315ca8]"],
  ["Instagram", "fa-brands fa-instagram", "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"],
  ["LinkedIn", "fa-brands fa-linkedin-in", "bg-[#2677b5]"],
  ["X", "fa-brands fa-x-twitter", "bg-black"],
  ["Telegram", "fa-brands fa-telegram", "bg-[#229ed9]"],
  ["YouTube", "fa-brands fa-youtube", "bg-[#ff1a1a]"]
];

function FooterLink({ children }) {
  return (
    <a href="#courses-page" className="block text-[15px] leading-6 text-slate-200 transition hover:text-guvi-green">
      {children}
    </a>
  );
}

function FooterGroup({ group }) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="flex flex-wrap items-center gap-2 text-[15px] font-extrabold text-white">
          {group.title}
          {group.badge ? (
            <span className="inline-flex h-5 items-center gap-1 rounded-[4px] bg-white/15 px-2 text-[12px] font-extrabold text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              {group.badge}
            </span>
          ) : null}
        </h3>
        <div className="mt-4 space-y-3">
          {group.links.map((link) => (
            <FooterLink key={link}>{link}</FooterLink>
          ))}
        </div>
      </div>

      {group.subGroups?.map((subGroup) => (
        <div key={subGroup.title} className="pt-1">
          <h4 className="text-[15px] font-extrabold text-white">{subGroup.title}</h4>
          <div className="mt-4 space-y-3">
            {subGroup.links.map((link) => (
              <FooterLink key={link}>
                {link}
                {link === "Resume Builder" ? (
                  <span className="ml-2 rounded-[3px] bg-red-500 px-1.5 py-0.5 text-[10px] font-extrabold text-white">New</span>
                ) : null}
              </FooterLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function StoreButton({ icon, title, subtitle }) {
  return (
    <a href="#contact" className="flex h-[47px] w-[150px] items-center gap-2 rounded-md border border-slate-200 px-3 text-white transition hover:border-guvi-green hover:text-guvi-green">
      <i className={`${icon} text-[22px]`} aria-hidden="true" />
      <span className="leading-none">
        <span className="block text-[10px] font-bold">{subtitle}</span>
        <span className="block text-[18px] font-extrabold">{title}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-guvi-ink text-white">
      <div className="mx-auto max-w-[1138px] px-6 py-12 lg:px-5">
<div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-45">          {footerGroups.map((group) => (
            <FooterGroup key={group.title} group={group} />
          ))}
        </div>

        <div className="mt-9 border-t border-white/30 pt-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.5fr_0.34fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <img src={logo} alt="Jawanexis logo" className="h-14 w-14 rounded-lg object-contain" />
                <div>
                  <div className="text-[28px] font-extrabold leading-none text-white">Jawanexis</div>
                  <p className="mt-1 text-[11px] font-extrabold tracking-[0.22em] text-guvi-green">LEARN, LEAD, INNOVATE!</p>
                </div>
              </div>

              <p className="mt-5 max-w-[690px] text-[15px] font-medium leading-6 text-slate-200">
                Jawanexis is a career-focused learning and skills development company delivering practical training in HR, full stack development,
                software testing, DSA, and placement preparation.
              </p>
              <p className="mt-4 max-w-[690px] text-[15px] font-medium leading-6 text-slate-200">
                Our programs combine live classes, mentor guidance, project practice, and career support to help learners build job-ready skills with
                confidence.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] font-extrabold text-white">Follow us on</h4>
              <div className="mt-4 grid w-[144px] grid-cols-3 gap-4">
                {socialLinks.map(([label, icon, colorClass]) => (
                  <a
                    key={label}
                    href="#contact"
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[19px] text-white transition hover:scale-105 ${colorClass}`}
                    aria-label={label}
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-3 justify-start lg:justify-end">
              <StoreButton icon="fa-brands fa-apple" subtitle="Download on the" title="App Store" />
              <StoreButton icon="fa-brands fa-google-play" subtitle="GET IT ON" title="Google Play" />
              <a href="#internship" className="flex h-12 w-[150px] items-center justify-center rounded-md border border-slate-200 text-sm font-extrabold text-white transition hover:border-guvi-green hover:bg-guvi-green hover:text-black">
                Refer & Earn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/30 pt-5 text-[13px] text-slate-200 md:flex-row md:items-center md:justify-end">
          <a href="#contact" className="underline underline-offset-2 transition hover:text-guvi-green">
            Terms and Conditions
          </a>
          <a href="#contact" className="underline underline-offset-2 transition hover:text-guvi-green">
            Privacy Policy
          </a>
          <span className="text-slate-200">&copy; {new Date().getFullYear()} Jawanexis. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
