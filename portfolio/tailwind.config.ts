import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background:         "var(--background)",
        foreground:         "var(--foreground)",
        card:               "var(--card)",
        muted:              "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border:             "var(--border)",
        ring:               "var(--ring)",

        // Canvas layers
        dark:        "#080C14",
        darksoft:    "#0E1424",
        darkcard:    "#0F131C",
        darkcardborder: "#1C2028",

        // Text tones
        ink:     "#DFE2EE",
        inksoft: "#908FA0",
        paper:   "#080C14",
        surface: "#1C2028",
        night:   "#080C14",
        night2:  "#0F131C",

        // Accent triad (primary palette)
        indigo:      "#6366F1",
        indigodeep:  "#4F46E5",
        indigolight: "#8083FF",
        cyan:        "#22D3EE",
        cyanmid:     "#5DE6FF",

        // Secondary accents (kept for backward compat)
        teal:        "#14B8A6",
        tealdeep:    "#0D9488",
        emerald:     "#10B981",
        emeralddeep: "#059669",
        rose:        "#F43F5E",
        rosedeep:    "#E11D48",
        violet:      "#8B5CF6",
        violetdeep:  "#7C3AED",

        // Warm accent
        accent:      "#F59E0B",
        accentdeep:  "#D97706",

        // Borders
        line: "rgba(255, 255, 255, 0.07)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body:    ["var(--font-plex)",      "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",      "JetBrains Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%":       { transform: "translate(30px, -40px) scale(1.08)" },
          "66%":       { transform: "translate(-20px, 25px) scale(0.95)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%":       { transform: "translate(-25px, 30px) scale(1.05)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)"   },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)"   },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        scanline: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "underline-sweep": {
          from: { transform: "scaleX(0)" },
          to:   { transform: "scaleX(1)" },
        },
        "ring-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0px rgba(99, 102, 241, 0.40)" },
          "50%":       { boxShadow: "0 0 0 10px transparent" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%":       { opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scaleY(0)" },
          to:   { transform: "scaleY(1)" },
        },
      },
      animation: {
        float:              "float 14s ease-in-out infinite",
        floatSlow:          "floatSlow 18s ease-in-out infinite",
        marquee:            "marquee 40s linear infinite",
        "marquee-reverse":  "marquee-reverse 40s linear infinite",
        shimmer:            "shimmer 2.4s linear infinite",
        scanline:           "scanline 5s linear infinite",
        "underline-sweep":  "underline-sweep 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "ring-pulse":       "ring-pulse 3s ease-in-out infinite",
        "fade-up":          "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "glow-pulse":       "glow-pulse 3s ease-in-out infinite",
        "scale-in":         "scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
