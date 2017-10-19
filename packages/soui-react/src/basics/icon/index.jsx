import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../utils/bemify'

import './assets/iconfont'

import styles from '@sodalife/soui-css/src/basics/icon/style.pcss'

import TYPE from './types'

const bem = bemify(styles, 'soui').b('icon')

const Icon = ({ type, className = '', ...props }) => {
  return (<svg className={cx(bem(), className)} aria-hidden="true" {...props}>
    <use xlinkHref={`#icon-${type}`}></use>
  </svg>)
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Icon.TYPE = TYPE

export default Icon
