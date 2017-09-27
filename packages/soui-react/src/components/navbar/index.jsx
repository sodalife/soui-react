import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../basics/icon/index.jsx'

import styles from './style.pcss'

class Navbar extends Component {
  render() {
    const { children } = this.props
    return (
      <footer className={styles.navbar}>
        <nav className={styles.bar}>
          { children }
        </nav>
      </footer>
    )
  }
}

const NavbarItem = ({ icon, title, isActived, ...props }) => {
  return (<div className={cx(styles.item, { [styles.active]: isActived })} {...props}>
    {
      isActived ?
        <Icon className={styles.icon} type={`${icon}-highlight`} /> :
        <Icon className={styles.icon} type={icon} />
    }
    <span className={styles.title}>{title}</span>
  </div>)
}
NavbarItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  isActived: PropTypes.bool,
}

export default Navbar
Navbar.NavbarItem = NavbarItem
