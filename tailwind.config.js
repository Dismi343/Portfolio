/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'chip': "url('./assets/chip.png')",
        'pro':'url("./assets/Profile_pic2.png")',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
    
        primary: {
          light: '#AEB075',
          DEFAULT: '#A6A867',
          dark: '#91935D',
         
        },
        secondary: {
          light: '#7C7D52',
          DEFAULT: '#51513D',
          dark: '#51513D',
        },
        dark: {
          light: '#36392F',
          DEFAULT: '#292D28',
          dark: '#191D1E',
        },
      },
    },
    animation: {
      scroll: 'scroll 40s linear infinite',
      slide : 'fall 3s ease infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
        fall: {
                '0%': { transform: 'translate(0%,-25%) ' },
                '50%': { transform: 'translate(0%, 25%) ' },
                '100%': { transform: 'translate(0%,-25%) ' },
                
              },
    },
  },
  plugins: [],
}