import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0F0B09",
          umber: "#2A1A12",
          clay: "#6C4A2F",
          gold: "#B89A73",
          ivory: "#F3EEE4",
          mist: "#CFC7BA"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        metal: "0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "steel-grid":
          "linear-gradient(rgba(243, 238, 228, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243, 238, 228, 0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

