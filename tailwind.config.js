/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'monteserrat': 'monteserrat',
      'ubuntu': 'ubuntu',
      'young-serif': 'serif',
      'oswald': 'oswald'
    },
    extend: {
      width: {
        '100px': '100px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}

