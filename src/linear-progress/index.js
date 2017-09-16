/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  LP_CLASS,
  BUF_DOTS_CLASS,
  BUF_CLASS,
  BAR_CLASS,
  PRIMARY_CLASS,
  SECONDARY_CLASS,
  INNER_CLASS
} from './styles'
import { SMCComponent } from '../base'
import LinearProgressAdapter from './adapter'
import { makeHooks, isNum, isBool } from '../utils'

export default class LinearProgress extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)
  }

  attrs_ (props) {
    return { role: 'progressbar' }
  }

  hook_ (props) {
    return makeHooks(LinearProgressAdapter)
  }

  classNames_ (classNames) {
    return classNames.concat(LP_CLASS)
  }

  props_ (props) {
    const { buffer, progress, reverse, determinate } = props

    return {
      ...(isNum(buffer) ? { buffer } : {}),
      ...(isNum(progress) ? { progress } : {}),
      ...(isBool(reverse) ? { reverse } : {}),
      ...(isBool(determinate) ? { determinate } : {})
    }
  }

  render () {
    return (
      <div {...this.props}>
        <div classNames={BUF_DOTS_CLASS} />
        <div classNames={BUF_CLASS} />
        <div classNames={[BAR_CLASS, PRIMARY_CLASS]}>
          <span classNames={INNER_CLASS} />
        </div>
        <div classNames={[BAR_CLASS, SECONDARY_CLASS]}>
          <span classNames={INNER_CLASS} />
        </div>
      </div>
    )
  }
}
