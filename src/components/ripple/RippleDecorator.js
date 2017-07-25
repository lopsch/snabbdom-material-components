import { MDCRipple } from '@material/ripple/dist/mdc.ripple'
import { delayInit } from '../../utils'
import { MaterialAdapter } from '../base'

export default class RippleDecorator extends MaterialAdapter {
  constructor ({ sel, elm }) {
    super(sel)
    delayInit(elm, function attach () {
      MDCRipple.attachTo(elm)
    })
  }
}
