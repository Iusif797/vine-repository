/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wine-gold': '#a19446',
        'wine-dark': '#1A1A1A',
      },
      fontFamily: {
        'primary': ['var(--font-primary)'],
        'secondary': ['var(--font-secondary)'],
      },
    },
  },
  plugins: [],
} 