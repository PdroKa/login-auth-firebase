/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      gridTemplateColumns: {
        layout: '350px, calc(100% - 350px)',
      },
      gridTemplateRows: {
        layout: '42px, calc(100vh - 42px - 42px)',
      },
      colors: {
        primary: '#1B1F38',
        secundary: '#252A48',
      },
    },
  },
  plugins: [],
}
