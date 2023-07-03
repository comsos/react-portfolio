/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '3xl': ['2.5rem', {
        lineHeight: '3.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '1',
      }],
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily:{
      'nue': ['Neue Montreal']
    }
  },
  plugins: [],
}

