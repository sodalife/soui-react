import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../basics/icon/index.jsx'
import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/notice/style.pcss'

const bem = bemify(styles, 'soui').b('notice')

class Notice extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    className: '',
    closable: false,
    onClose: function () {},
  }

  constructor (props) {
    super(props)

    this.state = {
      show: true,
    }
  }

  handleClickClose () {
    this.setState({
      show: false,
    }, () => this.props.onClose())
  }

  render () {
    let { className, children, closable, ...props } = this.props
    let { show } = this.state
    if (!show) {
      return null
    }
    return (<div className={cx(bem(), className)} {...props}>
      <div className={bem.e('icon')}><Icon type="exclamation-circle-o" /></div>
      <div className={bem.e('content')}>
        {children}
      </div>
      {closable ? <div className={bem.e('close')} onClick={this.handleClickClose.bind(this)}><Icon type="close" /></div> : null}
    </div>)
  }
}

export default Notice
