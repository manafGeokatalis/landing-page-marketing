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
        bgHijau: '#D9FFED',
        bgBiru: '#C3DCEE',
        bgPutih: '#FFFFFF',
        bgAbu: '#EFEFEF',
        solidHitam: '#000000',
        solidDarkAbu: '#4C4C4C',
        solidAbu: '#666666',
        solidHijau: '#33B679',
        solidBiru: '#4B96CC',
        solidMerah: '#F15F5F',
        solidWarning: '#CAA33D',
        briHijau: '#87DEB5',
        briBiru: '#88B9DD',
        briAbu: '#B3B3B3',
        briMerah: '#F58A8A',
        briWarning: '#F4BF37'
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        opensans: ['Heebo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}