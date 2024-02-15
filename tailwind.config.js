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
        "gray-250": "#f7f7f7",
        "gray-300": "#A5AABA",
        "white-200": "#f3f3f3",
        "gray-100":"rgba(0,0,0,0.54)"
      },
      backgroundColor:{
        "gray-350": "#f3f7fd",
      },
      maxWidth:{
        "xxs":"288px"
      }
    },
  },
  plugins: [],
}
