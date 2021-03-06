module.exports = {
  purge: {
    content: ['./**/*.html', './**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-img': "url('../img/background-image.jpg')",
      }),
      fontFamily: {
        nav: ['Bebas Neue', 'sans-serif'],
        hero: ['Carter One', 'sans-serif'],
      },
    },
    colors: {
      purple: '#3A1772',
      'purple-dark': '#2B1155',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
