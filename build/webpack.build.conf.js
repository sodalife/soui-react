var path = require('path')
var merge = require('webpack-merge')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var common = require('./webpack.base.conf.js')

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'soui.js',
    library: 'soui',
    libraryTarget: 'umd',
  },
  plugins: [
    new ProgressBarPlugin(),
  ],
})
