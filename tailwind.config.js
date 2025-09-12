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
        yellow: '#f2ca19',
        purple: '#aa5fff',
        pink: '#ff55d2',
        blue: '#5996ff',
        green: '#87e911',
        red: '#F95B2B',
      },
    },
  },
  plugins: [],
}
