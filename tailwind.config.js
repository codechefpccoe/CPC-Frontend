/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      vs: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        primary: "#1CB6D8",
        secondary: "#181818",
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
