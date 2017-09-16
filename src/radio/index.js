/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import isNil from 'ramda/es/isNil'
import {
  STYLE_SWITCHES,
  RADIO_CLASS,
  RADIO_NC_CLASS,
  RADIO_BG_CLASS,
  RADIO_OUTER,
  RADIO_INNER
} from './styles'
import RadioAdapter from './adapter'
import Input from '../input'
import { SMCComponent } from '../base'
import { makeHooks, isBool } from '../utils'

export default class Radio extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.inputProps = {
      classNames: RADIO_NC_CLASS,
      type: 'radio',
      ...props_
    }

    // managed by <Input>
    const { id, ...otherProps } = this.props
    this.props = otherProps
  }

  hook_ (props) {
    return this.ripple ? makeHooks(RadioAdapter) : {}
  }

  classNames_ (classNames) {
    return classNames.concat(RADIO_CLASS)
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
        <div classNames={RADIO_BG_CLASS}>
          <div classNames={RADIO_OUTER} />
          <div classNames={RADIO_INNER} />
        </div>
      </div>
    )
  }
}
