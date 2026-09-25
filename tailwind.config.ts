import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#040611",
          900: "#070B18",
          800: "#0C1224",
          700: "#131B33",
          600: "#1B2544",
        },
        electric: {
          400: "#5EA1FF",
          500: "#3B82F6",
          600: "#2563EB",
          glow: "#7DD3FC",
        },
        ink: {
          100: "#EDEFF6",
          300: "#B7BED0",
          500: "#7D869C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(3, 8, 20, 0.55)",
        glow: "0 0 40px rgba(59,130,246,0.25)",
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 14s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
