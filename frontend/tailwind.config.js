/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/index.html", "./src/**/*.{js,jsx}",'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
      container: {
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        },
      }
    },
  },
  plugins: [],
}

