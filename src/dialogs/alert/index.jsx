import _ from 'underscore'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../basics/button/index.jsx'
import Dialog from '../dialog/index.jsx'

import styles from './style.pcss'

/**
 * e.g:
 *   <Alert visible={manual} message={HELLO WORLD} />
 */
class Alert extends Component {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onClosed: PropTypes.func,
    message: PropTypes.node,
    onOk: PropTypes.func,
    okText: PropTypes.string,
    okDisabled: PropTypes.bool,
  }

  static defaultProps = {
    title: '提示',
    onClosed: function () {},
    onOk: function () {},
    okText: '确认',
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: true,
    }
  }

  handleClickOk () {
    this.setState({
      visible: false,
    })
  }

  render () {
    let { message, okText, okDisabled, ...props } = this.props
    let footer = (
      <Button type="primary" className={styles.button} onClick={this.handleClickOk.bind(this)} disabled={okDisabled}>{okText}</Button>
    )
    let visible = typeof this.props.visible !== 'undefined' ? this.props.visible : this.state.visible
    return (<Dialog footer={footer} visible={visible} {..._.omit(props, 'footer', 'visible', 'children')}>
      { message }
    </Dialog>)
  }
}

export default Alert
