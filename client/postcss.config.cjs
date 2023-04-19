// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('@tailwindcss/forms'),
    ],
  };