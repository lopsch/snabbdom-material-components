/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, MAT_ICON_CLASS } from './styles'
import { MaterialComponent } from '../base'
import IconToggleAdapter from './IconToggleAdapter'

export default class IconToggle extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    const {
      materialIcons,
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
    this.materialIcons =
      materialIcons === undefined ||
      (typeof materialIcons === 'boolean' && materialIcons)
    this.props = otherProps
  }

  parseToggle_ (toggle) {
    return typeof toggle === 'object'
      ? JSON.stringify(toggle)
      : JSON.stringify({})
  }

  render () {
    if (this.materialIcons) {
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
    } else {
      return 'FA'
      //       <span class="mdc-icon-toggle"  aria-pressed="false"

      //       data-icon-inner-selector=".fa"
      //       data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
      //       data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'>
      //   <i class="fa fa-star-o" aria-hidden="true"></i>
      // </span>
    }
  }
}
