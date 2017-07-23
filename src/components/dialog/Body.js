/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_BODY, BODY_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Body extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_BODY)
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
