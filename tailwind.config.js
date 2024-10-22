/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ["'Rubik Wet Paint'", 'system-ui'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#34C9FF',
      secondary: '#0096CC',
      'neutral-800': '#939393',
      'neutral-400': '#A3A3A3',
      'neutral-950': '#0A0A0A',
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
