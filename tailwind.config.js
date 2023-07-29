/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        cornflowerblue: '#606eb5',
        gray: {
          100: 'rgba(255, 255, 255, 0.5)',
          200: 'rgba(0, 0, 0, 0.75)',
        },
        white: '#fff',
        lightgray: '#d8ccc8',
        darkslategray: '#494949',
      },
      fontFamily: {
        primaryFont: 'Helvetica',
        secondaryFont: 'Helvetica-CE, sans-serif',
        terdiaryFont: 'Helvetica',
      },
    },
    fontSize: {
      '6xl': '25px',
      '231xl': '250px',
      mini: '15px',
      '81xl': '100px',
    },
  },
  corePlugins: {
    preflight: false,
  },
}
