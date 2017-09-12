import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Notice } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('组件 / 通知 Notice (实验性)', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    closable: boolean('closable', false),
    children: text('children', '提示内容'),
    onClose: action('close'),
  }
  return (<div className={cx(styles.phone)}>
    <Notice {...props}/>
    <p className={styles.warning}>提醒：Notice 组件仍处实验性状态，后续版本 API 可能发生变化。</p>
  </div>)
}))
