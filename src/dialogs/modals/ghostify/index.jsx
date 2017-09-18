import React, { Component } from 'react'
import { Container } from './container'

function ghostify (Spirit) {
  return function spirit (props = {}) {
    return new Promise(function (resolve, reject) {
      let container = new Container()

      class Ghost extends Component {
        constructor (props) {
          super(props)

          this.state = {
            visible: true,
          }
        }

        componentDidMount () {
          this._isMounted = true
        }
        componentWillUnmount () {
          this._isMounted = false
        }

        handleOk (...args) {
          let promise = Promise.resolve(...args)
          if (typeof props.onOk === 'function') {
            promise = promise.then(() => props.onOk(...args))
          }
          promise.then((data) => {
            if (this._isMounted) {
              this.setState({ visible: false })
              resolve(data)
            }
          })
        }

        handleCancel () {
          let promise = Promise.resolve()
          if (typeof props.onCancel === 'function') {
            promise = promise.then(() => props.onCancel())
          }
          promise.then(() => {
            if (this._isMounted) {
              this.setState({ visible: false })
              reject(new Error('cancelled'))
            }
          })
        }

        handleClosed () {
          container.destroy()
        }

        render () {
          let { visible } = this.state
          return (<Spirit
            visible={visible}
            {...props}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
            onClosed={this.handleClosed.bind(this)}
            />)
        }
      }

      container.render(<Ghost />)
    })
  }
}

export default ghostify
