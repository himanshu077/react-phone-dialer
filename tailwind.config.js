/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-400": "#3D61F3",
        "gray-250" :"#f7f7f7",
        "gray-300" :"#A5AABA",
      }
    },
  },
  plugins: [],
}
