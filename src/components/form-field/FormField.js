/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FF_CLASS } from './styles'
import { SMCComponent } from '../base'
import FormFieldAdapter from './FormFieldAdapter'

export default class FormField extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    const { label, ...otherProps } = this.props
    this.label = label ? ` ${label}` : ''
    const for_ =
      Array.isArray(children_) &&
      children_.length > 0 &&
      typeof children_[0] === 'object' &&
      children_[0].data.props
        ? children_[0].data.props.id_
        : ''
    this.attrs = this.utils.makeKeyValue('for', for_)
    this.hooks = this.utils.makeHooks(FormFieldAdapter)
    this.props = otherProps
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
        <label attrs={this.attrs}>
          {this.label}
        </label>
      </div>
    )
  }
}
