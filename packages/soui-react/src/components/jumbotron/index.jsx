import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/jumbotron/style.pcss'

const bem = bemify(styles, 'soui').b('jumbotron')


const Jumbotron = ({ children, className, ...props }) => {
  return (<div className={cx(bem(), className)} {...props}>
    {children}
  </div>)
}
Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const JumbotronButton = ({ size, children, className, ...props }) => {
  return (<a className={cx(size === JumbotronButton.SIZE.SMALL ? bem.b('small_button')() : bem.b('button')(), className)} {...props}>
    { children }
  </a>)
}
JumbotronButton.SIZE = {
  DEFAULT: '',
  SMALL: 'small',
}
Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
}

export default Jumbotron
Jumbotron.JumbotronButton = JumbotronButton
