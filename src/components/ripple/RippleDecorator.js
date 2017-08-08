import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min'
import { delayInit } from '../../utils'

export default class RippleDecorator {
  constructor (elm_, position_) {
    const decorator = this
    delayInit(
      elm_,
      function attach () {
        const ripple = new MDCRipple(elm_)
        decorator.ripple = ripple
      },
      position_
    )
  }
}
