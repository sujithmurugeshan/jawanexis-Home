import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TermsConditionsPage from "./pages/TermsConditionsPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import RefundPolicyPage from "./pages/RefundPolicyPage.jsx";
import HRExecutiveCoursePage from "./pages/HRExecutiveCoursePage.jsx";
import HRRecruitmentCoursePage from "./pages/HRRecruitmentCoursePage.jsx";
import QATestingCoursePage from "./pages/QATestingCoursePage.jsx";
import DSACoursePage from "./pages/DSACoursePage.jsx";
import FullStackCoursePage from "./pages/FullStackCoursePage.jsx";
import TeamProfilePage from "./pages/TeamProfilePage.jsx";
import InternshipPage from "./pages/InternshipPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";


function App() {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (
      [
        "#faq",
        "#faqs",
        "#login",
        "#signup",
        "#about-us",
        "#contact",
        "#terms-and-conditions",
        "#privacy-policy",
        "#refund-policy",
        "#hr-executive-course",
        "#hr-recruitment-course",
        "#full-stack-development-course",
        "#qa-testing-course",
        "#dsa-course",
        "#hr-executive-internship",
        "#hr-recruitment-internship",
        "#full-stack-development-internship",
        "#admin"

      ].includes(route)
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [route]);

  if (route === "#login") {
    return <AuthPage mode="login" />;
  }

  if (route === "#signup") {
    return <AuthPage mode="signup" />;
  }

  if (route === "#faq" || route === "#faqs") {
    return <FAQPage />;
  }

  if (route === "#contact") {
    return <ContactPage />;
  }

  if (route === "#about-us") {
    return <AboutPage />;
  }

  if (route === "#terms-and-conditions") {
    return <TermsConditionsPage />;
  }

  if (route === "#privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  if (route === "#refund-policy") {
    return <RefundPolicyPage />;
  }

  if (route === "#hr-executive-course") {
    return <HRExecutiveCoursePage />;
  }

  if (route === "#hr-recruitment-course") {
    return <HRRecruitmentCoursePage />;
  }

  if (route === "#full-stack-development-course") {
    return <FullStackCoursePage />;
  }

  if (route === "#qa-testing-course") {
    return <QATestingCoursePage />;
  }

  if (route === "#dsa-course") {
    return <DSACoursePage />;
  }

  if (route.startsWith("#team/")) {
    const slug = route.replace("#team/", "");
    return <TeamProfilePage slug={slug} />;
  }

  if (route === "#hr-executive-internship") {
    return <InternshipPage courseKey="hr-executive" />;
  }

  if (route === "#hr-recruitment-internship") {
    return <InternshipPage courseKey="hr-recruitment" />;
  }

  if (route === "#full-stack-development-internship") {
    return <InternshipPage courseKey="full-stack" />;
  }

  if (route === "#admin") {
    return <AdminDashboard />;
  }

  return <Home />;
}

export default App;
