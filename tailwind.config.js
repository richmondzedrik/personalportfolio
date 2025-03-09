/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          50: '#f0f9ff',
          // ... other shades
          900: '#0c4a6e',
        },
        // Dark mode specific colors
        dark: {
          bg: '#121212',
          surface: '#1e1e1e',
          border: '#2e2e2e',
        }
      },
    },
  },
  plugins: [],
}
