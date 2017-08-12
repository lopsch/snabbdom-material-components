/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  // STYLE_SWITCHES,
  SW_CLASS,
  SW_NC_CLASS,
  SW_BG_CLASS,
  SW_KNOB_CLASS,
  SW_LABEL_CLASS
} from './styles'
import SwitchAdapter from './SwitchAdapter'
import Input from '../input'

export default class Switch extends Input {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_ /*, STYLE_SWITCHES */)

    this.hooks = this.utils.makeHooks(SwitchAdapter)
    const { label, ...otherProps } = this.props
    this.label = label ? ` ${label}` : ''
    this.attrs = this.utils.makeKeyValue('for', this.id)
    this.props = otherProps
  }

  classNames_ () {
    return SW_NC_CLASS
  }

  type_ () {
    return 'checkbox'
  }

  render () {
    return (
      <div>
        <div
          classNames={SW_CLASS}
          class={this.classes}
          hook={this.hooks}
          {...this.props}>
          {this.input}
          <div classNames={SW_BG_CLASS}>
            <div classNames={SW_KNOB_CLASS} />
          </div>
        </div>
        <label classNames={SW_LABEL_CLASS} attrs={this.attrs}>
          {this.label}
        </label>
      </div>
    )
  }
}
