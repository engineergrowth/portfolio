/** @type {import('tailwindcss').Config} */

import formsPlugin from '@tailwindcss/forms';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dodgerblue: '#1E90FF',}
    },
  },
  plugins: [
   formsPlugin,
  ],
}