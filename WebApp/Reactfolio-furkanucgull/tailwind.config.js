/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        PirataOne: ['Pirata One', 'sans-serif'],
        PlaywriteDKLoopet: ['Playwrite DK Loopet', 'sans-serif'],
        SilkScreen: ['Silkscreen', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
