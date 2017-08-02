/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MaterialComponent } from '../base'

export default class InputComponent extends MaterialComponent {
  constructor (props_, children_, switches_) {
    super(props_, children_, switches_)

    const { name, onChange, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks = {}
    this.ons = {}
    if (typeof onChange === 'function') this.ons.change = onChange
    if (typeof onClick === 'function') this.ons.click = onClick
    this.props = otherProps
  }

  get input () {
    return (
      <input
        {...this.selector}
        classNames={this.classNames}
        on={this.ons}
        type={this.type}
        {...this.name} />
    )
  }
}
