/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, FAB_CLASS } from './styles'
import AbstractButton from '../button/AbstractButton'

export default class FAB extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    const { ariaLabel, ...otherProps } = this.props
    this.ariaLabel = this.utils.makeKeyValue('aria-label', ariaLabel)
    this.props = otherProps
  }

  render () {
    return (
      <button
        {...this.selector}
        classNames={FAB_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        {...this.name}
        attrs={{ ...this.ariaLabel }}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
