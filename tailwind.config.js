module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img': "url('img/background-image.jpg')",
      }),
      fontFamily: {
        nav: ['Bebas Neue', 'sans-serif'],
        hero: ['Carter One', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
