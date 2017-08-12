/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ICON_CLASS } from './styles'
import { FA_CLASS } from '../icon/styles'
import { FontAwesome as Icon } from '../icon'
import IconToggle from './IconToggle'

export default class FontAwesome extends IconToggle {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.dataset = {
      ...this.dataset,
      ...this.utils.makeKeyValue('iconInnerSelector', `.${FA_CLASS}`)
    }
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
        <Icon>
          {this.children}
        </Icon>
      </span>
    )
  }
}
