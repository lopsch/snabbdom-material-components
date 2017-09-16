/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import isNil from 'ramda/es/isNil'
import {
  STYLE_SWITCHES,
  CB_CLASS,
  CB_NC_CLASS,
  CB_BG_CLASS,
  CB_MM,
  CB_CM_CLASS,
  CB_CMP_CLASS
} from './styles'
import CheckboxAdapter from './adapter'
import Input from '../input'
import { SMCComponent } from '../base'
import { makeHooks, isBool } from '../utils'

export default class Checkbox extends SMCComponent {
  constructor (props_ = {}, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.inputProps = {
      classNames: CB_NC_CLASS,
      type: 'checkbox',
      ...props_
    }

    // managed by <Input>
    const { id, ...otherProps } = this.props
    this.props = otherProps
  }

  hook_ (props) {
    return this.ripple ? makeHooks(CheckboxAdapter) : {}
  }

  classNames_ (classNames) {
    return classNames.concat(CB_CLASS)
  }

  props_ (props) {
    const { disabled, indeterminate, checked, value } = props

    return {
      ...(isBool(disabled) ? { disabled } : {}),
      ...(isBool(indeterminate) ? { indeterminate } : {}),
      ...(isBool(checked) ? { checked } : {}),
      ...(!isNil(value) ? { value } : {})
    }
  }

  render () {
    return (
      <div {...this.props}>
        <Input {...this.inputProps} />
        <div classNames={CB_BG_CLASS}>
          <svg classNames={CB_CM_CLASS} viewBox='0 0 24 24'>
            <path
              classNames={CB_CMP_CLASS}
              fill='none'
              stroke='white'
              d='M1.73,12.91 8.1,19.28 22.79,4.59' />
          </svg>
          <div classNames={CB_MM} />
        </div>
      </div>
    )
  }
}
