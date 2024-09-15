/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',
      },
      keyframes: {
        glow:{
          '0%, 100%': { textShadow: '0 0 15px rgba(255, 255, 255, 0.7)' },
          '50%': { textShadow: '0 0 30px rgba(255, 255, 255, 1)' },
        },
      },
      animation:{
        glow:'glow 1.5s infinite',
      }
    },
  },
  plugins: [],
}