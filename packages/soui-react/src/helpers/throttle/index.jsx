import omit from 'lodash-es/omit'
import keys from 'lodash-es/keys'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from '@sodalife/soui-css/src/helpers/throttle/style.pcss'

const TICK = 1000

class Throttle extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    wait: PropTypes.number,
    waitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    startedAt: PropTypes.number,
    disabled: PropTypes.bool,
    onTick: PropTypes.func,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    wait: 60 * 1000,
    disabled: false,
    onTick: function () {},
    onClick: function () {},
  }

  constructor (props) {
    super(props)

    this.state = {
      now: +new Date(),
    }

    this.timer = null
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ now: +new Date() }, () => this.props.onTick(this.countdown()))
    }, TICK)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  countdown () {
    let { wait, startedAt } = this.props
    let { now } = this.state
    return Math.max(Math.floor((wait + startedAt - now) / 1000), 0)
  }

  handleClick (e) {
    let { onClick } = this.props

    e.preventDefault()

    if (this.props.disabled) {
      e.stopPropagation()
      return
    }
    if (this.countdown() > 0) {
      return
    }

    onClick.apply(this, arguments)
  }

  render () {
    let { children, className, waitText, disabled } = this.props
    let countdown = this.countdown()
    if (countdown > 0 && waitText) {
      children = typeof waitText === 'function' ? waitText({ countdown }) : waitText
    }
    return <span
      {...omit(this.props, keys(Throttle.propTypes))}
      className={cx(styles.throttle, { [`${styles.disabled}`]: disabled || (countdown > 0) }, className)}
      onClick={this.handleClick.bind(this)}
    >
      {children}
    </span>
  }
}

export default Throttle
