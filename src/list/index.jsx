import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../icon/index.jsx'

import styles from './style.pcss'

const List = ({ className = '', ...props }) => {
  return (<div className={cx(styles.list, className)} {...props}/>)
}
List.propTypes = {
  className: PropTypes.string,
}
List.defaultProps = {
  className: '',
}

const ListItem = ({ children = null, icon = null, thumbnail = null, arrow = false, checked = false, extra = null, className = '', ...props }) => {
  return (<div className={cx(styles.item, className)} {...props}>
    <div className={styles.container}>
      <div className={styles.left}>
        {icon ? <Icon className={styles.icon} type={icon} /> : null}
        {thumbnail ? <span className={styles.thumbnail}><img src={thumbnail} /></span> : null}
        <span className={styles.content}>{children}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.extra}>{extra}</span>
        {arrow ? <Icon className={styles.icon} type="right" /> : null}
        {checked ? <Icon className={styles.checked} type="check-circle" /> : null}
      </div>
    </div>
  </div>)
}
ListItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  thumbnail: PropTypes.string,
  arrow: PropTypes.bool,
  checked: PropTypes.bool,
  extra: PropTypes.string,
  className: PropTypes.string,
}
ListItem.defaultProps = {
  children: null,
  icon: null,
  thumbnail: null,
  arrow: false,
  checked: false,
  extra: null,
  className: '',
}

const ListSubItem = ({ className = '', ...props }) => {
  return <ListItem className={cx(styles.sub, className)} {...props} />
}

function BasicItem (type) {
  let Item = ({ children = null, className = '', ...props }) => {
    return (<div className={cx(styles[type.toLowerCase()], className)} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </div>)
  }
  Item.displayName = `List${type}`
  Item.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }
  Item.defaultProps = {
    children: null,
    className: '',
  }
  return Item
}

const ListBrief = ({ className = '', ...props }) => {
  return <span className={cx(styles.brief, className)} {...props} />
}
ListBrief.propTypes = {
  className: PropTypes.string,
}
ListBrief.defaultProps = {
  className: '',
}

const ListGroup = BasicItem('Group')
const ListTitle = BasicItem('Title')
const ListButton = BasicItem('Button')

List.ListItem = ListItem
List.ListSubItem = ListSubItem
List.ListBrief = ListBrief
List.ListGroup = ListGroup
List.ListTitle = ListTitle
List.ListButton = ListButton

export default List
