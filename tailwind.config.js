/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ab30e8",
        "background-light": "#f7f6f8",
        "background-dark": "#1c1121",
        lilac: "#C8A2C8",
        "soft-lavender": "#E6E6FA",
        // "deep-purple": "#483248",
        "off-white": "#F9F7F9",
        "light-grey": "#DCDCDC",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
