/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      animation: {
        sway: 'sway 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
