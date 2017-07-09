/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { CARD_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Card extends MaterialComponent {
  render () {
    return (
      <div
        {...this.selector}
        classNames={CARD_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </div>
    )
  }
}
