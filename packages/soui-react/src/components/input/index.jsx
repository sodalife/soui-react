import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../basics/icon/index.jsx'
import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/input/style.pcss'

const bem = bemify(styles, 'soui').b('input')

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    addon: PropTypes.node,
    error: PropTypes.bool,
    onClickAddon: PropTypes.func,
  }

  static defaultProps = {
    className: '',
    icon: '',
    addon: '',
    error: false,
    onClickAddon: function () {},
  }

  constructor (props) {
    super(props)

    this.state = {
      focus: false,
    }
    this.input = null
  }

  handleClickField () {
    if (!this.state.focus && this.input) {
      this.input.focus()
    }
  }

  handleFocus () {
    this.setState({ focus: true })
    if (this.props.onFocus) {
      this.props.onFocus.apply(this, arguments)
    }
  }

  handleBlur () {
    this.setState({ focus: false })
    if (this.props.onBlur) {
      this.props.onBlur.apply(this, arguments)
    }
  }

  render () {
    let { className, icon, addon, error, onClickAddon, ...props } = this.props
    return (<span
      className={cx(bem(), {
        [bem.m('focus')]: this.state.focus,
        [bem.m('error')]: !!error,
      }, className)}
      onClick={this.handleClickField.bind(this)}
    >
      {icon ? <span className={bem.e('icon')}>
        <Icon type={icon} />
      </span> : null}
      <input
        {...props}
        className={bem.e('input')}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        ref={(input) => this.input = input}
      />
      {addon ? <span className={bem.e('addon')} onClick={onClickAddon}>
        {addon}
      </span> : null}
    </span>)
  }
}

class InputPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      focus: false,
      isCovered: true,
    }
  }

  handleClickAddon (e) {
    this.setState({ isCovered: !this.state.isCovered })
    if (this.props.onClickAddon) {
      this.props.onClickAddon.apply(this, arguments)
    }
  }

  handleFocus () {
    this.setState({ focus: true })
    if (this.props.onFocus) {
      this.props.onFocus.apply(this, arguments)
    }
  }

  handleBlur () {
    this.setState({ focus: false })
    if (this.props.onBlur) {
      this.props.onBlur.apply(this, arguments)
    }
  }

  render () {
    let { focus, isCovered } = this.state
    return (<Input
      {...this.props}
      type={isCovered ? 'password' : 'text'}
      addon={<Icon type="eye" className={cx({ [bem.e('addonActive')]: !isCovered, [bem.e('addonHide')]: !focus })} />}
      onClickAddon={this.handleClickAddon.bind(this)}
      onFocus={this.handleFocus.bind(this)}
      onBlur={this.handleBlur.bind(this)}
    />)
  }
}

export default Input
Input.InputPassword = InputPassword
