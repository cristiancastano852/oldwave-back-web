/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
      },
      spacing: {
        90: '22.5rem',
      },
      colors: {
        'sky-blue': '#C7F3FD',
        'blue-beau': '#C5D3DD',
        'gh-white': '#F4F6FA',
        'cult-white': '#F7F7F7',
        'light-grey': '#5C5E64',
        'footer-gray': '#3B3B3B',
        platinium: '#E2E2E2',
        violet: '#772CE8',
        'violet-light': '#DCC8F9',
        orange: '#F99C36',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
};
