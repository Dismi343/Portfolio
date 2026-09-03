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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
          dark: '#3D3F2F',
        },
        dark: {
          light: '#36392F',
          DEFAULT: '#292D28',
          dark: '#191D1E',
        },
        accent: {
          blue: '#00D9FF',
          purple: '#9D4EDD',
          pink: '#FF006E',
          green: '#10B981',
          orange: '#F97316',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(166, 168, 103, 0.3)',
        'glow-lg': '0 0 40px rgba(166, 168, 103, 0.4)',
        'glow-xl': '0 0 60px rgba(166, 168, 103, 0.5)',
        'neon-blue': '0 0 10px rgba(0, 217, 255, 0.5)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      opacity: {
        '05': '0.05',
        '08': '0.08',
        '12': '0.12',
      }
    },
    animation: {
      scroll: 'scroll 40s linear infinite',
      slide: 'fall 3s ease infinite',
      'float': 'float 3s ease-in-out infinite',
      'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      'slide-in-left': 'slide-in-left 0.6s ease-out',
      'slide-in-right': 'slide-in-right 0.6s ease-out',
      'fade-in-up': 'fade-in-up 0.6s ease-out',
      'bounce-slow': 'bounce 3s infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      fall: {
        '0%': { transform: 'translate(0%,-25%)' },
        '50%': { transform: 'translate(0%, 25%)' },
        '100%': { transform: 'translate(0%,-25%)' },
      },
      'float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      'pulse-glow': {
        '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(166, 168, 103, 0.3)' },
        '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(166, 168, 103, 0.5)' },
      },
      'slide-in-left': {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      'slide-in-right': {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      'fade-in-up': {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
  },
  plugins: [],
}