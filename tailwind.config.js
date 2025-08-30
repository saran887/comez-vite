/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',  // Mobile (small)
      'md': '768px',  // Tablet
      'lg': '1024px', // Laptop
      'xl': '1280px', // Desktop
      '2xl': '1536px', // Large desktop
      '3xl': '1920px', // Extra large screens
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      scale: {
        '102': '1.02',
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
      },
    },
  },
  plugins: [],
}
