/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],

   theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#212B3A', 
        'home-background' : '#0B121F',
      },
    },
  },
}