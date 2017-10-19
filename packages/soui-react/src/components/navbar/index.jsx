import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../basics/icon/index.jsx'
import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/navbar/style.pcss'

const bem = bemify(styles, 'soui').b('navbar')

class Navbar extends Component {
  render() {
    const { children } = this.props
    return (
      <footer className={bem()}>
        <nav className={bem.e('bar')}>
          { children }
        </nav>
      </footer>
    )
  }
}

const NavbarItem = ({ icon, title, isActived, ...props }) => {
  let block = bem.b('item')
  return (<div className={cx(block(), { [block.m('active')]: isActived })} {...props}>
    {
      isActived ?
        <Icon className={block.e('icon')} type={`${icon}-highlight`} /> :
        <Icon className={block.e('icon')} type={icon} />
    }
    <span className={block.e('title')}>{title}</span>
  </div>)
}
NavbarItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  isActived: PropTypes.bool,
}

export default Navbar
Navbar.NavbarItem = NavbarItem
