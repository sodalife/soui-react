import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'SouI Storybook',
  downPanelInRight: true,
})

function loadStories () {
  require('./stories/basics/icon')
  require('./stories/basics/button')
  require('./stories/basics/image')
  require('./stories/basics/view')

  require('./stories/components/list')
  require('./stories/components/notice')
  require('./stories/components/panel')
  require('./stories/components/tag')
  require('./stories/components/jumbotron')
  require('./stories/components/navbar')

  require('./stories/helpers/throttle')
  require('./stories/helpers/fastscroll')
  require('./stories/helpers/clearfix')
}

configure(loadStories, module)
