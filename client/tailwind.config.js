/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'myFont' : ['nunito'],
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing') 
     }),
    extend: {
    keyframes :{
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%':   { transform: 'translate(0, -0px)' },   
      }
        },
        animation: {
          floating: '3s ease-in-out infinite',
        }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
