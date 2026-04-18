// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.2, 0.9, 0.4, 1.1)',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};