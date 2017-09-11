import React from 'react'
import _ from 'lodash'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { Button } from '../../../../dist/soui'

import styles from './style.pcss'

const stories = storiesOf('按钮 Button', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    type: select('type', _.values(Button.TYPE), Button.TYPE.DEFAULT),
    size: select('size', _.values(Button.SIZE), Button.SIZE.NORMAL),
    disabled: boolean('disabled'),
    children: text('children', '点击'),
  }
  return (<div className={styles.view}>
    <p><Button onClick={action(`clicked: ${JSON.stringify(props)}`)} {...props} /></p>
  </div>)
}))

stories.add('所有按钮', () => {
  return (<div className={styles.view}>
    {_.values(Button.SIZE).map((size) => {
      return _.values(Button.TYPE).map((type) => {
        return (<p><Button onClick={action(`[clicked] size: ${size}, type: ${type}`)} {...{ type, size }}>Click me</Button></p>)
      }).concat(<p><Button onClick={action(`[clicked] size: ${size}, disabled`)} size={size} disabled>Click me</Button></p>)
    })}
  </div>)
})
