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
      'grayDefault': '#939393',
      'blueTheme': '#34C9FF',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
};
