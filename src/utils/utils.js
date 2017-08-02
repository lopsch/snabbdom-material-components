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
  return uuid_()
}

/* eslint-disable operator-linebreak */
function uuid_ (
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
        uuid_ // random hex digits
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
  return id ? { selector: `#${id}` } : {}
}

export function makeKeyValue (key, value) {
  return value ? { [key]: value } : {}
}

export class PropsNormalizer {
  constructor (props_, switches_) {
    const props = props_ || {}
    const switches = switches_ || {}

    const fromClassNames = props['classNames']
      ? this.classes_(this.fromClassNames_([props['classNames']]))
      : {}
    const fromStyle = props['style']
      ? this.classes_(this.fromClassNames_([css(props['style'])]))
      : {}
    const fromProps = props['class'] ? props['class'] : {}
    const fromSwitches = this.fromSwitches_(switches, props)

    const allClasses_ = [fromClassNames, fromStyle, fromProps, fromSwitches]
    this.extractedClasses = {}

    for (let i = 0; i < allClasses_.length; i++) {
      const classes_ = allClasses_[i]

      for (let class_ in classes_) {
        this.extractedClasses[class_] = classes_[class_]
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

  fromSwitches_ (switches, props) {
    const map = {}

    for (let switch_ in switches) {
      map[switches[switch_]] = !!props[switch_]
    }

    return map
  }

  classes_ (classes) {
    const map = {}

    for (let i = 0; i < classes.length; i++) {
      map[classes[i]] = true
    }

    return map
  }

  fromClassNames_ (classNames) {
    return tryFlatten(
      tryFlatten(classNames).map(className =>
        className.replace(/\s+/g, '_§§§_').split('_§§§_')
      )
    )
  }
}
