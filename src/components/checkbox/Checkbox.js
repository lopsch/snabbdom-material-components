/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  CB_CLASS,
  CB_NC_CLASS,
  CB_BG_CLASS,
  CB_MM,
  CB_CM_CLASS,
  CB_CMP_CLASS
} from './styles'
import CheckboxAdapter from './CheckboxAdapter'
import InputComponent from '../input'

export default class Checkbox extends InputComponent {
  constructor (props_, children_) {
    super(props_, children_)

    this.hooks = this.utils.makeHooks(CheckboxAdapter)
    this.classNames = CB_NC_CLASS
    this.type = 'checkbox'
  }

  render () {
    return (
      <div
        classNames={CB_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        {this.input}
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
