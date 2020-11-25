module.exports = {
  purge: {
    content: [
      './resources/**/*.js',
      './resources/**/*.vue',
      './index.php'
    ],
    // whitelist: [
    //   'dark', //dark mode custom class name
    // ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'Arial', 'sans-serif']
      },
      colors: {
        'primary': '#ffc531',
        'primaryDark': '#ca9100',
        'backgroundDark': '#f2f2f2',
        'dark-text-primary': '#d2d2d2',
        'dark-background': '#292929',
        'dark-background-light': '#3e3d3d'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
