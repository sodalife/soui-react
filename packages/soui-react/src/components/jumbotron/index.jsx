import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './style.pcss'

const Jumbotron = ({ children, className, ...props }) => {
  return (<div className={cx(styles.jumbotron, className)} {...props}>
    {children}
  </div>)
}
Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const JumbotronButton = ({ size, children, className, ...props }) => {
  return (<a className={cx(size === JumbotronButton.SIZE.SMALL ? styles.smallButton : styles.button, className)} {...props}>
    { children }
  </a>)
}
JumbotronButton.SIZE = {
  DEFAULT: '',
  SMALL: 'small',
}
Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
}

export default Jumbotron
Jumbotron.JumbotronButton = JumbotronButton
