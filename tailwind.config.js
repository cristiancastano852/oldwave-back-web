/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'sky-blue': '#C7F3FD',
      'blue-beau': '#C5D3DD',
      'gh-white': '#F4F6FA',
      'light-grey': '#5C5E64',
      violet: '#772CE8',
      orange: '#F99C36',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
