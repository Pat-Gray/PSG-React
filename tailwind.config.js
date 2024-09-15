/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0F4C75',
      },
      colors: {
        'font-blue': '#BBE1FA'}
    },
  },
  plugins: [],
}

