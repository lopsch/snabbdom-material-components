/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { PRIMARY_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Primary extends MaterialComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={PRIMARY_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}