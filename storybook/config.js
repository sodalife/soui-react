import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'SouI Storybook',
  downPanelInRight: true,
})

function loadStories() {
  require('./stories/index.js')
  require('./stories/ui/icon')
  // You can require as many stories as you need.
}

configure(loadStories, module)
