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
        "gray-100":"rgba(0,0,0,0.54)",
        "gray-150":"rgba(0,0,0,0.87)",
        "gray-700":"#333333"
      },
      backgroundColor:{
        "gray-350": "#f3f7fd",
        "stone-500":"#eaeaea",
        "transparent":"#00000000"
      },
      maxWidth:{
        "xxs":"288px"
      }
    },
  },
  plugins: [],
}
