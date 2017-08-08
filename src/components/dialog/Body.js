/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_BODY, BODY_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class Body extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_BODY)
  }

  render () {
    return (
      <section
        {...this.selector}
        classNames={BODY_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}
