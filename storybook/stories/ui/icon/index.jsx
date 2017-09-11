import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'
import _ from 'lodash'
import { withKnobs, color } from '@storybook/addon-knobs';

import { Icon } from '../../../../dist/soui'
import styles from './style.pcss'

const groups = (function () {
  const types = _.keys(Icon.types)
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

const stories = storiesOf('图标 Icon', module)

stories.addDecorator(withKnobs)

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
