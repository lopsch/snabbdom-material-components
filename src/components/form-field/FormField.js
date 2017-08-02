/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FF_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class FormField extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_)

    const { forId, label, ...otherProps } = this.props
    this.label = label ? ` ${label}` : ''
    this.attrs = this.utils.makeKeyValue('for', forId)
    this.props = otherProps
  }

  render () {
    return (
      <div
        {...this.selector}
        classNames={FF_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
        <label attrs={this.attrs}>
          {this.label}
        </label>
      </div>
    )
  }
}
