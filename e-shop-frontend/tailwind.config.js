/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        'nunito' : ['Nunito', 'sans-serif']
      },

      colors: {
        'primary' : '#FD3D57',
        'primary-light': '#e879f9',
        'primary-dark': '#c64ad9',
      }
    },
  },
  plugins: [],
}