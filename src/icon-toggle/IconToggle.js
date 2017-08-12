/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES } from './styles'
import SMCComponent from '../base/SMCComponent'
import IconToggleAdapter from './IconToggleAdapter'
import Material from './Material'
import FontAwesome from './FontAwesome'

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

IconToggle.Material = Material
IconToggle.FontAwesome = FontAwesome

export default IconToggle
