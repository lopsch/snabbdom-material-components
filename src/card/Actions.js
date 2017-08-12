/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STLYE_SWITCHES_ACTIONS, ACTIONS_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class Actions extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STLYE_SWITCHES_ACTIONS)
  }

  render () {
    return (
      <section
        {...this.selector}
        classNames={ACTIONS_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}
