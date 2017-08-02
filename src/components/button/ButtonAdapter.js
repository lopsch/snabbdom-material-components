import { MaterialAdapter } from '../base'
import RippleDecorator from '../ripple'

export default class ButtonAdapter extends MaterialAdapter {
  constructor ({ sel, elm }) {
    super(sel)
    this.ripple = new RippleDecorator(elm)
  }
}
