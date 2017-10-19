import values from 'lodash-es/values'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/basics/button/style.pcss'

const bem = bemify(styles, 'soui').b('button')

const Button = ({ children, className, onClick, type, size, disabled, ...props }) => {
  return (<button className={cx(bem(), bem.m(type), bem.m(size), className)} disabled={disabled} onClick={onClick} {...props}>
    <div className={bem.e('children')}>
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
  type: PropTypes.oneOf(values(Button.TYPE)),
  size: PropTypes.oneOf(values(Button.SIZE)),
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
