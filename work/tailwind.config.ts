import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        verdant: {
          50: "#f4fff6",
          100: "#dffbf3",
          200: "#bff1d4",
          300: "#7DD039",
          400: "#64AD29",
          700: "#084734",
          800: "#034a2e",
          950: "#00170b"
        },
        citron: "#F9F90D",
        line: "#d7e1d5"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(8, 71, 52, 0.14)",
        lift: "0 30px 80px rgba(8, 71, 52, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
