# soui.css
> Soda UI Components Stylesheets

## Installation
```sh
npm i --save @sodalife/soui-css
```

## Usage
### rollup
```javascript
// rollup.config.js
import nodejs from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'

const external = require('@yelo/rollup-node-external')

const cssExportMap = {}

export default {
	// ...input and output
  external: external({
    whitelist: [/^@sodalife\/soui-css(\/.*)?/],
  }),
  plugins: [
    nodejs(),
    postcss({
      plugins: [
        ...require('@sodalife/soui-css/postcss.config.js').plugins,
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
      exclude: ['node_modules/**', '../soui-css/**'],
      externalHelpers: false,
    }),
 ],
}
```

## License
[Apache License 2.0](LICENSE)
