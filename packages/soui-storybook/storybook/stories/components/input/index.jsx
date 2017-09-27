import React, { Component } from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Input, Icon } from '@sodalife/soui-react'

import styles from './style.pcss'

const { InputPassword } = Input

const stories = storiesOf('组件 / 输入框 Input', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    icon: select('icon', Icon.TYPE, 'user'),
    placeholder: text('placeholder', 'yourname'),
    onChange: action('change'),
  }
  return (<div className={cx(styles.phone)}>
    <p><Input {...props} /></p>
    <p><InputPassword {...props} /></p>
  </div>)
}))
