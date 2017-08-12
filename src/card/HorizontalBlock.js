/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { HB_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class HorizontalBlock extends SMCComponent {
  render () {
    return (
      <div
        {...this.selector}
        classNames={HB_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </div>
    )
  }
}
