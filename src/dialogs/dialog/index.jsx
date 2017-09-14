import _ from 'underscore'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Animate from 'rc-animate'

import styles from './style.pcss'
import transition from './transition.pcss'

class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    visible: PropTypes.bool,
    onClosed: PropTypes.func,
    footer: PropTypes.node,
  }

  static defaultProps = {
    title: '提示',
    visible: false,
    onClosed: function () {},
  }

  static transition = {
    transitionName: transition,
    transitionAppear: true,
  }

  handleAnimateEnd (key, exists) {
    if (!exists) {
      this.props.onClosed()
    }
  }

  render () {
    let { title, children, visible, footer } = this.props
    return (
      <Animate {...Dialog.transition} onEnd={this.handleAnimateEnd.bind(this)}>
        {
          visible ?
            <div className={cx(styles.container, { [`${styles.visible}`]: visible })}>
              <div className={styles.modal}>
                <h3 className={styles.title}>{ title }</h3>
                <div className={styles.content}>
                  {children}
                </div>
                {footer ? (<div className={styles.footer}>{footer}</div>) : null}
              </div>
            </div> :
            null
        }
      </Animate>
    )
  }
}

export default Dialog
