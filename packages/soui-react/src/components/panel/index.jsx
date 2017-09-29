import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '@sodalife/soui-css/src/components/panel/style.pcss'

const Panel = ({ title, subtitle, children, ...props }) => {
  return (<div className={styles.panel} {...props}>
    <div className={styles.panelTitle}>
      <span>{title}</span>
      <span className={styles.panelSubtitle}>{subtitle}</span>
    </div>
    <div className={styles.list}>
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
  return (<div className={styles.panelItem} {...props}>
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
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
