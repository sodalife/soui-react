module.exports = {
  plugins: [
    require('precss')(),
    require('autoprefixer')({
      'browsers': [
        'defaults',
        'last 5 iOS versions',
        '>0% in CN'
      ]
    }),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('lost')(),
    require('cssnano')(),
  ]
}
