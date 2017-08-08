/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { ST_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class SupportingText extends SMCComponent {
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
