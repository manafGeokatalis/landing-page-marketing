/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/*.html",    
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1E3A8A',
        briBlue: '#DBEAFE',        
        hoverBlue: '#A3CAFF',
        briWarning: '#F4BF37',
        bgStart: '#BEDCFE',
        blacky: '#272727'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        opensans: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}