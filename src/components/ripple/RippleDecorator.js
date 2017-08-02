import { MDCRipple } from '@material/ripple/dist/mdc.ripple.min'
import { delayInit } from '../../utils'

export default class RippleDecorator {
  constructor (elm_) {
    delayInit(elm_, function attach () {
      MDCRipple.attachTo(elm_)
    })
  }
}
