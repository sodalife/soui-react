import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

import base from './rollup.conf.base.js'

export default Object.assign({}, base, {
  output: {
    file: 'dist/soui.standalone.js',
    format: 'umd',
    name: 'soui',
    global: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    ...base.plugins,
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
})
