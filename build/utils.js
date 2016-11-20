var path = require('path')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var App = require('../src/pages.conf.js')

exports.entries = function() {
  var result = {}
  App.pages.forEach(m => {
    m.block.forEach(p => {
      result[p.entry] = path.resolve(__dirname, '../src/views/', p.entry + '.js')
    })
  })
  return result
}

exports.templates = function() {
  var result = []
  var pagesDir = process.env.NODE_ENV === 'production' 
    ? config.build.pagesDir
    : config.dev.pagesDir
  var pageExt = process.env.NODE_ENV === 'production' 
    ? config.build.pageExt
    : config.dev.pageExt

  App.pages.forEach(m => {
    m.block.forEach(p => {
      result.push({
        title: p.title,
        filename: path.join(pagesDir, p.entry + '.' + pageExt),
        template: path.resolve(__dirname, '../index.html'),
        chunks: ['vendor', 'manifest', p.entry]
      })
    })
  })
  return result
}

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
