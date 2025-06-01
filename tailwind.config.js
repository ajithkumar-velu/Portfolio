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
        'btn-unique': ' ',
        'drawer': 'linear-gradient(135deg,#385170,#9fd3c7)',
        "c1": "#D6BD98",

      },
      colors: {
        "c1": "#D6BD98"
      }
    },
  },
  plugins: [

    function ({ addUtilities }) {
      addUtilities({
        '.perspective-500': {
          perspective: '1500px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.transform-3d': {
          transform: 'scaleX(1.2) rotateY(15deg)',
        },
        
      });
    },
  ],
}