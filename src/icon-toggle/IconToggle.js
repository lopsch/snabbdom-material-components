/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, ICON_CLASS, MAT_ICON_CLASS } from './styles'
import SMCComponent from '../base/SMCComponent'
import { FA_CLASS } from '../icon/styles'
import Icon from '../icon/FontAwesome'
import IconToggleAdapter from './IconToggleAdapter'

class IconToggle extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)

    const {
      onChange,
      tabIndex,
      label,
      toggleOn,
      toggleOff,
      ...otherProps
    } = this.props
    this.hooks = this.utils.makeHooks(IconToggleAdapter)
    this.ons = {}
    if (typeof onChange === 'function') {
      this.ons['MDCIconToggle:change'] = onChange
    }
    this.attrs = {
      role: 'button',
      ...this.utils.makeKeyValue('tabindex', tabIndex),
      ...this.utils.makeKeyValue('aria-label', label)
    }
    this.dataset = {
      ...this.utils.makeKeyValue('toggleOn', this.parseToggle_(toggleOn)),
      ...this.utils.makeKeyValue('toggleOff', this.parseToggle_(toggleOff))
    }
    this.props = otherProps
  }

  parseToggle_ (toggle) {
    return typeof toggle === 'object'
      ? JSON.stringify(toggle)
      : JSON.stringify({})
  }
}

class FontAwesome extends IconToggle {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.dataset = {
      ...this.dataset,
      ...this.utils.makeKeyValue('iconInnerSelector', `.${FA_CLASS}`)
    }
  }

  render () {
    return (
      <span
        {...this.selector}
        classNames={ICON_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        attrs={this.attrs}
        dataset={this.dataset}
        {...this.props}>
        <Icon>
          {this.children}
        </Icon>
      </span>
    )
  }
}

class Material extends IconToggle {
  render () {
    return (
      <i
        {...this.selector}
        classNames={MAT_ICON_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        attrs={this.attrs}
        dataset={this.dataset}
        {...this.props}>
        {this.children}
      </i>
    )
  }
}

IconToggle.Material = Material
IconToggle.FontAwesome = FontAwesome

export default IconToggle
