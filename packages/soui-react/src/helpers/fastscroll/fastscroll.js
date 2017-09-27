const EVENT_NAME = 'scroll'

let handleds = []

class Fastscroll {
  constructor (element) {
    this.element = element

    if (~handleds.indexOf(this.element)) {
      return this
    }

    handleds.push(this.element)

    let ivScroll
    let evt = document.createEvent('Event')
    evt.initEvent('scroll', true, true)

    let dispatchScroll = () => {
      this.element.dispatchEvent(evt)
    }

    let activateOnScroll = () => {
      ivScroll = setInterval(dispatchScroll, 20)
    }

    let deactivateOnScroll = () => {
      clearInterval(ivScroll)
    }

    if ('ontouchstart' in window) {
      this.element.addEventListener('touchstart', activateOnScroll)
      this.element.addEventListener('touchmove', dispatchScroll)
      this.element.addEventListener('touchend', deactivateOnScroll)
    }

    return this
  }

  addListener (handler) {
    this.element.addEventListener(EVENT_NAME, handler)
  }

  removeListener (handler) {
    this.element.removeEventListener(EVENT_NAME, handler)
  }

  dispatch () {
    var evt = document.createEvent('Event')
    evt.initEvent(EVENT_NAME, true, true)
    this.element.dispatchEvent(evt)
  }
}

export default Fastscroll
