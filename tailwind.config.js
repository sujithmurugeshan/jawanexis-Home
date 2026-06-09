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
          green: "#19d950",
          deepGreen: "#0b8a32",
          dark: "#1d1d1f",
          ink: "#20242a",
          muted: "#70757d",
          mint: "#e9f8ef",
          line: "#e7e7ea",
          soft: "#f4f4f8",
          purple: "#7417f2",
          red: "#ef5368"
        }
      },
      boxShadow: {
        nav: "0 2px 10px rgba(0,0,0,0.10)",
        card: "0 5px 14px rgba(15, 23, 42, 0.18)",
        menu: "0 14px 30px rgba(15, 23, 42, 0.12)",
        lift: "0 8px 18px rgba(25, 217, 80, 0.30)",
        soft: "0 18px 45px rgba(25, 38, 33, 0.12)"
      }
    }
  },
  plugins: []
};
