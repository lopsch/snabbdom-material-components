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
import SliderAdapter from './SliderAdapter'
import { MaterialComponent } from '../base'

export default class Slider extends MaterialComponent {
  constructor (_props, _children) {
    super({ ..._props, tabindex: '0' }, _children, STYLE_SWITCHES)

    const {
      valueMin,
      valueMax,
      valueNow,
      label,
      step,
      ...otherProps
    } = this.props
    this.attrs = {
      role: 'slider',
      ...this.utils.makeKeyValue('aria-label', label),
      ...this.utils.makeKeyValue('aria-valuemin', label),
      ...this.utils.makeKeyValue('aria-valuemax', label),
      ...this.utils.makeKeyValue('aria-valuenow', label),
      ...this.utils.makeKeyValue('aria-disabled', label)
    }
    this.dataset = { ...this.utils.makeKeyValue('step', step) }
    this.hooks = this.utils.makeHooks(SliderAdapter)
    this.props = otherProps
  }

  render () {
    return (
      <div
        {...this.selector}
        classNames={SLIDER_CLASS}
        class={this.classes}
        hook={this.hooks}
        attrs={this.attrs}
        dataset={this.dataset}
        {...this.props}
        aria-valuemin='0'
        aria-valuemax='100'
        aria-valuenow='0'
        aria-label='Select Value'
        aria-disabled='true'
        data-step='2'>
        <div classNames={TRACK_CNT_CLASS}>
          <div classNames={TRACK_CLASS} />
          {!!this.props.markers &&
            !!this.props.discrete &&
            <div classNames={TRACK_MARKER_CLASS} />}
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
