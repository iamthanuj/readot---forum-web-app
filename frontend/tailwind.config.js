/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        mainColor:'rgb(25,25,25)',
        secendoryColor:'rgb(232,31,3)',
      }
    },
  },
  plugins: [],
}

