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
    },
  },
  plugins: [],
};
