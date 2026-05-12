/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        void: '#0B0C10',
        glass: 'rgba(255, 255, 255, 0.03)',
        cyan: '#00F0FF',
        purple: '#7000FF',
      },
      backgroundImage: {
        'aurora': 'linear-gradient(120deg, rgba(0, 240, 255, 0.15) 0%, rgba(112, 0, 255, 0.15) 100%)',
      },
      animation: {
        'aurora-shift': 'aurora 10s ease infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '100%': { transform: 'scale(1.2) translate(20px, -20px)' },
        }
      }
    },
  },
  plugins: [],
}
