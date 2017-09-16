import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Prompt, prompt, Button } from '../../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('对话 / 情景 / 提词 Prompt (实验性)', module)

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
    placeholder: text('placeholder', 'placeholder'),
    initialValue: text('initialValue', 'initialValue'),
  }

  return (<div className={styles.phone}>
    <Prompt {...props} />
  </div>)
}))

stories.add('幽灵模式', withInfo()(() => {
  let props = {
    title: text('title', '标题'),
    message: text('message', '内容'),
    okText: text('okText', 'OK'),
    okDisabled: boolean('okDisabled', false),
    placeholder: text('placeholder', 'placeholder'),
    initialValue: text('initialValue', 'initialValue'),
  }
  return (<div className={styles.phone}>
    <Button onClick={() => prompt(props).then((result) => alert(result))} type="ghost">确认</Button>
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
    <Button onClick={() => prompt({ message: 'message', onOk, onCancel: onOk })} type="ghost">确认</Button>
  </div>)
}))
