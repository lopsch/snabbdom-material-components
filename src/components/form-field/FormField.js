/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FF_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class FormField extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children)

    const { forId, label, ...otherProps } = this.props
    this.forId = this.utils.makeKeyValue('for', forId)
    this.label = label ? ` ${label}` : ''
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
        <label attrs={{ ...this.forId }}>
          {this.label}
        </label>
      </div>
    )
  }
}
