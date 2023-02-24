/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{'900': '900px'},
    },
  },
  plugins: [
    require('tailwind-nord')
  ],
}