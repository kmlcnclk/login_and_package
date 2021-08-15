module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        yarım: '2px',
        vh100: '100vh',
      },
    },
    // screens: {
    //   xs: '300px',
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
