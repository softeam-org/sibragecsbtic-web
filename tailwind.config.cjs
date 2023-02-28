/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{'900': '900px'},
      borderWidth: { '3': '3px' },
    },
  },
  plugins: [
    require('tailwind-nord')
  ],
}