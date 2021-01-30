const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          100: "#526DB3",
          200: "#4C66A6",
          300: "#2F3F66",
          400: "#4E5466",
          500: "#272A33",
          600: "#171F33",
          700: "#16151C",
          800: "#0F0E18",
          900: "#0C1014",
        },
        orange: colors.orange,
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      maxWidth: {
        xxs: "16rem",
      },
      fontFamily: {
        sans: "Oxygen",
        ...defaultTheme.fontFamily.sans,
        title: ["Exo"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
