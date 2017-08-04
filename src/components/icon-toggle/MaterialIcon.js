/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MAT_ICON_CLASS } from './styles'
import IconToggle from './IconToggle'

export default class MaterialIcon extends IconToggle {
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
