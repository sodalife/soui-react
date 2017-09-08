module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.pcss$/,
        loader: `style-loader!css-loader?module&importLoaders=1!postcss-loader`,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: "file-loader?name=asset/[hash].[ext]",
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
