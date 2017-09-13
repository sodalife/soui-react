import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Jumbotron } from '../../../../dist/soui'

import styles from './style.pcss'

const { JumbotronButton } = Jumbotron

const stories = storiesOf('组件 / 大荧幕 Jumbotron', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    size: select('size', _.values(JumbotronButton.SIZE), JumbotronButton.SIZE.DEFAULT)
  }
  return (<div className={cx(styles.phone, styles.view)}>
    <Jumbotron className={styles.jumbotron}>
      <h3>欢迎回来</h3>
      <JumbotronButton size={props.size}>按钮</JumbotronButton>
    </Jumbotron>
  </div>)
}))

stories.add('所有大荧幕', withInfo()(() => {
  return (<div className={cx(styles.phone, styles.view)}>
    <h3>Jumbotron</h3>
    <Jumbotron className={styles.jumbotron}>
      欢迎回来
    </Jumbotron>
    <h3>集成按钮</h3>
    <Jumbotron className={styles.jumbotron}>
      <h3>欢迎回来</h3>
      <JumbotronButton>默认按钮</JumbotronButton>
    </Jumbotron>
    <h3>集成小按钮</h3>
    <Jumbotron className={styles.jumbotron}>
      <h3>欢迎回来</h3>
      <JumbotronButton size="small">小按钮</JumbotronButton>
    </Jumbotron>
  </div>)
}))
