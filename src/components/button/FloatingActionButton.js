/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_FAB, FAB_CLASS } from './styles'
import AbstractButton from './AbstractButton'

export default class FloatingActionButton extends AbstractButton {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_FAB)

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
        {...this.name}
        attrs={{ ...this.ariaLabel }}
        {...this.props}>
        {this.children}
      </button>
    )
  }
}
