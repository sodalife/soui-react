import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'

import { Clearfix } from '@sodalife/soui-react'

import styles from './style.pcss'

const stories = storiesOf('助手 / 清除浮动 Clearfix', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  return (<div className={styles.phone}>
    <div className={styles.box} style={{ float: "left" }} />
    <Clearfix />
    <div className={styles.box} style={{ float: "left" }} />
    <div className={styles.box} style={{ float: "left" }} />
    <Clearfix />
    <div className={styles.box} style={{ float: "left" }} />
  </div>)
}))
