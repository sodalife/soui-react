import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Scroll from './fastscroll'

class Fastscroll extends Component {
  static propTypes = {
    onFastscroll: PropTypes.func,
  }

  constructor (props) {
    super(props)

    this.children = null
  }

  componentDidMount () {
    this.scroller = new Scroll(ReactDOM.findDOMNode(this.children))
    this.handler = (e) => this.props.onFastscroll(e)
    this.scroller.addListener(this.handler)
  }

  componentWillUnmount () {
    this.scroller.removeListener(this.handler)
  }

  render () {
    return React.cloneElement(this.props.children, {
      ref: (children) => { this.children = children }
    })
  }
}

export default Fastscroll
