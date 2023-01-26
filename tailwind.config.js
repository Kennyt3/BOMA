/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        logo: 'rgba(17, 112, 224, 1)',
        plain: 'rgba(248, 248, 248, 1)',
        header: 'rgba(35, 35, 37, 1)',
        footer: 'rgba(23, 25, 28, 0.6)',
        deets: 'rgba(23, 25, 28)',
        search: 'rgba(23, 25, 28, 0.7)',
        darksearch: 'rgba(248, 248, 248, 1)',
        main: 'rgba(52, 50, 50, 1)',
        bag: 'rgba(17, 112, 224, 1)',
        smheader: 'rgba(23, 25, 28, 1)',
        danger: 'rgba(134, 48, 48, 1)',
        bod: 'rgba(181, 183, 186, 1)',
        lightsmalnav: 'rgba(248, 248, 248, 1)',
        process: 'rgba(17, 112, 224, 1)',
      },
      screens: {
        ll: '350px',
        xl: '400px',
        ml: '550px',
      },
    },
  },
  plugins: [],
}
