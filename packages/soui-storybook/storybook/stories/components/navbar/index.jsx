import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { Navbar } from '@sodalife/soui-react'

import styles from './style.pcss'

const { NavbarItem } = Navbar

const stories = storiesOf('组件 / 导航栏 Navbar', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    isActived: boolean('isActived', false),
    onClick: action('click'),
  }
  return (<div className={cx(styles.phone, styles.view)}>
    <Navbar className={styles.Navbar}>
      <NavbarItem icon="home" title="首页" {...props} />
      <NavbarItem icon="gamepad" title="游戏" {...props} />
      <NavbarItem icon="order" title="订单" {...props} />
      <NavbarItem icon="user" title="我的" {...props} />
    </Navbar>
  </div>)
}))
