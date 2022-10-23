/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif;",
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/trama.svg')",
      },
    },
  },
  plugins: [],
}
