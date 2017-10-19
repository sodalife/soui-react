import pick from 'lodash-es/pick'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../../utils/bemify'
import Button from '../../../basics/button/index.jsx'
import Dialog from '../../dialog/index.jsx'
import ghostify from '../ghostify/index.jsx'

import styles from '@sodalife/soui-css/src/dialogs/modals/alert/style.pcss'

const bemButton = bemify(styles, 'soui').b('alert').b('button')

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

  render () {
    let { message, okText, okDisabled } = this.props
    let footer = (
      <Button type="primary" className={bemButton()} onClick={this.props.onOk} disabled={okDisabled}>{okText}</Button>
    )
    return (<Dialog footer={footer} {...pick(this.props, ['title', 'onClosed', 'visible'])}>
      { message }
    </Dialog>)
  }
}

export default Alert

export const alert = ghostify(Alert)
