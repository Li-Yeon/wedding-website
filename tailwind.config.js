const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nato: ['Noto Serif Lao'],
        Vibes: ['Great Vibes'],
        Display: ['DM Serif Display']
      }
    },
  },
  plugins: [],
  mode: 'jit'
}