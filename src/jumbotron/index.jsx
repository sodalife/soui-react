import _ from 'underscore'
import React from 'react'
import cx from 'classnames'

import styles from './style.pcss'

const Jumbotron = ({ children, className = '', ...props }) => {
  return (<div className={cx(styles.jumbotron, className)} {...props}>
    {children}
  </div>)
}

const JumbotronButton = ({ size, children, className = '', ...props }) => {
  return (<a className={cx(size === JumbotronButton.SIZE.SMALL ? styles.smallButton : styles.button, className)} {...props}>
    { children }
  </a>)
}
JumbotronButton.SIZE = {
  DEFAULT: '',
  SMALL: 'small',
}

export default Jumbotron
Jumbotron.JumbotronButton = JumbotronButton
