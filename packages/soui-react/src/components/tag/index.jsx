import omit from 'lodash-es/omit'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import bemify from '../../utils/bemify'

import styles from '@sodalife/soui-css/src/components/tag/style.pcss'

const bem = bemify(styles, 'soui').b('tag')

/**
 * reference to https://github.com/ant-design/ant-design-mobile/blob/c58a9c3bb2740357bf674f465d19dcf605b987c5/components/tag/index.tsx
 */
class Tag extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
  }

  static defautlProps = {
    selected: false,
  }

  constructor (props) {
    super(props)

    this.state = {
      selected: props.selected,
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected,
      })
    }
  }

  handleClick () {
    let { onClick } = this.props
    let next = !this.state.selected
    this.setState({
      selected: next
    }, () => {
      if (onClick) {
        onClick(next)
      }
    })
  }

  render () {
    let { className } = this.props
    let { selected } = this.state
    return (<div className={cx(bem(), {
        [bem.m('selected')]: selected
      }, className)} onClick={this.handleClick.bind(this)} {...omit(this.props, ['className', 'selected', 'onClick'])}/>)
  }
}

export default Tag
