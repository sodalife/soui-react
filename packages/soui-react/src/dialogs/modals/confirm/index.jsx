import pick from 'lodash-es/pick'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../../basics/button/index.jsx'
import Dialog from '../../dialog/index.jsx'
import ghostify from '../ghostify/index.jsx'

import styles from '@sodalife/soui-css/src/dialogs/modals/confirm/style.pcss'

class Confirm extends Component {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onClosed: PropTypes.func,
    message: PropTypes.node,
    onOk: PropTypes.func,
    okText: PropTypes.string,
    okDisabled: PropTypes.bool,
    onCancel: PropTypes.func,
    cancelText: PropTypes.string,
    cancelDisabled: PropTypes.bool,
  }

  static defaultProps = {
    title: '提示',
    visible: false,
    onClosed: function () {},
    onOk: function () {},
    okText: '确认',
    onCancel: function () {},
    cancelText: '取消',
  }

  render () {
    let { message, okText, okDisabled, cancelText, cancelDisabled } = this.props
    let footer = [
        <Button key="cancel" type="ghost" className={cx(styles.button, styles.cancel)} onClick={this.props.onCancel} disabled={cancelDisabled}>{cancelText}</Button>,
        <Button key="ok" type="primary" className={styles.button} onClick={this.props.onOk} disabled={okDisabled}>{okText}</Button>,
    ]
    return (<Dialog footer={footer} {...pick(this.props, ['title', 'onClosed', 'visible'])}>
      { message }
    </Dialog>)
  }
}

export default Confirm

export const confirm = ghostify(Confirm)
