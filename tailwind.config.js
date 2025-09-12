module.exports = {
  content: ['./public/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#FFF',
        highlight: '#f2ca19', // Main highlight color - change this to update all highlights
        red: '#F95B2B', // Used for error messages
      },
    },
  },
  plugins: [],
}
