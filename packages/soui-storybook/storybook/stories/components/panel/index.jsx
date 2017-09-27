import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Panel } from '@sodalife/soui-react'

import styles from './style.pcss'

const { PanelItem } = Panel

const stories = storiesOf('组件 / 面板 Panel', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    subtitle: text('subtitle', '副标题'),
    description: text('description', '描述'),
    thumbnail: text('thumbnail', 'https://imgplaceholder.com/100x54'),
    onClick: action('click'),
  }
  return (<div className={cx(styles.phone)}>
    <Panel {...props}>
      <PanelItem {...props}/>
      <PanelItem {...props}/>
    </Panel>
  </div>)
}))
