/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  STYLE_SWITCHES,
  SLIDER_CLASS,
  TRACK_CNT_CLASS,
  TRACK_CLASS,
  TRACK_MARKER_CLASS,
  THUMB_CNT_CLASS,
  PIN_CLASS,
  PIN_MARKER_CLASS,
  THUMB_CLASS,
  RING_CLASS
} from './styles'
import SliderAdapter from './adapter'
import { SMCComponent } from '../base'

export default class Slider extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)

    const {
      labelledBy,
      onChange,
      tabIndex,
      onInput,
      ...otherProps
    } = this.props
    this.attrs = {
      role: 'slider',
      ...this.utils.makeKeyValue('tabindex', tabIndex),
      ...this.utils.makeKeyValue('aria-labelledby', labelledBy)
    }
    this.hooks = this.utils.makeHooks(SliderAdapter)
    this.props = otherProps
    this.ons = {}
    if (typeof onChange === 'function') this.ons['MDCSlider:change'] = onChange
    if (typeof onInput === 'function') this.ons['MDCSlider:input'] = onInput
  }

  render () {
    return (
      <div
        {...this.selector}
        classNames={SLIDER_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        attrs={this.attrs}
        {...this.props}>
        <div classNames={TRACK_CNT_CLASS}>
          <div classNames={TRACK_CLASS} />
          {this.props.markers === true && this.props.discrete === true
            ? <div classNames={TRACK_MARKER_CLASS} />
            : []}
        </div>
        <div classNames={THUMB_CNT_CLASS}>
          <div classNames={PIN_CLASS}>
            <span classNames={PIN_MARKER_CLASS} />
          </div>
          <svg classNames={THUMB_CLASS} width='21' height='21'>
            <circle cx='10.5' cy='10.5' r='7.875' />
          </svg>
          <div classNames={RING_CLASS} />
        </div>
      </div>
    )
  }
}
