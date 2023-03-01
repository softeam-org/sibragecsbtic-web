/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{'800': '800px'},
      fontSize:{"xxs":"0.5rem"}
    },
  },
  plugins: [
    require('tailwind-nord')
  ],
}