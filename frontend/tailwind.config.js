/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: { panel: '0 8px 28px rgba(15, 23, 42, 0.06)' },
      colors: { ink: '#152035', brand: '#2563eb' },
    },
  },
  plugins: [],
}
