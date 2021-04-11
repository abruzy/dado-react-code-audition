module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark1: '#18214D',
        dark2: '#29335C',
        gray1: '#3E4462',
        gray2: '#DFE4EA',
        orange1: '#F3663F'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
