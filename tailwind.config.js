/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1CB6D8",
      },
      fontFamily: {
        cairo: "'Cairo', serif",
        iceberg: "'Iceberg', serif",
      },
      keyframes: {
        spinOpposite: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 60s linear 2",
        "spin-opp-slow": "spinOpposite 60s linear infinite",
        "spin-opp-hover": "spinOpposite 5s linear infinite",
        "spin-hover": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
