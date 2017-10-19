export function Bemify (options = {}) {
  let separators = {
    b: '-',
    e: '__',
    m: '--',
    ...options.separators,
  }

  function bemify (cssmodules, namespace = '') {
    function modularize (id) {
      if (!cssmodules) {
        return id
      }
      return cssmodules[id]
    }
    function composeModularize (func) {
      return (...args) => modularize(func(...args))
    }

    function b (block) {
      function value () {
        return block
      }

      function append (a) {
        return block ? b(`${block}${separators.b}${a}`) : b(a)
      }
      function m (modifier) {
        return `${block}${separators.m}${modifier}`
      }
      function e (element) {
        return `${block}${separators.e}${element}`
      }

      value = composeModularize(value)
      value.b = append
      value.m = composeModularize(m)
      value.e = composeModularize(e)

      return value
    }

    return b(namespace)
  }

  return bemify
}

let bemify = Bemify()

export default bemify
