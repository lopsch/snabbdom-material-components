import { SMCAdapter } from '../base'
import RippleDecorator from '../ripple'

export default class ButtonAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel)

    const fixed =
      data.props && data.props.fixed && typeof data.props.fixed === 'boolean'
    this.ripple = new RippleDecorator(elm, (fixed && 'fixed') || 'relative')

    this.destroy_ = () => {
      if (
        this.ripple.ripple &&
        typeof this.ripple.ripple.destroy === 'function'
      ) {
        if (process.env.NODE_ENV !== 'production') {
          console.info(this.sel, '-> ripple.destroy()')
        }
        this.ripple.ripple.destroy()
      }
    }
  }
}
