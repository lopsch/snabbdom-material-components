/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ICON_CLASS, FA_CLASS } from './styles'
import IconToggle from './IconToggle'

export default class FontAwesomeIcon extends IconToggle {
  constructor (props_, children_) {
    super(props_, children_)

    this.dataset = {
      ...this.dataset,
      ...this.utils.makeKeyValue('iconInnerSelector', `.${FA_CLASS}`)
    }
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
        hook={this.hooks}
        on={this.ons}
        attrs={this.attrs}
        dataset={this.dataset}
        {...this.props}>
        <i
          classNames={[FA_CLASS, this.faIcon]}
          attrs={{ 'aria-hidden': true }} />
      </span>
    )
  }
}
