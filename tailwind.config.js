/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
