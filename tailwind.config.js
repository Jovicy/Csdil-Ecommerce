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
        '23': '24.5%',
        '49': '48.5%',
        's80': '90vw',
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1000px"
      }
    },
  },
  plugins: [],
}