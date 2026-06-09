/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"]
      },
      colors: {
        guvi: {
          green: "#0dba4b",
          dark: "#1d1d1f",
          ink: "#202124",
          mint: "#e9f8ef",
          line: "#e5e7eb"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(25, 38, 33, 0.12)"
      }
    }
  },
  plugins: []
};
