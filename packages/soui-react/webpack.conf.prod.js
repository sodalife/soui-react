var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

var base = require('./webpack.conf.base.js')

module.exports = merge(base, {
  entry: {
    soui: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'soui.standalone.min.js',
    library: 'soui',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new ProgressBarPlugin(),
    new LodashModuleReplacementPlugin,
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production'),
      },
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new UnminifiedWebpackPlugin(),
  ],
})
