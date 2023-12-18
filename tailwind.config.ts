import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
    },
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "3xl": "1680px",
      },
      colors: {
        "coral-green": "#2E8250",
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        "black-100": "#2B2C35",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1 " },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
