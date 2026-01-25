/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tes autres polices...
        'title': ['Syne', 'sans-serif'], // Si tu avais déjà ça
        // 👇 AJOUTE CELLE-CI
        'rumei': ['"Rumei House"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}