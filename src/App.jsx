import { useEffect, useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
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

  if (route === "#login") {
    return <AuthPage mode="login" />;
  }

  if (route === "#signup") {
    return <AuthPage mode="signup" />;
  }

  if (route === "#contact") {
    return <ContactPage />;
  }

  return <Home />;
}

export default App;
