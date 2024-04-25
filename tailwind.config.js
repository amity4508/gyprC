/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbg1': 'rgb(7, 50, 70)',
      },
      textColor: {
        'navBlue': 'rgb(7, 50, 70)',
      },
    },
  },
  plugins: [],
}




