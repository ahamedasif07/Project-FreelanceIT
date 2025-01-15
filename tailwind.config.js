/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'underline-pulse': {
          '0%, 100%': { textDecoration: 'underline' },
          '50%': { textDecoration: 'none' },
        },
      },
      animation: {
        'underline-pulse': 'underline-pulse 4s infinite',
      },
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