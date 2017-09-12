import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Tag } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('标签 Tag', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    selected: boolean('selected', false),
    onClick: action('click'),
    children: text('children', '内容'),
    className: styles.tag,
  }
  return (<div className={cx(styles.phone)}>
    {
      _.range(4).map((i) => <Tag key={i} {...props}/>)
    }
  </div>)
}))
