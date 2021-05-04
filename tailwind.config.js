const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: defaultTheme.colors.indigo[600],
          light: defaultTheme.colors.indigo[700],
          dark: defaultTheme.colors.indigo[500],
        },
        secondary: {
          DEFAULT: defaultTheme.colors.indigo[500],
          light: defaultTheme.colors.indigo[200],
          dark: defaultTheme.colors.indigo[700],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
