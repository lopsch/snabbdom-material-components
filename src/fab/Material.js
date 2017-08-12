/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MAT_ICON_CLASS } from './styles'
import SMCComponent from '../base/SMCComponent'

export default class Material extends SMCComponent {
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
