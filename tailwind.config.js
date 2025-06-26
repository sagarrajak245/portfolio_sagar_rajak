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
