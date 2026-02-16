/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ht-navy': {
          DEFAULT: '#0a0e17',
          800: '#111827',
          900: '#0a0e17',
          950: '#060810',
        },
        'ht-green': {
          DEFAULT: '#00ff9d',
          dark: '#00cc7a',
          glow: 'rgba(0, 255, 157, 0.4)',
        },
        'ht-amber': '#fbbf24',
        'ht-gold': '#d4af37',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 157, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.4)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
