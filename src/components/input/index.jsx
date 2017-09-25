import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../basics/icon/index.jsx'

import styles from './style.pcss'

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
    this.refs = {}
  }

  handleClickField () {
    if (!this.state.focus) {
      this.refs.input.focus()
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
      className={cx(styles.field, {
        [`${styles.focus}`]: this.state.focus,
        [`${styles.error}`]: !!error,
      }, className)}
      onClick={this.handleClickField.bind(this)}
    >
      {icon ? <span className={styles.icon}>
        <Icon type={icon} />
      </span> : null}
      <input
        {...props}
        className={styles.input}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        ref={(input) => { this.refs.input = input }}
      />
      {addon ? <span className={styles.addon} onClick={onClickAddon}>
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
      addon={<Icon type="eye" className={cx({ [`${styles.addonActive}`]: !isCovered, [`${styles.addonHide}`]: !focus })} />}
      onClickAddon={this.handleClickAddon.bind(this)}
      onFocus={this.handleFocus.bind(this)}
      onBlur={this.handleBlur.bind(this)}
    />)
  }
}

export default Input
Input.InputPassword = InputPassword
