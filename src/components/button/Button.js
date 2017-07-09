/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_BTN, BTN_CLASS } from './styles'
import AbstractButton from './AbstractButton'

export default class Button extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_BTN)
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={BTN_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.name}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
