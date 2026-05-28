/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0f',
          900: '#0f0f1a',
          800: '#16162a',
          700: '#1e1e36',
          600: '#2a2a4a',
        },
        plasma: {
          300: '#a8d4fc',
          400: '#7eb8f7',
          500: '#4d9de0',
          600: '#2d7dd2',
        },
        gold: {
          400: '#f0c060',
          500: '#d4a030',
        },
        mist: {
          100: '#f0f0f8',
          200: '#d8d8e8',
          300: '#b8b8d0',
          400: '#9090b0',
          600: '#606080',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 1s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
