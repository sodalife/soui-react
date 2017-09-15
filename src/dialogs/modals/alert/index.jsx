import _ from 'underscore'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../../basics/button/index.jsx'
import Dialog from '../../dialog/index.jsx'
import ghostify from '../ghostify/index.jsx'

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
    visible: false,
    onClosed: function () {},
    onOk: function () {},
    okText: '确认',
  }

  handleClickOk (e) {
    return this.props.onOk(e)
  }

  render () {
    let { message, okText, okDisabled } = this.props
    let footer = (
      <Button type="primary" className={styles.button} onClick={this.handleClickOk.bind(this)} disabled={okDisabled}>{okText}</Button>
    )
    return (<Dialog footer={footer} {..._.pick(this.props, 'title', 'onClosed', 'visible')}>
      { message }
    </Dialog>)
  }
}

export default Alert

export const alert = ghostify(Alert)
