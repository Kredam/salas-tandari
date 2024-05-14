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
      fontFamily: {
        sans: ['PT', 'Sans'],
        serif: ['PT', 'Serif'],
      },
    },
  },
  plugins: [],
}
