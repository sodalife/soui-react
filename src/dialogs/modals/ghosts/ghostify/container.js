import React from 'react'
import ReactDOM from 'react-dom'

export class Container {
  constructor (doc = document) {
    this.element = doc.createElement('div')
    doc.body.appendChild(this.element)
  }

  destroy () {
    if (ReactDOM.unmountComponentAtNode(this.element)) {
      this.element.parentNode.removeChild(this.element)
    }
  }

  render (component) {
    return ReactDOM.render(
      component,
      this.element
      )
  }
}
