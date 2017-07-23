/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { HEADER_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Header extends MaterialComponent {
  render () {
    return (
      <header
        {...this.selector}
        classNames={HEADER_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </header>
    )
  }
}
