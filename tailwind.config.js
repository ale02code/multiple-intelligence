/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'green-moss': '#897E52',
      },

      colors: {
        'orange-red': '#FF5757',
        'orange-red-dark': '#800000',
      },

      fontFamily: {
        'lato': ["Lato", 'sans-serif'],
        'spectral': ["Spectral", 'serif'],
      }
    },
  },
  plugins: [],
}

