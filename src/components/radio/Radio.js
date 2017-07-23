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
import RadioAdapter from './RadioAdapter'
import { MaterialComponent } from '../base'

export default class Radio extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { name, value, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.value = this.utils.makeKeyValue('value', value)
    this.hooks = this.utils.makeHooks(RadioAdapter)
    this.props = otherProps
  }

  render () {
    return (
      <div
        classNames={RADIO_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        <input
          {...this.selector}
          classNames={RADIO_NC_CLASS}
          type='radio'
          {...this.value}
          {...this.name}
          disabled={!!this.props.disabled}
          checked={!!this.props.checked} />
        <div classNames={RADIO_BG_CLASS}>
          <div classNames={RADIO_OUTER} />
          <div classNames={RADIO_INNER} />
        </div>
      </div>
    )
  }
}