/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spin: 'spin 4s linear infinite',

      },
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
        'cosco-50': '#E8F9F6',
      },
      height: {
        'section': 'calc(100vh - 4rem)',
      },
      textColor: {
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
        'cosco-50': '#E8F9F6',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}