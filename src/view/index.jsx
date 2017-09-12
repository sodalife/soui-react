import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import focus from './focus'

import styles from './style.pcss'

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

  componentDidMount () {
    let { container } = this.refs
    this.releaseFocus = focus(container)
  }

  componentWillUnmount () {
    this.releaseFocus()
  }

  render () {
    let { children, className, ...props } = this.props
    return (<main className={cx(styles.main, className)} ref="container" {...props}>
      {children}
    </main>)
  }
}

const ViewCard = ({ children, className = '', ...props }) => {
  return (
    <div className={cx(styles.card, className)} {...props}>
      {children}
    </div>
  )
}
ViewCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default View
View.ViewMain = ViewMain
View.ViewCard = ViewCard
