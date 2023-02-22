/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width:{'900': '900px'},
    extend: {},
  },
  plugins: [
    require('tailwind-nord')
  ],
}