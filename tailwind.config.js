/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' remplace la police par défaut de Tailwind
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
        
        // Vos polices personnalisées
        title: ['TitleFont', 'sans-serif'],
        rumei: ['Rumei', 'serif'],
      },
    },
  },
  plugins: [],
}