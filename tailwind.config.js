/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f9f8',
          100: '#daf1ee',
          200: '#b2e4dd',
          300: '#83d1c7',
          400: '#45b5a8',
          500: '#2a9d90',
          600: '#208177',
          700: '#1d6861',
          800: '#1b524d',
          900: '#1a4542',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'kenburns': 'kenburns 20s ease-out infinite',
        'slide-in': 'slideIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};