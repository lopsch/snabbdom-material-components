/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import ButtonAdapter from './adapter'
import { SMCComponent } from '../base'

export default class Button extends SMCComponent {
  constructor (props_ = {}, children_ = [], switches_ = STYLE_SWITCHES) {
    super(props_, children_, switches_)

    const { name, href, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks =
      typeof otherProps.ripple === 'boolean' && otherProps.ripple
        ? this.utils.makeHooks(ButtonAdapter)
        : {}
    this.classNames = this.classNames_()

    this.ons = {}
    if (typeof onClick === 'function') this.ons.click = onClick

    if (href) {
      this.link = true
      this.href = this.utils.makeKeyValue('href', href)
    }

    this.props = otherProps
    this.attrs = this.attrs_()
  }

  attrs_ () {
    return {}
  }

  classNames_ () {
    return BTN_CLASS
  }

  render () {
    return this.link
      ? <a
        {...this.selector}
        classNames={this.classNames}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        {...this.href}
        {...this.props}>
        {this.children}
      </a>
      : <button
        {...this.selector}
        classNames={this.classNames}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        attrs={this.attrs}
        {...this.props}>
        {this.children}
      </button>
  }
}
