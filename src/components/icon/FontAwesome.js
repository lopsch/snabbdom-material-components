/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FA_CLASS } from './styles'
import { SMCComponent } from '../base'

export default class FontAwesome extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.faIcon =
      Array.isArray(children_) &&
      children_.length > 0 &&
      typeof children_[0] === 'string'
        ? children_[0]
        : ''
  }

  render () {
    return (
      <i classNames={[FA_CLASS, this.faIcon]} attrs={{ 'aria-hidden': true }} />
    )
  }
}
