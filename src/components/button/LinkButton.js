/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import AbstractButton from './AbstractButton'

export default class LinkButton extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { href, ...otherProps } = this.props
    this.href = this.utils.makeKeyValue('href', href)
    this.props = otherProps
  }

  render () {
    return (
      <a
        {...this.selector}
        classNames={BTN_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.onClick}
        {...this.name}
        {...this.href}
        {...this.props}>
        {this.children}
      </a>
    )
  }
}
