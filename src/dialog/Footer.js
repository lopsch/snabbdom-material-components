/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FOOTER_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class Footer extends SMCComponent {
  render () {
    return (
      <footer
        {...this.selector}
        classNames={FOOTER_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </footer>
    )
  }
}
