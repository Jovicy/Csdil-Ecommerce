/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30': '30%',
        '22': '22.5%',
        's80': '90vw',
      }
    },
  },
  plugins: [],
}