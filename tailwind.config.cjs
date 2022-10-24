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
        'hero-dark': "url('/src/assets/trama-dark.svg')",
        'hero-pattern': "url('/src/assets/trama.svg')",
      },
      colors: {
        turquoise_blue: '#00e7ef',
        black: '#1e1e1e',
        apple_green: '#00e789',
        degrade: 'linear-gradient(to right bottom, #00e789, #00e9ab, #00e9c7, #00e9de, #00e7ef)',
      },
    },
  },
  plugins: [],
}
