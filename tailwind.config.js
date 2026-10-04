/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          page: '#0f4c45',
          panel: '#093a36',
          border: '#4b8d7c',
        },
        ivory: '#fffdd0',
        mint: {
          bright: '#72d6b0',
        },
        indigo: {
          name: '#0c1d42',
        },
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
        mono: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}