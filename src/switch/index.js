/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  SW_CLASS,
  SW_NC_CLASS,
  SW_BG_CLASS,
  SW_KNOB_CLASS
} from './styles'
import SwitchAdapter from './adapter'
import Input from '../input'

export default class Switch extends Input {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.ripple ? this.utils.makeHooks(SwitchAdapter) : {}
  }

  classNames_ () {
    return SW_NC_CLASS
  }

  type_ () {
    return 'checkbox'
  }

  render () {
    return (
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
    )
  }
}
