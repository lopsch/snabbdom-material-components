import { style as css } from 'typestyle'
import { tryFlatten } from 'snabbdom-jsx-pragma'

export function delayInit (elm, callback, delay = 100) {
  let pos = window.getComputedStyle(elm).position

  if (pos === 'relative') {
    callback()
  } else {
    let pollId = 0

    pollId = window.setInterval(function poll () {
      pos = window.getComputedStyle(elm).position

      if (pos === 'relative') {
        window.clearInterval(pollId)
        callback()
      }
    }, delay)
  }
}

export function uuid () {
  return _uuid()
}

/* eslint-disable operator-linebreak */
function _uuid (
  a // placeholder
) {
  return a // if the placeholder was passed, return
    ? // a random number from 0 to 15
    (a ^ // unless b is 8,
        ((Math.random() * // in which case
          16) >> // a random number from
          (a / 4))) // 8 to 11
      .toString(16) // in hexadecimal
    : // or otherwise a concatenated string:
    ([1e7] + // 10000000 +
      -1e3 + // -1000 +
      -4e3 + // -4000 +
      -8e3 + // -80000000 +
        -1e11) // -100000000000,
      .replace(
        // replacing
        /[018]/g, // zeroes, ones, and eights with
        _uuid // random hex digits
      )
}

export function makeHooks (Adapter) {
  const hooks = {}

  hooks.insert = function insert (vnode) {
    const material = new Adapter(vnode)
    vnode.data.material = material
  }

  hooks.postpatch = function postpatch (oldVnode, vnode) {
    vnode.data.material = oldVnode.data.material
    callHook(vnode.data.material.update, ...arguments)
  }

  hooks.destroy = function destroy (vnode) {
    callHook(vnode.data.material.destroy, ...arguments)
  }

  return hooks

  function callHook (hook) {
    if (typeof hook === 'function') {
      hook(...Array.prototype.slice.call(arguments, 1))
    }
  }
}

export function makeSelector (id) {
  return id && id !== '' ? { selector: `#${id}` } : {}
}

export function makeKeyValue (key, value) {
  return value && value !== '' ? { [key]: value } : {}
}

export class PropsNormalizer {
  constructor (props, switches) {
    props = props || {}
    switches = switches || {}

    const fromClassNames =
      props && props['classNames']
        ? this._classes(this._fromClassNames([props['classNames']]))
        : {}
    const fromStyle =
      props && props['style']
        ? this._classes(this._fromClassNames([css(props['style'])]))
        : {}
    const fromProps = props && props['class'] ? props['class'] : {}
    const fromSwitches =
      switches && props ? this._fromSwitches(switches, props) : {}

    const _allClasses = [fromClassNames, fromStyle, fromProps, fromSwitches]
    this.extractedClasses = {}

    for (let i = 0; i < _allClasses.length; i++) {
      const _classes = _allClasses[i]

      for (let _class in _classes) {
        this.extractedClasses[_class] = _classes[_class]
      }
    }

    this.normalizedProps = props
    delete this.normalizedProps['classNames']
    delete this.normalizedProps['style']
    delete this.normalizedProps['class']
  }

  get normalized () {
    return { classes: this.extractedClasses, props: this.normalizedProps }
  }

  _fromSwitches (switches, props) {
    const map = {}

    for (let _switch in switches) {
      map[switches[_switch]] = !!props[_switch]
    }

    return map
  }

  _classes (classes) {
    const map = {}

    for (let i = 0; i < classes.length; i++) {
      map[classes[i]] = true
    }

    return map
  }

  _fromClassNames (classNames) {
    return tryFlatten(
      tryFlatten(classNames).map(className =>
        className.replace(/\s+/g, '_§§§_').split('_§§§_')
      )
    )
  }
}
