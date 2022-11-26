/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  ttheme: {
    extend: {
      colors: {
        'gray': '#69707D',
        'orange': '#FF7E1B',
        'darkorange': '#cf5b02',
      },
    }
  },
  plugins: [],
}