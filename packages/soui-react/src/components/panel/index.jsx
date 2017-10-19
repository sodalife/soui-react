import React, { Component } from 'react'
import PropTypes from 'prop-types'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/panel/style.pcss'

const bem = bemify(styles, 'soui').b('panel')

const Panel = ({ title, subtitle, children, ...props }) => {
  return (<div className={bem()} {...props}>
    <div className={bem.e('title')}>
      <span>{title}</span>
      <span className={bem.e('subtitle')}>{subtitle}</span>
    </div>
    <div className={bem.e('list')}>
      {children}
    </div>
  </div>)
}
Panel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

const PanelItem = ({ title, thumbnail, description, ...props }) => {
  let block = bem.b('item')
  return (<div className={block()} {...props}>
    <div className={block.e('container')}>
      <div className={block.e('thumbnail')}>
        <img src={thumbnail} />
      </div>
      <div className={block.e('content')}>
        <div className={block.e('title')}>{title}</div>
        <div className={block.e('description')}>{description}</div>
      </div>
    </div>
  </div>)
}
PanelItem.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
}

export default Panel
Panel.PanelItem = PanelItem
