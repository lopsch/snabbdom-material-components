/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  SW_CLASS,
  SW_NC_CLASS,
  SW_BG_CLASS,
  SW_KNOB_CLASS,
  SW_LABEL_CLASS
} from './styles'
import { MaterialComponent } from '../base'

export default class Switch extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { name, value, label, onChange, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.value = this.utils.makeKeyValue('value', value)
    this.hooks = {}
    this.ons = {}
    if (typeof onChange === 'function') this.ons['change'] = onChange
    if (typeof onClick === 'function') this.ons['click'] = onClick
    this.forId = this.utils.makeKeyValue('for', this.id)
    this.label = label ? ` ${label}` : ''
    this.props = otherProps
  }

  render () {
    return (
      <div>
        <div
          classNames={SW_CLASS}
          class={this.classes}
          hook={this.hooks}
          {...this.props}>
          <input
            {...this.selector}
            classNames={SW_NC_CLASS}
            on={this.ons}
            type='checkbox'
            {...this.value}
            {...this.name}
            disabled={!!this.props.disabled}
            checked={!!this.props.checked} />
          <div classNames={SW_BG_CLASS}>
            <div classNames={SW_KNOB_CLASS} />
          </div>
        </div>
        <label classNames={SW_LABEL_CLASS} attrs={{ ...this.forId }}>
          {this.label}
        </label>
      </div>
    )
  }
}
