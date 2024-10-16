/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grayDefault: '#939393',
      blueTheme: '#34C9FF',
      blueSecondary: '#0096CC',
      white: '#ffffff',
      black: '#000000',
    },
    fontSize: {
      'head-lg': '32px',
      'head-md': '20px',
      'head-sm': '18px',
      'head-sx': '16px',
      'body-lg': '18px',
      'body-md': '16px',
      'body-sm': '14px',
      'body-xs': '12px',
      'font-button': '16px',
    },
    extend: {},
  },
  plugins: [],
};
