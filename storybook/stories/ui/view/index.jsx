import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, select } from '@storybook/addon-knobs'

import { View } from '../../../../dist/soui'

import styles from './style.pcss'

const { ViewMain, ViewCard } = View

const stories = storiesOf('视图 View', module)

stories.addDecorator(withKnobs)

stories.add('基础视图', withInfo()(() => {
  return (<div className={styles.view}>
    <View>
      <ViewMain>
        内容
      </ViewMain>
    </View>
  </div>)
}))

stories.add('卡片视图', withInfo()(() => {
  return (<div className={styles.view}>
    <View>
      <ViewMain>
        <ViewCard>
          内容
        </ViewCard>
      </ViewMain>
    </View>
  </div>)
}))
