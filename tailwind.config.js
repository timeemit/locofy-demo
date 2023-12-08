/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "page-background-night": "#0e1227",
        "card-base-01-night": "#11152e",
        "card-border-night": "#2c3250",
        "white-night": "#fff",
        "lighter-text-night": "#e4dcf3",
        "sky-night": "#3e97ff",
        "pink-night": "#ff62f9",
        deepskyblue: "#01c2ed",
      },
      spacing: {},
      fontFamily: {
        "text-18-regular": "Inter",
      },
      borderRadius: {
        "51xl": "70px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "9xl": "1.75rem",
      base: "1rem",
      "16xl": "2.19rem",
      "46xl": "4.06rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      "76xl": "5.94rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
