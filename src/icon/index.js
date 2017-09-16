/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { FA_CLASS } from './styles'
import { SMCComponent } from '../base'
import { isArr, isStr } from '../utils'

export default class FontAwesome extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_)

    this.faIcon = isArr(children_) && isStr(children_[0]) ? children_[0] : ''
  }

  attrs_ (props) {
    return { 'aria-hidden': true }
  }

  classNames_ (classNames) {
    return classNames.concat(FA_CLASS, this.faIcon)
  }

  render () {
    return <i {...this.props} />
  }
}
