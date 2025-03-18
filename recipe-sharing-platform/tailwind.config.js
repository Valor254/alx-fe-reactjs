/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // Vibrant Orange
        secondary: "#004E64", // Deep Teal
        accent: "#F7C59F", // Soft Peach
        background: "#F4F4F4", // Light Gray
        textPrimary: "#2A2A2A", // Dark Gray for readability
      },
    },
  },
  plugins: [],
};
