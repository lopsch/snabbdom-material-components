/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { TITLE_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class Title extends SMCComponent {
  render () {
    return (
      <h2
        {...this.selector}
        classNames={TITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h2>
    )
  }
}
