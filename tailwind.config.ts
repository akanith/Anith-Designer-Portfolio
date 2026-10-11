import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAFAF7",
          warm: "#F5F5F0",
          pure: "#FFFFFF",
          subtle: "#F2F2EC",
        },
        ink: {
          DEFAULT: "#171717",
          deep: "#0F0F0F",
          muted: "#737373",
          light: "#A3A3A3",
          border: "#E7E7E0",
          "border-dark": "#D4D4CC",
        },
        accent: {
          coral: "#FF5A45",
          cobalt: "#355CFF",
          yellow: "#E7FF59",
          violet: "#8B5CF6",
          lavender: "#EDE9FE",
          paleblue: "#E0F2FE",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
        wide: "0.08em",
        widest: "0.18em",
      },
      boxShadow: {
        gallery: "0 20px 40px -15px rgba(23, 23, 23, 0.08), 0 0 1px 1px rgba(23, 23, 23, 0.05)",
        "gallery-hover": "0 30px 60px -20px rgba(23, 23, 23, 0.16), 0 0 0 1px rgba(53, 92, 255, 0.4)",
        coral: "0 10px 25px -5px rgba(255, 90, 69, 0.3)",
        cobalt: "0 10px 25px -5px rgba(53, 92, 255, 0.3)",
        card: "0 4px 20px -2px rgba(23, 23, 23, 0.04), 0 0 0 1px #E7E7E0",
      },
      borderRadius: {
        gallery: "16px",
        frame: "8px",
      },
      animation: {
        "float-gentle": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
