import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Image } from '@sodalife/soui-react'

import styles from './style.pcss'

const stories = storiesOf('基础元素 / 图片 Image', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    src: text('src', 'https://unsplash.it/320/200/?random'),
    placeholder: text('placeholder', 'https://imgplaceholder.com/320x200/cccccc/757575/ion-android-more-horizontal'),
    error: text('error', 'https://imgplaceholder.com/320x200/cccccc/757575/fa-bug'),
  }
  return (<div className={cx(styles.phone, styles.center)}>
    <Image {...props}/>
  </div>)
}))
