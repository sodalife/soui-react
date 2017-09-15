import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Alert, alert, Button } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('对话 / 情景 / 警告 Alert', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    visible: boolean('visible', true),
    onClosed: action('closed'),
    message: text('message', '内容'),
    onOk: action('ok'),
    okText: text('okText', 'OK'),
    okDisabled: boolean('okDisabled', false),
  }

  return (<div className={styles.phone}>
    <Alert {...props} />
  </div>)
}))

stories.add('幽灵模式', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    message: text('message', '内容'),
    okText: text('okText', 'OK'),
    okDisabled: boolean('okDisabled', false),
  }
  return (<div className={styles.phone}>
    <Button onClick={() => alert(props)} type="ghost">警报</Button>
  </div>)
}))

stories.add('幽灵模式 - 延迟关闭', withInfo()(() => {
  function onOk () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 1800)
    })
  }
  return (<div className={styles.phone}>
    <Button onClick={() => alert({ message: 'message', onOk })} type="ghost">警报</Button>
  </div>)
}))
