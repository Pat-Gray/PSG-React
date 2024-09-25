/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0F4C75',
      },
      colors: {
        'font-blue': '#BBE1FA',
        'dark-blue': '#0F4C75',
      },
    },
    plugins: [],
  },
});
