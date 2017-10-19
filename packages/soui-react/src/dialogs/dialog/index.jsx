import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Animate from 'rc-animate'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/dialogs/dialog/style.pcss'
import transition from '@sodalife/soui-css/src/dialogs/dialog/transition.pcss'

const bem = bemify(styles, 'soui').b('dialog')

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
            <div className={cx(bem.b('container')())}>
              <div className={bem()}>
                <h3 className={bem.e('title')}>{ title }</h3>
                <div className={bem.e('content')}>
                  {children}
                </div>
                {footer ? (<div className={bem.e('footer')}>{footer}</div>) : null}
              </div>
            </div> :
            null
        }
      </Animate>
    )
  }
}

export default Dialog
