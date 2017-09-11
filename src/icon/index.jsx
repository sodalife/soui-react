import React from 'react'
import cx from 'classnames'

import './assets/iconfont'

import styles from './style.pcss'

import types from './types'

const Icon = ({ type, className = '', ...props }) => {
  return (<svg className={cx(styles.icon, className)} aria-hidden="true" {...props}>
    <use xlinkHref={`#icon-${type}`}></use>
  </svg>)
}

Icon.types = types

export default Icon
