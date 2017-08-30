/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FF_CLASS } from './styles'
import { SMCComponent } from '../base'
import FormFieldAdapter from './adapter'

export default class FormField extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.hooks =
      Array.isArray(children_) &&
      children_.length > 0 &&
      typeof children_[0] === 'object' &&
      children_[0].data.material &&
      children_[0].data.material.component &&
      children_[0].data.material.component.ripple
        ? this.utils.makeHooks(FormFieldAdapter)
        : {}
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
