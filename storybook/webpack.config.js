module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pcss$/,
        loader: `style-loader!css-loader?module&importLoaders=1!postcss-loader`,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
