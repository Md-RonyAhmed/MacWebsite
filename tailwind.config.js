/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        SFpro: ["SFpro", "sans-serif"],
      },
      colors: {
        "primary": "#2997FF",
        "secondary": "#FF0000",
        "danger": "#FF7A00",
        "light": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
