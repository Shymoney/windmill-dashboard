module.exports = {
  purge: [],
  theme: {
    themeVariants: ['dark'],
    extend: {},
  },
  variants: {
    backgroundColor: ['dark'],
    textColor: ['dark'],
  },
  plugins: [require('tailwindcss-multi-theme')],
}