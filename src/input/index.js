/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { SMCComponent } from '../base'

export default class Input extends SMCComponent {
  constructor (props_ = {}, children_ = [], switches_ = {}) {
    super(props_, children_, switches_)

    const { name, onChange, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.classNames = this.classNames_()
    this.type = this.type_()
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
        {...this.name}
        {...this.props} />
    )
  }

  classNames_ () {
    throw new Error(
      "Subclasses must override 'classNames_' to return a properly configured 'class Input'."
    )
  }

  type_ () {
    throw new Error(
      "Subclasses must override 'type_' to return a properly configured 'class Input'."
    )
  }
}
