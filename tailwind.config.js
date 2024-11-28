/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        zoomBackground: {
          '0%': { backgroundSize: '100%' },
          '50%': { backgroundSize: '120%' },
          '100%': { backgroundSize: '100%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        zoomBackground: 'zoomBackground 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInLeft: 'fadeInLeft 1s ease-out',
        fadeInRight: 'fadeInRight 1s ease-out',
      },
      screens: {
        xs: { max: '639px' },
        xxs: { max: '420px' },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },


  },
  plugins: [    flowbite.plugin(),],
}