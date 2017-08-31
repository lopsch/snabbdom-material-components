/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, FF_CLASS } from './styles'
import { SMCComponent } from '../base'
import FormFieldAdapter from './adapter'

export default class FormField extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(FormFieldAdapter)
  }

  render () {
    return (
      <div
        {...this.selector}
        classNames={FF_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        {this.children}
      </div>
    )
  }
}
