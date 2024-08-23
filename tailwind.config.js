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
        'cosco-950': '#00110E',
        'cosco-900': '#011F1B',
        'cosco-850': '#022D29',
        'cosco-800': '#033B36',
        'cosco-750': '#054943',
        'cosco-700': '#075651',
        'cosco-650': '#09645F',
        'cosco-600': '#0A746C',
        'cosco-550': '#0C837A',
        'cosco-500': '#0D9488', // Color base
        'cosco-450': '#11A28C',
        'cosco-400': '#12B19B',
        'cosco-350': '#1DC1A6',
        'cosco-300': '#2BD0B3',
        'cosco-250': '#4DD5C4',
        'cosco-200': '#80DACD',
        'cosco-150': '#B2E1D7',
        'cosco-100': '#D3F1EB',
        'cosco-50':  '#E8F9F6',

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
