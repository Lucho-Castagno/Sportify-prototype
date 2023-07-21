/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sportify-gray' : '#dfe6ef',
        'sportify-purple': '#9c6df2',
        'sportify-purple-2' : '#7c3aed',
        'sportify-purple-3': '#4c1d95'
      },
    },
  },
  plugins: [],
}

