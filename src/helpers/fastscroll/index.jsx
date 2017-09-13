import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Scroll from './fastscroll'

class Fastscroll extends Component {
  static propTypes = {
    onFastscroll: PropTypes.func,
  }

  componentDidMount () {
    this.scroller = new Scroll(ReactDOM.findDOMNode(this.refs.children))
    this.handler = (e) => this.props.onFastscroll(e)
    this.scroller.addListener(this.handler)
  }

  componentWillUnmount () {
    this.scroller.removeListener(this.handler)
  }

  render () {
    return React.cloneElement(this.props.children, {
      ref: 'children'
    })
  }
}

export default Fastscroll
