module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6464',
        secondary: '#00A8CC',
        tertiary: '#EDF7FA',
        dark: '#21243D',
        'dark-indigo': '#142850',
        light: '#8695A4',
        year: '#FF7C7C',
      },

      fontFamily: {
        primary: ['Heebo-Regular', 'sans-serif'],
        'text-100': ['Heebo-Medium', 'sans-serif'],
        'text-200': ['Heebo-Bold', 'sans-serif'],
        'text-300': ['Heebo-Black', 'sans-serif'],
      },
    },

    screens: {
      xs: { max: '576px' },
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    container: {
      center: true,
    },
  },

  plugins: [],
};
