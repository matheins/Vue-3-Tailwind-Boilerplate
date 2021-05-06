const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          100: "#eee8fd",
          200: "#ded1fb",
          300: "#cdbaf9",
          400: "#9b74f3",
          500: "#692fed",
          600: "#5818EB",
          700: "#4613bc",
          800: "#3e11a5",
          900: "#350e8d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
