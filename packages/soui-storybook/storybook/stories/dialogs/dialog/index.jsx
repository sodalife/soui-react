import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Dialog, Button } from '@sodalife/soui-react'

import styles from './style.pcss'

const stories = storiesOf('对话 / 对话框 Dialog', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    children: text('children', '内容'),
    title: text('title', '标题'),
    visible: boolean('visible', true),
    onClosed: action('closed'),
    footer: text('footer', '页底'),
  }
  return (<div className={cx(styles.phone, styles.view)}>
    <Dialog {...props} />
  </div>)
}))

stories.add('控制显隐', () => {
  class Story extends Component {
    constructor () {
      super()
      this.state = {
        show: true,
      }
    }

    render () {
      return (<div className={cx(styles.phone, styles.view)}>
        <Dialog
          title="SouI"
          visible={this.state.show}
          footer={<a href="javascript: void 0;"  onClick={() => { this.setState({ show: false })}}>Close</a>}
          >
          Hello world
        </Dialog>
        <Button onClick={() => { this.setState({ show: true })}}>Show me</Button>
      </div>)
    }
  }
  return <Story />
})
