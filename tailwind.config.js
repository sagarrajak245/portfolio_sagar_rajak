/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200%' },
          '100%': { backgroundPosition: '-200%' },
        },
      },
      colors: {
        'cyber-blue': '#0891b2',
        'cyber-purple': '#7c3aed',
        'cyber-pink': '#ff0054',
        'cyber-green': '#adc178',
        'cyber-silver': '#ced4da',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(0, 0, 0, 0.3)',
      },
      animation: {
        shine: 'shine 1.5s linear',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
}
