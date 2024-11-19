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
      },
      animation: {
        zoomBackground: 'zoomBackground 10s ease-in-out infinite', 
      },
      
    },

  },
  plugins: [    flowbite.plugin(),],
}