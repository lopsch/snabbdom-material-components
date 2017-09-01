/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, FAB_CLASS, ICON_CLASS, MAT_ICON_CLASS } from './styles'
import Button from '../button'
import { SMCComponent } from '../base'
import Icon from '../icon'

class Fab extends Button {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)
  }

  classNames_ () {
    return FAB_CLASS
  }

  attrs_ () {
    if (!this.label) {
      const { label, ...otherProps } = this.props
      this.label = label
      this.props = otherProps
    }

    return this.utils.makeKeyValue('aria-label', this.label)
  }
}

class FontAwesome extends SMCComponent {
  render () {
    return (
      <span
        {...this.selector}
        classNames={ICON_CLASS}
        class={this.classes}
        {...this.props}>
        <Icon>
          {this.children}
        </Icon>
      </span>
    )
  }
}

class Material extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.icon =
      Array.isArray(children_) &&
      children_.length > 0 &&
      typeof children_[0] === 'string'
        ? children_[0]
        : ''
  }

  render () {
    return (
      <span
        {...this.selector}
        classNames={MAT_ICON_CLASS}
        class={this.classes}
        {...this.props}>
        {this.icon}
      </span>
    )
  }
}

Fab.Material = Material
Fab.FontAwesome = FontAwesome

export default Fab
