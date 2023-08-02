module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#ea4b37",
          "secondary": "#fc8a72",
        },
      },
      {
        dark: {
          "primary": "#ea4b37",
          "secondary": "#fc8a72",
        },
      },
    ],
  },
};
