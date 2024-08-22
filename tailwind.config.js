/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/layout/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor: {
        'cosco-button': '#0D9488',
      },  
      height: {
        'section': 'calc(100vh - 4rem)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      textColor: {
        'cosco-primary': '#134E4A',
        'cosco-primary-60': 'rgba(15, 118, 110, 0.6)',
        'cosco-secondary': '#115E59',
      }
    },
  },
  plugins: [],
}
