/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Web Components',
        include: [
          'src/components/WcButton/WcButton.jsx',
          'src/components/WcDrawer/WcDrawer.jsx',
          'src/components/WcList/WcList.jsx',
          'src/components/WcListItem/WcListItem.jsx',
          'src/components/WcDropdown/WcDropdown.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'UXPin Merge Boilerplate',
};
