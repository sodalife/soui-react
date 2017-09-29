import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import focus from './focus'

import styles from '@sodalife/soui-css/src/basics/view/style.pcss'

const View = ({ children, className, ...props }) => {
  return (
    <section className={cx(styles.view, className)} {...props}>
      {children}
    </section>
  )
}
View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

class ViewMain extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.container = null
  }

  componentDidMount () {
    this.releaseFocus = focus(this.container)
  }

  componentWillUnmount () {
    this.releaseFocus()
  }

  render () {
    let { className, ...props } = this.props
    return (<main
      className={cx(styles.main, className)}
      ref={(container) => {this.container = container}}
      {...props}
      />)
  }
}

const ViewCard = ({ className = '', ...props }) => {
  return (
    <div className={cx(styles.card, className)} {...props} />
  )
}
ViewCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default View
View.ViewMain = ViewMain
View.ViewCard = ViewCard
