/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF911B',
          'orange-dark': '#E67E0A',
          'orange-light': '#FFA947',
          blue: '#07396E',
          'blue-light': '#0E4E8F',
          'blue-dark': '#052A52',
          dark: '#141414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(7, 57, 110, 0.12)',
        'card-hover': '0 12px 32px -8px rgba(7, 57, 110, 0.22)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
