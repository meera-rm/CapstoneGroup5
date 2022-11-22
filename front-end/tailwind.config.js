/** @type {import('tailwindcss').Config} */

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
      //   'hero-image': 'url("../Components/asset/ScholarSheep.png")',
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
  },
  plugins: [require('flowbite/plugin')],
};
