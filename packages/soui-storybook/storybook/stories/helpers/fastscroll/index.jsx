import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import { Fastscroll } from '@sodalife/soui-react'

import styles from './style.pcss'

const stories = storiesOf('助手 / 灵敏滚动 Fastscroll', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  return (<div className={cx(styles.phone, styles.view)}>
    <h3>Fastscroll</h3>
    <Fastscroll onFastscroll={action('fastscroll')}>
      <div className={styles.container}>
        <div className={styles.content}>
        </div>
      </div>
    </Fastscroll>
    <h3>普通 Scroll</h3>
    <div className={styles.container} onScroll={action('scroll')}>
      <div className={styles.content}>
      </div>
    </div>
    <p className={styles.tip}>提醒：请在 iOS 设备上测试。</p>
  </div>)
}))
