/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '.75rem',
        lg:"22px",
      },
      fontFamily: {
        body: ['Overpass'],
        display: ['Overpass'],
      },
      colors: {
        primary: '#00B2ED',
        black: {
          DEFAULT: '#000000',
          100:'#001515',
        },
        gray:{
          DEFAULT:"#FCFBF9",
        },
        skyBlue:{
          DEFAULT:'#00B2ED',
        },
      },
    },
  },
  plugins: [
    function({addComponents}) {
      addComponents ({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen sm': {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen md': {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen lg': {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
          '@screen xl': {
            maxWidth: '1120px',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        })
      }
  ],
};
