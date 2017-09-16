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
import { makeHooks, isBool, isNum, isPosNum, isStr, isFn } from '../utils'

export default class Slider extends SMCComponent {
  constructor (props_ = {}, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.markers = props_.markers === true && props_.discrete === true
  }

  attrs_ (props) {
    const { tabIndex, labelledBy } = props

    return {
      role: 'slider',
      ...(isNum(tabIndex) ? { tabindex: tabIndex } : {}),
      ...(isStr(labelledBy) ? { 'aria-labelledby': labelledBy } : {})
    }
  }

  on_ (props) {
    const { onChange, onInput } = props

    return {
      ...(isFn(onChange) ? { 'MDCSlider:change': onChange } : {}),
      ...(isFn(onInput) ? { 'MDCSlider:input': onInput } : {})
    }
  }

  hook_ (props) {
    return makeHooks(SliderAdapter)
  }

  classNames_ (classNames) {
    return classNames.concat(SLIDER_CLASS)
  }

  props_ (props) {
    const { disabled, min, max, step, value } = props

    return {
      ...(isBool(disabled) ? { disabled } : {}),
      ...(isNum(min) ? { min } : {}),
      ...(isNum(max) ? { max } : {}),
      ...(isPosNum(step) ? { step } : {}),
      ...(isNum(value) ? { value } : {})
    }
  }

  render () {
    return (
      <div {...this.props}>
        <div classNames={TRACK_CNT_CLASS}>
          <div classNames={TRACK_CLASS} />
          {this.markers ? <div classNames={TRACK_MARKER_CLASS} /> : []}
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
