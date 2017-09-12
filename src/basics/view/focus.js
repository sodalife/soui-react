function focus (container = document.body) {
  let focused = void 0
  let originScrollTop = void 0

  function focusin (e) {
    focused = e.target
    originScrollTop = container.originScrollTop
  }

  function focusout (e) {
    focused = void 0
  }

  function resize (e) {
    if (focused) {
      container.scrollTop = focused.offsetTop - ((container.clientHeight / 2) - (focused.clientHeight / 2))
      return
    }
    if (typeof originScrollTop !== 'undefined') {
      container.scrollTop = originScrollTop
      originScrollTop = void 0
      return
    }
  }

  container.addEventListener('focusin', focusin)
  container.addEventListener('focusout', focusout)
  window.addEventListener('resize', resize)

  return function release () {
    container.removeEventListener('focusin', focusin)
    container.removeEventListener('focusout', focusout)
    window.removeEventListener('resize', resize)
  }
}

export default focus
