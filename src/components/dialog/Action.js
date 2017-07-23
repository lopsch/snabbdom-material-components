/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MaterialComponent } from '../base'
import { BTN_CLASS } from '../button/styles'
import { FOOTER_BTN_CLASS, STYLE_SWITCHES_FOOTER_BTN } from './styles'

export default class Action extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_FOOTER_BTN)

    const { name, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.ons = {}
    if (typeof onClick === 'function') this.ons['click'] = onClick
    this.props = otherProps
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={[BTN_CLASS, FOOTER_BTN_CLASS]}
        class={this.classes}
        on={this.ons}
        {...this.name}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
