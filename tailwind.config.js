/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbarblue' : '#050b20',
        'buttonblue' : '#405ff2'
      }
    }
  },
  plugins: []
}