const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
      },
      screens: {
        mobile: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      boxShadow: {
        custom:
          'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.body2': {
          fontSize: '13px',
        },
        '.subtitle': {
          fontSize: '14px',
        },
        '.subtitle2': {
          fontSize: '12px',
        },
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    }),
    plugin(function ({ addBase }) {
      addBase({
        h1: { fontSize: '65px' },
        h2: { fontSize: '36px' },
        body: { fontSize: '16px' },
      })
    }),
  ],
}
