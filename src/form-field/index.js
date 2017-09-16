/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, FF_CLASS } from './styles'
import { SMCComponent } from '../base'
import FormFieldAdapter from './adapter'
import { makeHooks } from '../utils'

export default class FormField extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)
  }

  hook_ (props) {
    return makeHooks(FormFieldAdapter)
  }

  classNames_ (classNames) {
    return classNames.concat(FF_CLASS)
  }

  render () {
    return <div {...this.props}>{this.children}</div>
  }
}
