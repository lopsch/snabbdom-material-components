/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import ButtonAdapter from './ButtonAdapter'
import ButtonComponent from './ButtonComponent'

export default class LinkButton extends ButtonComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(ButtonAdapter)
    this.classNames = BTN_CLASS
    const { href, ...otherProps } = this.props
    this.href = this.utils.makeKeyValue('href', href)
    this.props = otherProps
  }

  render () {
    return (
      <a
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
    )
  }
}
