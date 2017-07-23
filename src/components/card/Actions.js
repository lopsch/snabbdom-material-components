/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STLYE_SWITCHES_ACTIONS, ACTIONS_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Actions extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STLYE_SWITCHES_ACTIONS)
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