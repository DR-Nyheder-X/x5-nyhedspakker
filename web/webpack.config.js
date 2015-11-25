var path = require('path')
var webpack = require('webpack')

var isProduction = process.env.NODE_ENV === 'production'

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PRODUCTION: isProduction,
    __DEVELOPMENT: process.env.NODE_ENV === 'development'
  })
]

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }))
}

var hotClient = 'webpack-hot-middleware/client'
var entry = { index: './client/index.js' }

module.exports = {
  devtool: isProduction ? null : 'cheap-eval-source-map',
  entry: Object.keys(entry).reduce((entries, key) => {
    entries[key] = isProduction
      ? entry[key]
      : [entry[key], hotClient]
    return entries
  }, {}),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    publicPath: '/client/'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      }, {
        test: /\.s?css?$/,
        loader: 'style!css!autoprefixer!sass?includePaths[]=./node_modules'
      }
    ]
  }
}

