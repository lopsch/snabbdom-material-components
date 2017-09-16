import is from 'ramda/es/is'
import isEmpty from 'ramda/es/isEmpty'
import { tryFlatten } from 'snabbdom-jsx-pragma'

export function log (...args) {
  if (process.env.NODE_ENV !== 'production') {
    console.info(...args)
  }
}

export function delayInit (elm, callback, position, delay = 100) {
  let pos = window.getComputedStyle(elm).position

  if (pos === position) {
    callback()
  } else {
    let pollId = 0

    pollId = window.setInterval(function poll () {
      pos = window.getComputedStyle(elm).position

      if (pos === position) {
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
          (a / 4))
    ) // 8 to 11
      .toString(16) // in hexadecimal
    : // or otherwise a concatenated string:
    ([1e7] + // 10000000 +
      -1e3 + // -1000 +
      -4e3 + // -4000 +
      -8e3 + // -80000000 +
        -1e11
    ) // -100000000000,
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

  hooks.update = function update (oldVnode, vnode) {
    vnode.data.material = oldVnode.data.material
    callHook(vnode.data.material.update, ...arguments)
  }

  hooks.destroy = function destroy (vnode) {
    callHook(vnode.data.material.destroy, ...arguments)
  }

  return hooks

  function callHook (hook) {
    if (isFn(hook)) {
      hook(...Array.prototype.slice.call(arguments, 1))
    }
  }
}

export function isBool (prop) {
  return is(Boolean, prop)
}

export function isNum (prop) {
  return is(Number, prop)
}

export function isObj (prop) {
  return is(Object, prop)
}

export function isPosNum (prop) {
  return isNum(prop) && prop >= 0
}

export function isStr (prop) {
  return is(String, prop) && !isEmpty(prop)
}

export function isFn (prop) {
  return is(Function, prop)
}

export function isArr (prop) {
  return is(Array, prop) && !isEmpty(prop)
}

export class ClassesExtractor {
  constructor (props_ = {}, switches_ = {}) {
    this.props = props_
    this.switches = switches_

    this.extractedClassNames = []
    this.extractedClasses = {}

    const fromClassNames = this.fromClassNames_()
    const fromClass = this.fromClass_()
    const fromSwitches = this.fromSwitches_()

    const allClasses_ = [fromClass, fromSwitches]

    for (let i = 0; i < allClasses_.length; i++) {
      const classes_ = allClasses_[i]

      for (let class_ in classes_) {
        this.extractedClasses[class_] = classes_[class_]
      }
    }

    const allClassNames_ = [fromClassNames]

    for (let i = 0; i < allClassNames_.length; i++) {
      const classNames_ = allClassNames_[i]

      for (let j = 0; j < classNames_.length; j++) {
        this.extractedClassNames.push(classNames_[j])
      }
    }
  }

  get extracted () {
    return {
      classes: this.extractedClasses,
      classNames: this.extractedClassNames
    }
  }

  fromSwitches_ () {
    const map = {}

    for (let switch_ in this.switches) {
      map[this.switches[switch_]] = this.props[switch_] === true
    }

    return map
  }

  fromClass_ () {
    return (this.props['class'] && this.props['class']) || {}
  }

  fromClassNames_ () {
    return (
      (this.props['classNames'] &&
        tryFlatten(
          tryFlatten([this.props['classNames']]).map(className =>
            className.replace(/\s+/g, '_§§§_').split('_§§§_')
          )
        )) ||
      []
    )
  }
}
