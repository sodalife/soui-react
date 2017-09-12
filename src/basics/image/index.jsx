import React, { Component } from 'react'
import PropTypes from 'prop-types'
import km from 'keymirror'

const STATUS = km({
  PROCESSING: null,
  RESOLVED: null,
  REJECTED: null,
})

class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.state = {
      status: STATUS.PROCESSING,
    }
  }

  componentWillMount () {
    this.image = new window.Image()
  }

  componentDidMount () {
    this.load()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.src !== this.props.src) {
      this.load()
    }
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  load () {
    this.image.onload = () => {
      this.setState({
        status: STATUS.RESOLVED,
      })
      this.unsubscribe()
    }

    this.image.onerror = (err) => {
      this.setState({
        status: STATUS.REJECTED,
      })
      this.unsubscribe()
    }

    this.setState({
      status: STATUS.PROCESSING,
    })

    if (this.props.src) {
      this.image.src = this.props.src
    }
  }

  unsubscribe () {
    this.image.onload = null
    this.image.onerror = null
  }

  render () {
    let { status } = this.state
    let { src, placeholder, error, ...props } = this.props

    switch (status) {
      case STATUS.PROCESSING:
      src = placeholder || src
      break

      case STATUS.REJECTED:
      src = error || placeholder || src
      break
    }

    return (<img src={src} {...props} />)
  }
}

export default Image
