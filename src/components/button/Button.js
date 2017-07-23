/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import AbstractButton from './AbstractButton'

export default class Button extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={BTN_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
