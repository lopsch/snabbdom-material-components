/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  RADIO_CLASS,
  RADIO_NC_CLASS,
  RADIO_BG_CLASS,
  RADIO_OUTER,
  RADIO_INNER
} from './styles'
import RadioAdapter from './adapter'
import Input from '../input'

export default class Radio extends Input {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.ripple ? this.utils.makeHooks(RadioAdapter) : {}
  }

  classNames_ () {
    return RADIO_NC_CLASS
  }

  type_ () {
    return 'radio'
  }

  render () {
    return (
      <div
        classNames={RADIO_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        {this.input}
        <div classNames={RADIO_BG_CLASS}>
          <div classNames={RADIO_OUTER} />
          <div classNames={RADIO_INNER} />
        </div>
      </div>
    )
  }
}
