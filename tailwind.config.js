/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js,jsx,ts,tsx,astro}', // Asegúrate de que esta ruta esté incluida correctamente
  './public/**/*.{html,js,jsx,ts,tsx}', // Verifica también que esta ruta esté correcta
];
export const theme = {
  extend: {},
};
export const plugins = [require('@tailwindcss/typography')];
