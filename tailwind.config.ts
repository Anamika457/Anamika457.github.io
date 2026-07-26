import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#faf9f6',
          100: '#f2f0ea',
          200: '#e5e2d8',
          300: '#cfc9b8',
          400: '#a39c86',
          500: '#726b58',
          600: '#4f4a3c',
          700: '#332f27',
          800: '#1e1c17',
          900: '#121110',
          950: '#0a0a09',
        },
        lime: {
          300: '#e3ff5c',
          400: '#d4ff33',
          500: '#c2f00f',
          600: '#9dc50c',
          700: '#7a9a09',
        },
        coral: {
          400: '#ff8a70',
          500: '#ff6b4a',
          600: '#f0502e',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        wiggle: 'wiggle 0.4s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config