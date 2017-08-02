/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES_TITLE, TITLE_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Title extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_TITLE)
  }

  render () {
    return (
      <h1
        {...this.selector}
        classNames={TITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h1>
    )
  }
}
