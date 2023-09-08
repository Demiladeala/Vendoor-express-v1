/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'foundation-red-normal': '#DB3305',
        'foundation-red-active': '#F4C0B2',
        'black-color-text': '#3A3A3A',
        'body-bg-color': '#F7F7F7',
        'light-text-gray': '#B5B5B5',
      },
    },
  },
  plugins: [],
}
