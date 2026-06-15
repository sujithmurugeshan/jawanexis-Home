import { useEffect } from "react";
import { Mail, Phone, Linkedin, Quote, ArrowLeft } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatButton from "../components/FloatingChatButton.jsx";
import teamProfiles from "./teamData.jsx";

function TeamProfilePage({ slug }) {
  const member = teamProfiles[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!member) {
    return (
      <div className="min-h-screen bg-white text-guvi-ink font-sans">
        <Header />
        <main className="py-32 text-center">
          <h1 className="text-3xl font-extrabold">Profile Not Found</h1>
          <p className="mt-4 text-guvi-muted">The team member you are looking for does not exist.</p>
          <a href="#about-us" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-colors">
            <ArrowLeft size={16} /> Back to About
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="min-h-screen bg-white text-guvi-ink font-sans">
      <Header />

      <main>
        {/* ─── HERO BANNER ─── */}
        <section className="tp-hero">
          <div className="shell">
            {/* Back link */}
            <a href="#about-us" className="tp-back-link">
              <ArrowLeft size={16} />
              <span>Back to Team</span>
            </a>

            {/* Hero Card */}
            <div className="tp-hero-card">
              <div className="tp-hero-card-inner">
                {/* Text side */}
                <div className="tp-hero-text">
                  <h1 className="tp-hero-name">
                    <span className="tp-green-letter">{firstName.charAt(0)}</span>
                    {firstName.slice(1)}{" "}
                    {lastName && (
                      <>
                        <br className="hidden sm:inline" />
                        <span className="tp-green-letter">{lastName.charAt(0)}</span>
                        {lastName.slice(1)}
                      </>
                    )}
                  </h1>
                </div>

                {/* Photo */}
                <div className="tp-hero-photo-wrap">
                  <img src={member.photo} alt={member.name} className="tp-hero-photo" />
                </div>

                {/* Role */}
                <div className="tp-hero-role">
                  <span className="tp-hero-role-text">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT SECTION ─── */}
        <section className="tp-section tp-section--white">
          <div className="shell tp-content-width">
            <h2 className="tp-section-heading">
              <span className="tp-green-letter">A</span>bout
            </h2>
            <div className="tp-about-text">
              {member.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AREAS OF EXPERTISE ─── */}
        <section className="tp-section tp-section--gray">
          <div className="shell tp-content-width">
            <h2 className="tp-section-heading">
              <span className="tp-green-letter">A</span>reas of Expertise
            </h2>
            <div className="tp-expertise-grid">
              {member.expertise.map((skill, i) => (
                <span key={i} className="tp-expertise-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ROLE AT JAWA EDTECH ─── */}
        <section className="tp-section tp-section--white">
          <div className="shell tp-content-width">
            <h2 className="tp-section-heading">
              <span className="tp-green-letter">R</span>ole At JAWA EDTECH
            </h2>
            <p className="tp-role-intro">{member.roleDescription}</p>
            <ul className="tp-role-list">
              {member.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── WHAT STUDENTS SAY ─── */}
        <section className="tp-section tp-section--gray">
          <div className="shell tp-content-width">
            <h2 className="tp-section-heading">
              <span className="tp-green-letter">W</span>hat Students Say
            </h2>
            <div className="tp-testimonials-grid">
              {member.testimonials.map((quote, i) => (
                <div key={i} className="tp-testimonial-card">
                  <Quote size={24} className="tp-testimonial-quote-icon" />
                  <p className="tp-testimonial-text">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PERSONAL QUOTE ─── */}
        <section className="tp-quote-banner">
          <div className="shell tp-content-width">
            <div className="tp-quote-block">
              <Quote size={36} className="tp-quote-icon" />
              <blockquote className="tp-quote-text">
                "{member.quote}"
              </blockquote>
              <cite className="tp-quote-cite">— {member.name}</cite>
            </div>
          </div>
        </section>

        {/* ─── FOUNDER MESSAGE (Soorya only) ─── */}
        {member.founderMessage && (
          <section className="tp-section tp-section--white">
            <div className="shell tp-content-width">
              <h2 className="tp-section-heading">
                <span className="tp-green-letter">A</span> Message from the Founder
              </h2>
              <div className="tp-founder-message">
                {member.founderMessage.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <div className="tp-founder-closing">
                  <p className="tp-founder-regards">{member.founderMessage.closing}</p>
                  <p className="tp-founder-signature">{member.founderMessage.signature}</p>
                  <p className="tp-founder-signature-role">{member.founderMessage.signatureRole}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── FOUNDER QUOTE (Soorya only) ─── */}
        {member.founderQuote && (
          <section className="tp-section tp-section--gray">
            <div className="shell tp-content-width">
              <h2 className="tp-section-heading">
                <span className="tp-green-letter">F</span>ounder Quote
              </h2>
              <div className="tp-founder-quote-card">
                <Quote size={28} className="tp-testimonial-quote-icon" />
                <blockquote className="tp-founder-quote-text">
                  "{member.founderQuote}"
                </blockquote>
                <cite className="tp-founder-quote-cite">— {member.name}, {member.role}, JAWA EDTECH</cite>
              </div>
            </div>
          </section>
        )}

        {/* ─── CONNECT SECTION ─── */}
        <section className="tp-section tp-section--white">
          <div className="shell tp-content-width">
            <h2 className="tp-section-heading">
              <span className="tp-green-letter">C</span>onnect with {member.name.split(" ")[0]}
            </h2>
            <p className="tp-connect-intro">
              Interested in learning more about career opportunities, training programs, or industry collaborations?
            </p>
            <div className="tp-connect-grid">
              <a href={`mailto:${member.contact.email}`} className="tp-connect-card">
                <div className="tp-connect-icon tp-connect-icon--email">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="tp-connect-label">Email</span>
                  <span className="tp-connect-value">{member.contact.email}</span>
                </div>
              </a>
              <a href={`tel:${member.contact.phone}`} className="tp-connect-card">
                <div className="tp-connect-icon tp-connect-icon--phone">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="tp-connect-label">Phone</span>
                  <span className="tp-connect-value">{member.contact.phone}</span>
                </div>
              </a>
              <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="tp-connect-card">
                <div className="tp-connect-icon tp-connect-icon--linkedin">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="tp-connect-label">LinkedIn</span>
                  <span className="tp-connect-value">View Profile</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default TeamProfilePage;
