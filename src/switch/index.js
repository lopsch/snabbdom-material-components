/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import isNil from 'ramda/es/isNil'
import {
  STYLE_SWITCHES,
  SW_CLASS,
  SW_NC_CLASS,
  SW_BG_CLASS,
  SW_KNOB_CLASS
} from './styles'
import SwitchAdapter from './adapter'
import Input from '../input'
import { SMCComponent } from '../base'
import { makeHooks, isBool } from '../utils'

export default class Switch extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.inputProps = {
      classNames: SW_NC_CLASS,
      type: 'checkbox',
      ...props_
    }

    // managed by <Input>
    const { id, ...otherProps } = this.props
    this.props = otherProps
  }

  hook_ (props) {
    return this.ripple ? makeHooks(SwitchAdapter) : {}
  }

  classNames_ (classNames) {
    return classNames.concat(SW_CLASS)
  }

  props_ (props) {
    const { disabled, checked, value } = props

    return {
      ...(isBool(disabled) ? { disabled } : {}),
      ...(isBool(checked) ? { checked } : {}),
      ...(!isNil(value) ? { value } : {})
    }
  }

  render () {
    return (
      <div {...this.props}>
        <Input {...this.inputProps} />
        <div classNames={SW_BG_CLASS}>
          <div classNames={SW_KNOB_CLASS} />
        </div>
      </div>
    )
  }
}
