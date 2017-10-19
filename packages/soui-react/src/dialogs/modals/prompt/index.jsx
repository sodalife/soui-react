import pick from 'lodash-es/pick'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../../utils/bemify'
import Button from '../../../basics/button/index.jsx'
import Input from '../../../components/input/index.jsx'
import Dialog from '../../dialog/index.jsx'
import ghostify from '../ghostify/index.jsx'

import styles from '@sodalife/soui-css/src/dialogs/modals/prompt/style.pcss'

const bem = bemify(styles, 'soui').b('prompt')
const bemButton = bem.b('button')

class Prompt extends Component {
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
    placeholder: PropTypes.node,
    initialValue: PropTypes.string,
  }

  static defaultProps = {
    title: '提示',
    visible: false,
    onClosed: function () {},
    onOk: function () {},
    okText: '确认',
    onCancel: function () {},
    cancelText: '取消',
    placeholder: '',
    initialValue: '',
  }

  constructor (props) {
    super(props)

    let { initialValue } = props

    this.state = {
      value: initialValue,
    }
  }

  handleInputChange (e) {
    this.setState({
      value: e.currentTarget.value
    })
  }

  handleFormSubmit (e) {
    e.preventDefault()
    this.props.onOk(this.state.value)
  }

  render () {
    let { message, okText, okDisabled, cancelText, cancelDisabled, placeholder, initialValue } = this.props
    let footer = [
        <Button key="cancel" type="ghost" className={cx(bemButton(), bemButton.m('cancel'))} onClick={this.props.onCancel} disabled={cancelDisabled}>{cancelText}</Button>,
        <Button key="ok" type="primary" className={bemButton()} onClick={this.handleFormSubmit.bind(this)} disabled={okDisabled}>{okText}</Button>,
    ]
    return (<Dialog footer={footer} {...pick(this.props, ['title', 'onClosed', 'visible'])}>
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <Input placeholder={placeholder} defaultValue={initialValue} onChange={this.handleInputChange.bind(this)} />
      </form>
      <div className={bem.b('message')()}>
        { message }
      </div>
    </Dialog>)
  }
}

export default Prompt

export const prompt = ghostify(Prompt)
