/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Inter'],
      'mono': ['Inter'],
      'display': ['Inter'],
      'body': ['Inter'],
    },
    extend: {
      colors: {
        primary: '#FFBA00',
      }
    },
  },
  plugins: [],
}

