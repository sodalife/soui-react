import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './assets/iconfont'

import styles from './style.pcss'

import TYPES from './types'

const Icon = ({ type, className = '', ...props }) => {
  return (<svg className={cx(styles.icon, className)} aria-hidden="true" {...props}>
    <use xlinkHref={`#icon-${type}`}></use>
  </svg>)
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.TYPES = TYPES

export default Icon
