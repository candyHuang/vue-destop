var path = require('path')
var packageConf = require('../package.json')

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/' + packageConf.name + '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // multi pages
    basePath: '/vue-destop/views',
    targetRoot: path.resolve(__dirname, '../../test/webapp'),
    autoDeploy: false,
    pagesDir: 'views',
    pagesSubDir: '',
    pageExt: 'html'
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: 8888,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // proxy all requests starting with /api to rap
      '/api': {
        target: 'http://172.16.1.63:8018/mockjsdata/12',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    // multi pages
    // basePath: '/\<%=basePath %\>',
    basePath: '',
    pagesDir: '',
    pageExt: 'html'

  }
}
