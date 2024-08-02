/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: {
          light: '#4169e1',  // optional: if you want to add different shades
          DEFAULT: '#4169e1',
          dark: '#1c39bb',  // optional: if you want to add different shades
        },
        theme: {
          DEFAULT: '#023460'
        }
      },
    },
  },
  plugins: [],
}

