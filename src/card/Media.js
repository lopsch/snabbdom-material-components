/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MEDIA_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class Media extends SMCComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={MEDIA_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}
