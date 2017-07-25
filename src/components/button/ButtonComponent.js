/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import RippleDecorator from '../ripple'
import { MaterialComponent } from '../base'
import { BTN_CLASS } from './styles'

export default class ButtonComponent extends MaterialComponent {
  constructor (_props, _children, _switches) {
    super(_props, _children, _switches)

    const { name, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks = this._makeHooks()
    this.ons = {}
    if (typeof onClick === 'function') this.ons['click'] = onClick
    this.classNames = this._makeClassNames()
    const { attrs, remainingProps } = this._makeAttrs(otherProps)
    this.attrs = attrs
    this.props = remainingProps
  }

  _makeHooks () {
    return this.utils.makeHooks(RippleDecorator)
  }

  _makeClassNames () {
    return BTN_CLASS
  }

  _makeAttrs (props) {
    return { attrs: {}, remainingProps: props }
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
