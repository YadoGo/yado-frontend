module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
};
