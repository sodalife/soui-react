import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { List, Icon } from '../../../../dist/soui'

import styles from './style.pcss'

const { ListItem, ListSubItem, ListBrief, ListGroup, ListTitle, ListButton } = List

const stories = storiesOf('列表 List', module)

stories.addDecorator(withKnobs)

stories.add('基础', withInfo()(() => {
  let props = {
    thumbnail: text('thumbnail', 'https://imgplaceholder.com/24x24'),
    icon: select('icon', Icon.TYPE, 'coding'),
    extra: text('extra', '附加内容'),
    arrow: boolean('arrow', true),
    checked: boolean('checked', true),
  }
  let options = {
    children: text('children', '内容'),
    brief: text('ListBrief', '摘要'),
  }
  return (<div className={styles.phone}>
    <h3>ListTitle</h3>
    <List className={styles.list}>
      <ListTitle onClick={action('click')} {...props}>
        {options.children}
      </ListTitle>
    </List>
    <h3>ListItem</h3>
    <List className={styles.list}>
      <ListItem onClick={action('click')} {...props}>
        <span>{options.children}</span>
        {options.brief ? <ListBrief>{options.brief}</ListBrief> : null}
      </ListItem>
    </List>
    <h3>ListSubItem</h3>
    <List className={styles.list}>
      <ListSubItem onClick={action('click')} {...props}>
        <span>{options.children}</span>
        {options.brief ? <ListBrief>{options.brief}</ListBrief> : null}
      </ListSubItem>
    </List>
    <h3>ListButton</h3>
    <List className={styles.list}>
      <ListButton onClick={action('click')} {...props}>
        {options.children}
      </ListButton>
    </List>
  </div>)
}))

stories.add('所有列表', withInfo()(() => {
  return (<div className={styles.phone}>
    <h3>列表标题</h3>
    <List className={styles.list}>
      <ListTitle>列表标题</ListTitle>
    </List>

    <h3>基础列表项</h3>
    <List className={styles.list}>
      <ListItem onClick={action('click')}>
        最简项
      </ListItem>
      <ListItem icon="coding" onClick={action('click')}>
        含图标项
      </ListItem>
      <ListItem thumbnail="https://imgplaceholder.com/24x24" onClick={action('click')}>
        含缩略图项
      </ListItem>
      <ListItem onClick={action('click')}>
        <span>含摘要项</span>
        <ListBrief>摘要</ListBrief>
      </ListItem>
      <ListItem extra="附加内容" onClick={action('click')}>
        含附加内容项
      </ListItem>
      <ListItem arrow={true} onClick={action('click')}>
        含箭头项
      </ListItem>
      <ListItem checked={true} onClick={action('click')}>
        含勾选项
      </ListItem>
      <ListItem thumbnail="https://imgplaceholder.com/24x24" icon="coding" extra="附加内容" arrow={true} checked={true} onClick={action('click')}>
        <span>技能全开项</span>
        <ListBrief>摘要</ListBrief>
      </ListItem>
    </List>

    <h3>子列表项</h3>
    <List className={styles.list}>
      <ListSubItem onClick={action('click')}>
        最简项
      </ListSubItem>
      <ListSubItem thumbnail="https://imgplaceholder.com/24x24" icon="coding" extra="附加内容" arrow={true} checked={true} onClick={action('click')}>
        <span>技能全开项</span>
        <ListBrief>摘要</ListBrief>
      </ListSubItem>
    </List>

    <h3>组合列表项</h3>
    <List className={styles.list}>
      <ListGroup>
        <ListItem>组合项 1</ListItem>
        <ListItem>组合项 2</ListItem>
      </ListGroup>
    </List>

    <h3>列表内按钮</h3>
    <List className={styles.list}>
      <ListButton>按钮</ListButton>
    </List>
  </div>)
}))
