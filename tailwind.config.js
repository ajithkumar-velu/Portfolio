/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1a3636, #40534cec)',
        'btn-unique': 'linear-gradient(135deg,#f8b400,#faf5e4)',
        'drawer': 'linear-gradient(135deg,#385170,#9fd3c7)',
        "c1": "#D6BD98",
        
      },
      colors: {
        "c1": "#D6BD98"
      }
    },
  },
  plugins: [],
}