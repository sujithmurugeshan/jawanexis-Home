import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import Home from "./pages/Home.jsx";
import ContactPage from "./pages/ContactPage.jsx";

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
    if (["#faq", "#faqs", "#login", "#signup"].includes(route)) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [route]);

  if (route === "#login") {
    return <AuthPage mode="login" />;
  }

  if (route === "#signup") {
    return <AuthPage mode="signup" />;
  }

<<<<<<< HEAD
  if (route === "#faq" || route === "#faqs") {
    return <FAQPage />;
=======
  if (route === "#contact") {
    return <ContactPage />;
>>>>>>> cfde2aa58185448672821584eebacff675c15b83
  }

  return <Home />;
}

export default App;
