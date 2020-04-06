const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
  //需要暗黑主题，需要全量引入
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: 'css',
  // }),
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    '@': path.resolve('src')
  })
);