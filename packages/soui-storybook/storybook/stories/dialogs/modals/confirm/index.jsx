import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Confirm, confirm, Button } from '@sodalife/soui-react'

import styles from './style.pcss'

const stories = storiesOf('对话 / 情景 / 确认 Confirm', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    visible: boolean('visible', true),
    onClosed: action('closed'),
    message: text('message', '消息'),
    onOk: action('ok'),
    okText: text('okText', '确认'),
    okDisabled: boolean('okDisabled', false),
    onCancel: action('cancel'),
    cancelText: text('cancelText', '取消'),
    cancelDisabled: boolean('cancelDisabled', false),
  }

  return (<div className={styles.phone}>
    <Confirm {...props} />
  </div>)
}))

stories.add('幽灵模式', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    message: text('message', '消息'),
    okText: text('okText', '确认'),
    okDisabled: boolean('okDisabled', false),
    cancelText: text('cancelText', '取消'),
    cancelDisabled: boolean('cancelDisabled', false),
  }
  return (<div className={styles.phone}>
    <Button onClick={() => confirm(props)} type="ghost">确认</Button>
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
    <Button onClick={() => confirm({ message: 'message', onOk, onCancel: onOk })} type="ghost">确认</Button>
  </div>)
}))

stories.add('幽灵模式 - Promise 阻止确认', withInfo()(() => {
  function onOk () {
    return Promise.reject(new Error('block'))
  }
  return (<div className={styles.phone}>
    <Button onClick={() => confirm({ message: 'message', onOk, onCancel: onOk })} type="ghost">确认</Button>
  </div>)
}))

stories.add('幽灵模式 - 抛异常阻止确认', withInfo()(() => {
  function onOk () {
    throw new Error('block')
  }
  return (<div className={styles.phone}>
    <Button onClick={() => confirm({ message: 'message', onOk, onCancel: onOk })} type="ghost">确认</Button>
  </div>)
}))
