/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kannada: ['Anek Kannada', 'sans-serif'],
        english: ['Cormorant Garamond', 'serif'],
        kannato: ['Noto Serif Kannada', 'serif'],
      }
    },
  },
  plugins: [],
}