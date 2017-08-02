/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  RADIO_CLASS,
  RADIO_NC_CLASS,
  RADIO_BG_CLASS,
  RADIO_OUTER,
  RADIO_INNER
} from './styles'
import RadioAdapter from './RadioAdapter'
import InputComponent from '../input'

export default class Radio extends InputComponent {
  constructor (props_, children_) {
    super(props_, children_)

    this.hooks = this.utils.makeHooks(RadioAdapter)
    this.classNames = RADIO_NC_CLASS
    this.type = 'radio'
  }

  render () {
    return (
      <div
        classNames={RADIO_CLASS}
        class={this.classes}
        hook={this.hooks}
        {...this.props}>
        {this.input}
        <div classNames={RADIO_BG_CLASS}>
          <div classNames={RADIO_OUTER} />
          <div classNames={RADIO_INNER} />
        </div>
      </div>
    )
  }
}
