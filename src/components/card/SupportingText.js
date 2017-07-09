/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ST_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class SupportingText extends MaterialComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={ST_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}
