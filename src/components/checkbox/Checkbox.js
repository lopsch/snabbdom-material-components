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
import InputComponent from '../input/InputComponent'

export default class Checkbox extends InputComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)
  }

  _makeHooks () {
    return this.utils.makeHooks(CheckboxAdapter)
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
          on={this.ons}
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
