/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html",          
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Change to "media" if needed
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
