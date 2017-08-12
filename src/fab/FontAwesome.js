/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ICON_CLASS } from './styles'
import SMCComponent from '../base/SMCComponent'
import Icon from '../icon/FontAwesome'

export default class FontAwesome extends SMCComponent {
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
