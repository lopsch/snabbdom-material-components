/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import ButtonAdapter from './adapter'
import { SMCComponent } from '../base'
import { makeHooks, isFn, isStr, isBool } from '../utils'

export default class Button extends SMCComponent {
  constructor (props_, children_, switches_ = STYLE_SWITCHES) {
    super(props_, children_, switches_)
  }

  on_ (props) {
    const { onClick } = props

    return isFn(onClick) ? { click: onClick } : {}
  }

  hook_ (props) {
    return this.ripple ? makeHooks(ButtonAdapter) : {}
  }

  classNames_ (classNames) {
    return classNames.concat(BTN_CLASS)
  }

  props_ (props) {
    const { name, href, disabled } = props
    this.link = isStr(href)

    return {
      ...(isBool(disabled) ? { disabled } : {}),
      ...(isStr(name) ? { name } : {}),
      ...(this.link ? { href } : {}),
      ...this.additionalProps_(props)
    }
  }

  additionalProps_ (props) {
    return {}
  }

  render () {
    return this.link ? (
      <a {...this.props}>{this.children}</a>
    ) : (
      <button {...this.props}>{this.children}</button>
    )
  }
}
