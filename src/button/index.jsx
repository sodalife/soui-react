import _ from 'underscore'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import styles from './style.pcss'

const Button = ({ children, className, onClick, type, size, disabled, ...props }) => {
  return (<button className={cx(styles.button, styles[type], styles[size], className)} disabled={disabled} onClick={onClick} {...props}>
    <div className={styles.children}>
      { children }
    </div>
  </button>)
}

Button.TYPE = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  GHOST: 'ghost',
}

Button.SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  BLOCK: 'block',
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(_.values(Button.TYPE)),
  size: PropTypes.oneOf(_.values(Button.SIZE)),
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  children: null,
  className: '',
  onClick: function () {},
  type: Button.TYPE.DEFAULT,
  size: Button.SIZE.NORMAL,
  disabled: false,
}

export default Button
