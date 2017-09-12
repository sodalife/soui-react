import React, { Component } from 'react'
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
    children: text('children', '内容'),
    onClick: action('click'),
    className: styles.tag,
  }
  return (<div className={cx(styles.phone)}>
    {
      _.range(4).map((i) => <Tag key={i} {...props}/>)
    }
  </div>)
}))

stories.add('组合使用', () => {
  class Story extends Component {
    constructor () {
      super()
      this.state = {
        value: null,
      }
    }
    render () {
      return (<div className={styles.phone}>
        <div className={styles.group}>
          {
            _.range(4).map((i) => (
              <Tag
                key={i}
                selected={this.state.value === i}
                onClick={(selected) => this.setState({ value: selected ? i : null })}
                className={styles.tag}>
                {i}
              </Tag>
            ))
          }
        </div>
      </div>)
    }
  }
  return <Story />
})
