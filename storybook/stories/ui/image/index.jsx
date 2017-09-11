import React from 'react'
import _ from 'lodash'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Image } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('图片 Image', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    src: text('src', 'https://unsplash.it/320/200/?random'),
    placeholder: text('placeholder', 'https://imgplaceholder.com/320x200/cccccc/757575/ion-android-more-horizontal'),
    error: text('error', 'https://imgplaceholder.com/320x200/cccccc/757575/fa-bug'),
  }
  return (<div className={styles.view}>
    <p><Image {...props}/></p>
  </div>)
}))
