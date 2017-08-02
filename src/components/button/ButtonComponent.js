/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MaterialComponent } from '../base'

export default class ButtonComponent extends MaterialComponent {
  constructor (props_, children_, switches_) {
    super(props_, children_, switches_)

    const { name, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks = {}
    this.attrs = {}
    this.classNames = []
    this.ons = {}
    if (typeof onClick === 'function') this.ons.click = onClick
    this.props = otherProps
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={this.classNames}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        attrs={this.attrs}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
