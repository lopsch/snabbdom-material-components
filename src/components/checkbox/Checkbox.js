/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  CB_CLASS,
  CB_NC_CLASS,
  CB_BG_CLASS,
  CB_MM,
  CB_CM_CLASS,
  CB_CMP_CLASS
} from './styles'
import CheckboxAdapter from './CheckboxAdapter'
import { MaterialComponent } from '../base'

export default class Checkbox extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { name, value, onChange, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.value = this.utils.makeKeyValue('value', value)
    this.hooks = this.utils.makeHooks(CheckboxAdapter)
    this.onChange = typeof onChange === 'function' ? { change: onChange } : {}
    this.props = otherProps
  }

  render () {
    return (
      <div
        classNames={CB_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        <input
          {...this.selector}
          classNames={CB_NC_CLASS}
          on={this.onChange}
          type='checkbox'
          {...this.value}
          {...this.name}
          disabled={!!this.props.disabled}
          checked={!!this.props.checked}
          indeterminate={!!this.props.indeterminate} />
        <div classNames={CB_BG_CLASS}>
          <svg classNames={CB_CM_CLASS} viewBox='0 0 24 24'>
            <path
              classNames={CB_CMP_CLASS}
              fill='none'
              stroke='white'
              d='M1.73,12.91 8.1,19.28 22.79,4.59' />
          </svg>
          <div classNames={CB_MM} />
        </div>
      </div>
    )
  }
}
