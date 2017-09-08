import React from 'react'
import cx from 'classnames'

import './assets/iconfont'

import styles from './style.pcss'

const Icon = ({ type, className = '' }) => {
  return (<svg className={cx(styles.icon, className)} aria-hidden="true">
    <use xlinkHref={`#icon-${type}`}></use>
  </svg>)
}

export default Icon
