import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "1045765490295-18hbb86kqlgac1km3q24vep3d5hitr5i.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
