/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MAT_ICON_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class MaterialIcon extends MaterialComponent {
  render () {
    return (
      <span
        {...this.selector}
        classNames={MAT_ICON_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </span>
    )
  }
}
