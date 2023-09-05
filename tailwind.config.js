/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'bgimage': 'url("./src/assets/banner.jpg")'
    },
    extend: {
      colors: {
        'cor-01': '#2E1065',
        'cor-02': '#6D28D9',
        'cor-03': '#8B5CF6',
        'cor-04': '#A895FF',
        'cor-05': '#DDD6FE',
        'cor-06': '#ffffff'
      }
    },
  },
  plugins: [],
}
