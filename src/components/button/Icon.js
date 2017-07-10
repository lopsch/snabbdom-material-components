/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ICON_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Icon extends MaterialComponent {
  render () {
    return (
      <span
        {...this.selector}
        classNames={ICON_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </span>
    )
  }
}
