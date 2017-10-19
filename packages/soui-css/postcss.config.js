var isDevelopment = process.env.NODE_ENV === 'development'

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
    require('saladcss-bem')({
      style: 'bem',
      separators: {
        namespace: '-',
        descendent: '__',
        modifier: '--',
      },
      shortcuts: {
        'component-namespace': 'bem-namespace',
        'component': 'block',
        'descendent': 'element',
        'modifier': 'modifier',
      },
    }),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('lost')(),
    (isDevelopment || require('cssnano')()),
  ].filter(function (plugin) { return typeof plugin !== 'boolean' }),
}
