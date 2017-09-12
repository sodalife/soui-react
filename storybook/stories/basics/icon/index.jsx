import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import _ from 'lodash'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, color, select, number } from '@storybook/addon-knobs'

import { Icon } from '../../../../dist/soui'
import styles from './style.pcss'

const groups = (function () {
  const types = _.keys(Icon.TYPE)
  const result = _({
    'circle-outline': /-circle-o$/,
    'circle': /-circle$/,
    'shield-outline': /-shield-o$/,
    'tall': /-tall$/,
    'ellipse': /-ellipse$/,
    'highlight': /-highlight$/,
    'colored': /-colored$/,
  }).mapValues((regexp) => types.filter((type) => regexp.test(type))).value()

  return {
    basic: _(result).values().flatten().xor(types).value(),
    ...result,
  }
}())

const stories = storiesOf('基础元素 / 图标 Icon', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let type = select('type', Icon.TYPE, 'coding')
  return (<div className={cx(styles.view, styles.phone, styles.center)}>
    <Icon className={styles.icon} type={type} style={{ color: color('style.color', '#666'), fontSize: number('style.fontSize', 160) }} />
  </div>)
}))

stories.add('全部图标', () => (
  <div className={styles.view}>
    {_(groups).keys().map((group) => {
      return (<div>
        <h3>{group}</h3>
        {groups[group].map((type) => {
          return (
            <div className={styles.item}>
              <Icon className={styles.icon} type={type} style={{ color: color('自定义颜色') }} />
              <span className={styles.name}>{type}</span>
            </div>
          )
        })}
      </div>)
    }).value()}
  </div>
))
