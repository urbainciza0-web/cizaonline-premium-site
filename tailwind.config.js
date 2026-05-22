/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ciza: {
          black: "#050505",
          graphite: "#0f1013",
          panel: "#15130e",
          gold: "#f4c542",
          goldDeep: "#b8860b",
          ivory: "#fff8e6",
          emerald: "#18d39e"
        }
      },
      boxShadow: {
        gold: "0 24px 70px rgba(244, 197, 66, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(244, 197, 66, .72), transparent)"
      }
    }
  },
  plugins: []
};
