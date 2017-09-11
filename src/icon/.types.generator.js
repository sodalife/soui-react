#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var raw = fs.readFileSync(path.join(__dirname, './assets/iconfont.js'), 'utf8')

var types = raw.match(/symbol id="icon-.*?"/g).map(function (matched) {
  return matched.replace(/^symbol id="icon-(.*)"$/, "$1")
})

var output = `\
import km from 'keymirror'

export default km({
${types.map((type) => `  '${type}': null,`).join('\n')}
})
`

fs.writeFileSync(path.join(__dirname, './types.js'), output, 'utf8')
