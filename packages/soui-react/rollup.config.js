import base from './rollup.conf.base.js'

const external = require('@yelo/rollup-node-external')

export default Object.assign({}, base, {
  output: {
    file: 'dist/soui.js',
    format: 'umd',
    name: 'soui',
  },
  external: external({
    whitelist: [/^@sodalife\/soui-css(\/.*)?/],
  }),
})
