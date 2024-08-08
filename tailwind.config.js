/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: " Poppins, sans-serif",
    },
    extend: {
      colors:{
        main:"#db4444",
        textWhite:"#fafafa",
        textWhite2:"#f5f5f5",
        newGreen:"#00ff66",
        buttonRed: "#e07575",
        buttonBlue:"#a0bce0",
        borderColor:"#7d8184",
        textColor:"#595454"
      },
      fontFamily:{
        Inter:"Inter, sans-serif",
      },
      screens:{
        xs:"430px",
        ml:"820px"
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(150px, 1fr))',
        'responsive': 'repeat(auto-fit, minmax(200px, 1fr))',
        "responsive-xl": "repeat(auto-fit, minmax(250px, 1fr))",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-path-custom-active': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        '.clip-path-custom-passiv': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
}

