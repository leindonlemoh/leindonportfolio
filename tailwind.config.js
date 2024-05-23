/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'mobile':'320px',
      'tablet':'769px',
      'tabletL':'770px',
      'laptop':'1024px',
      'xl':'1440px'
    },
    extend: {},
  },
  plugins: [],
}

