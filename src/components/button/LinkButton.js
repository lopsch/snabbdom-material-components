/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_BTN, BTN_CLASS } from './styles'
import AbstractButton from './AbstractButton'

export default class LinkButton extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_BTN)

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
        {...this.name}
        {...this.href}
        {...this.props}>
        {this.children}
      </a>
    )
  }
}
