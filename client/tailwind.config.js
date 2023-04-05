/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'myFont' : ['nunito'],
    },
    extend: {
      backgroundImage: {
        'homeBanne' : "url('./imgs/web-developer-banner.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
