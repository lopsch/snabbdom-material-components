/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { BTN_CLASS, STYLE_SWITCHES } from '../button/styles'
import { ACTION_CLASS } from './styles'
import AbstractButton from '../button/AbstractButton'

export default class Action extends AbstractButton {
  constructor (_props, _children) {
    super({ ..._props, compact: true }, _children, STYLE_SWITCHES)
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={[BTN_CLASS, ACTION_CLASS]}
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
