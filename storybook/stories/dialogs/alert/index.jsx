import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Alert } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('对话 / 警告 Alert', module)

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
