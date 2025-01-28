/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'skill-progress': 'growWidth 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};