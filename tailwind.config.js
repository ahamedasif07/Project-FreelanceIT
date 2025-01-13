/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(209, 213, 219, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-size': '50px 50px', // 50px square boxes
      },
    },
  },
  plugins: [],
}