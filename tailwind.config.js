/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image": "url('/src/media/back.jpeg')",
        "left": "url('/src/media/frant.jpeg')"
      }
    },
  },
  plugins: [],
}

