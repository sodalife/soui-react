import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import bemify from '../../utils/bemify'

import Icon from '../../basics/icon/index.jsx'

import styles from '@sodalife/soui-css/src/components/list/style.pcss'

const bem = bemify(styles).b('soui').b('list')

const List = ({ className = '', ...props }) => {
  return (<div className={cx(bem(), className)} {...props}/>)
}
List.propTypes = {
  className: PropTypes.string,
}
List.defaultProps = {
  className: '',
}

const ListItem = ({ children = null, icon = null, thumbnail = null, arrow = false, checked = false, extra = null, className = '', ...props }) => {
  return (<div className={cx(bem.b('item')(), className)} {...props}>
    <div className={bem.e('container')}>
      <div className={bem.e('left')}>
        {icon ? <Icon className={bem.e('icon')} type={icon} /> : null}
        {thumbnail ? <span className={bem.e('thumbnail')}><img src={thumbnail} /></span> : null}
        <span className={bem.e('content')}>{children}</span>
      </div>
      <div className={bem.e('right')}>
        <span className={bem.e('extra')}>{extra}</span>
        {arrow ? <Icon className={bem.e('icon')} type="right" /> : null}
        {checked ? <Icon className={bem.e('checked')} type="check-circle" /> : null}
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
  return <ListItem className={cx(bem.b('sub')(), className)} {...props} />
}

function BasicItem (type) {
  let Item = ({ children = null, className = '', ...props }) => {
    return (<div className={cx(bem.b(type.toLowerCase())(), className)} {...props}>
      <div className={bem.e('container')}>
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
  return <span className={cx(bem.b('brief')(), className)} {...props} />
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
