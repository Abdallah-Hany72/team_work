import designSystem from './src/styles/designSystem.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: designSystem.tailwindTheme,
  plugins: [],
};
