/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  content: [],
  theme: {
    fontFamily: {
      // sans: ['"Source Sans Pro"', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      primary: '#C0F2EA',
      secondary: '#867BC4',
      dark: '#120B3C',
      code: '#1B1E38',
      white: '#F5F5F5',
      error: '#EF4444',
      warning: '#FCD34D',
      success: '#34D399',
      link: '#60A5FA',
      gray: 'rgb(148 163 184)',
    },
    screens: {
      xs: { max: '600px' },
      sm: { min: '601px', max: '768px' },
      md: { min: '769px', max: '1024px' },
      lg: { min: '1025px', max: '1440px' },
      xl: { min: '1441px' },
    },
    extend: {},
  },
  plugins: [],
}
