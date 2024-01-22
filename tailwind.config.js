/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'course-image': "url('./images/course-background.png')",
      }
    },
  },
  plugins: [],
}

