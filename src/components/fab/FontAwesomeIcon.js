/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ICON_CLASS, FA_ICON_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class FontAwesomeIcon extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_)

    this.faIcon =
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
        classNames={ICON_CLASS}
        class={this.classes}
        {...this.props}>
        <i
          classNames={[FA_ICON_CLASS, this.faIcon]}
          attrs={{ 'aria-hidden': true }} />
      </span>
    )
  }
}
