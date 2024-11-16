/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'nav': ['2rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.02em',
        fontWeight: '1',
      }],
      'name': ['6rem', {
        lineHeight: '3.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '1',
      }],
      'hero': ['4rem', {
        lineHeight: '4rem',
        letterSpacing: '-0.02em',
        fontWeight: '1',
      }],
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      'nue': ['Neue Montreal'],
    }
  },
  plugins: [],
}

