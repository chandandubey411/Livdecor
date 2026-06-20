/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        primary: '#D89A5B',
        'primary-dark': '#C4834A',
        'primary-light': '#E8B07A',
        secondary: '#F5EFE8',
        dark: '#2A2A2A',
        'dark-light': '#3D3D3D',
        background: '#FAFAFA',
        'warm-gray': '#8C7A6B',
        'light-gray': '#E8E0D8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(216,154,91,0.18)',
        card: '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.14)',
        nav: '0 2px 20px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
=======
    extend: {},
>>>>>>> 58e60c7a105a5ff6112da9a9ac35ca2279a87519
  },
  plugins: [],
}