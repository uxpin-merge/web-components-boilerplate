/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Scale',
        include: [
          'src/components/ScaleButton/ScaleButton.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'UXPin Merge Boilerplate',
};
