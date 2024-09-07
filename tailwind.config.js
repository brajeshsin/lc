/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%': { color: '#333333' },  // initial color
          '100%': { color: '#E83350' },  // final color (coral)
        },
      },
      animation: {
        'color-change': 'colorChange 5s ease-in-out infinite', // 5 seconds duration, looping infinitely
      },
    },
  },
  plugins: [],
};
// tailwind.config.js

