import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

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
    if (["#faq", "#faqs", "#login", "#signup", "#about-us", "#contact"].includes(route)) {
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

  return <Home />;
}

export default App;
