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
        'yellow1': '#BCAE33',
        'gradient-blue': 'linear-gradient(90deg, red, blue)',


      },
      

    },
  },
  plugins: [],
}




