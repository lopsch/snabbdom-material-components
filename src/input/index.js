/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import isNil from 'ramda/es/isNil'
import { SMCComponent } from '../base'
import { isStr, isBool, isFn } from '../utils'

export default class Input extends SMCComponent {
  on_ (props) {
    const { onChange, onClick, onInput } = props

    return {
      ...(isFn(onChange) ? { change: onChange } : {}),
      ...(isFn(onClick) ? { click: onClick } : {}),
      ...(isFn(onInput) ? { input: onInput } : {})
    }
  }

  props_ (props) {
    const { name, type, disabled, indeterminate, checked, value } = props

    return {
      ...(isStr(type) ? { type } : {}),
      ...(isStr(name) ? { name } : {}),
      ...(this.ripple
        ? {}
        : {
          ...(isBool(disabled) ? { disabled } : {}),
          ...(isBool(indeterminate) ? { indeterminate } : {}),
          ...(isBool(checked) ? { checked } : {}),
          ...(!isNil(value) ? { value } : {})
        })
    }
  }

  render () {
    return <input {...this.props} />
  }
}
