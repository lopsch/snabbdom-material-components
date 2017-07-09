/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { SUBTITLE_CLASS } from './styles'
import { MaterialComponent } from '../base'

export default class Subtitle extends MaterialComponent {
  render () {
    return (
      <h2
        {...this.selector}
        classNames={SUBTITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h2>
    )
  }
}
