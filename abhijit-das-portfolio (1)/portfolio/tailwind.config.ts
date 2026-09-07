import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#090D16",
        darksoft: "#0E1424",
        darkcard: "#131B2E",
        darkcardborder: "#1E293B",
        ink: "#F8FAFC",
        inksoft: "#94A3B8",
        paper: "#090D16",
        surface: "#131B2E",
        night: "#090D16",
        night2: "#0E1424",
        accent: "#F59E0B",
        accentdeep: "#D97706",
        indigo: "#6366F1",
        indigodeep: "#4F46E5",
        teal: "#14B8A6",
        tealdeep: "#0D9488",
        rose: "#F43F5E",
        rosedeep: "#E11D48",
        violet: "#8B5CF6",
        line: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 25px) scale(0.95)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-25px, 30px) scale(1.05)" },
        },
      },
      animation: {
        float: "float 14s ease-in-out infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
