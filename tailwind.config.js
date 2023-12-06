/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
};
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'rpsmage': 'url("../Components/asset/ScholarSheep.png")',
      // },
      fontFamily: {
        mono: ['courier new', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: 'background-color: rgb(13 148 136)',
        cyan: {
          600: '#0d9488',
        },
      },
    },
    screens: {
      sm: '486px',
      // => @media (min-width: 640px) { ... }

      md: '547px',
      // => @media (min-width: 768px) { ... }

      lg: '768px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1660px',
      // => @media (min-width: 1536px) { ...  { ... }}
    },
    height: {
      76: '18rem',
      78: '19rem',
      82: '22rem',
      97: '28rem',
      98: '31rem',
      99: '38rem',
      100: '40rem',
      'fit-content': 'fit-content(20em)',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
      16: '4rem',
    },
    
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  
};


