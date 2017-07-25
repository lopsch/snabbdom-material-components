/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES } from './styles'
import ButtonComponent from './ButtonComponent'

export default class LinkButton extends ButtonComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { href, ...otherProps } = this.props
    this.href = this.utils.makeKeyValue('href', href)
    this.props = otherProps
  }

  render () {
    return (
      <a
        {...this.selector}
        classNames={this.classNames}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        {...this.href}
        {...this.props}>
        {this.children}
      </a>
    )
  }
}
