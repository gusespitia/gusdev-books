import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,astro}', // Ajusta según tu proyecto
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
