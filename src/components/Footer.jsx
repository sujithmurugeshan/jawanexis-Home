import logo from "../assets/logo.png";

const footerGroups = [
  {
    title: "Company",
    links: ["About Us", "Contact Us", "FAQs", "Refund Policy", "Privacy Policy"]
  }
];

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

  return "#courses-page";
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
      className="block text-[15px] leading-6 text-slate-200 transition hover:text-guvi-green"
    >
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

function Footer() {
  return (
    <footer className="bg-guvi-ink text-white">
      <div className="mx-auto max-w-[1138px] px-6 py-16 lg:px-5">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr] lg:gap-x-24">
          {/* Column 1: Branding and Description */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <img src={logo} alt="Jawa EDTech logo" className="h-14 w-14 rounded-lg object-contain" />
              <div>
                <div className="text-[28px] font-extrabold leading-none text-white">Jawa EDTech</div>
                <p className="mt-1 text-[11px] font-extrabold tracking-[0.22em] text-guvi-green">LEARN, LEAD, INNOVATE!</p>
              </div>
            </div>

            <p className="max-w-[690px] text-[15px] font-medium leading-6 text-slate-200">
              Jawa EDTech is a career-focused learning and skills development company delivering practical training in HR, full stack development,
              software testing, DSA, and placement preparation.
            </p>
            <p className="max-w-[690px] text-[15px] font-medium leading-6 text-slate-200">
              Our programs combine live classes, mentor guidance, project practice, and career support to help learners build job-ready skills with
              confidence.
            </p>

            <div className="pt-2">
              <h4 className="text-[15px] font-extrabold text-white">Follow us on</h4>
              <div className="mt-4 flex flex-wrap gap-4">
                {socialLinks.map(([label, icon, colorClass, url]) => (
                  <a
                    key={label}
                    href={url || "#contact"}
                    target={url ? "_blank" : undefined}
                    rel={url ? "noopener noreferrer" : undefined}
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[19px] text-white transition hover:scale-105 ${colorClass}`}
                    aria-label={label}
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:pl-16">
            {footerGroups.map((group) => (
              <FooterGroup key={group.title} group={group} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/30 pt-8 text-[13px] text-slate-200 md:flex-row md:items-center md:justify-between">
          <span className="text-slate-200">&copy; {new Date().getFullYear()} Jawa EDTech. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition hover:text-guvi-green">
              Terms and Conditions
            </a>
            <a href="#privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition hover:text-guvi-green">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
