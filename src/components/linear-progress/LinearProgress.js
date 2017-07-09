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
import { MaterialComponent } from '../base'
import LinearProgressAdapter from './LinearProgressAdapter'

export default class LinearProgress extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(LinearProgressAdapter)
  }

  render () {
    return (
      <div
        {...this.selector}
        attrs={{ role: 'progressbar' }}
        classNames={LP_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
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
