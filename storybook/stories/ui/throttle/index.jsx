import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import { Throttle } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('节流阀 Throttle (实验性)', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    waitText: ({ countdown }) => `重获验证码 (${countdown})`,
    children: text('children', '获取验证码'),
    onClick: action('click'),
    onTick: action('tick'),
    startedAt: number('startedAt', +new Date()),
    wait: number('wait', 10 * 1000),
    disabled: boolean('disabled', false),
  }
  return (<div className={cx(styles.phone, styles.center)}>
    <Throttle className={styles.send} disabled={false} {...props} />
    <p className={styles.warning}>提醒：Notice 组件仍处实验性状态，后续版本 API 可能发生变化。</p>
  </div>)
}))

stories.add('完整示例', withInfo()(() => {
  class Story extends Component {
    constructor () {
      super()
      this.state = {}
    }
    render () {
      let props = {
        waitText: ({ countdown }) => `重获验证码 (${countdown})`,
        children: text('children', '获取验证码'),
        onClick: () => this.setState({ startedAt: +new Date() }, action('click')),
        onTick: action('tick'),
        startedAt: this.state.startedAt,
        wait: number('wait', 10 * 1000),
        disabled: boolean('disabled', false),
      }
      return (<div className={cx(styles.phone, styles.center)}>
        <Throttle className={styles.send} disabled={false} {...props} />
      </div>)
    }
  }

  return <Story />
}))
