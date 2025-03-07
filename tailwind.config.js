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
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#8c54ff',
          DEFAULT: '#6c2bd9',
          dark: '#4a1e9e',
        },
        dark: {
          light: '#2d3748',
          DEFAULT: '#1a202c',
          dark: '#171923',
        },
      },
    },
  },
  plugins: [],
}