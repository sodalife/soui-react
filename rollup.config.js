import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/soui.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      plugins: [
        ...require('./postcss.config.js').plugins,
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          },
        }),
      ],
      getExport (id) {
        return cssExportMap[id]
      },
      extensions: ['.css', '.pcss']
    }),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-0', 'react'],
      exclude: 'node_modules/**',
    }),
 ],
}
