/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all JSX and JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
