import path from 'ramda/es/path'
import pathSatisfies from 'ramda/es/pathSatisfies'
import is from 'ramda/es/is'
import { SMCAdapter } from '../base'
import RippleDecorator from '../ripple'
import { log } from '../utils'

export default class ButtonAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel)

    const fixed = path(['props', 'fixed'], data) === true
    this.ripple = new RippleDecorator(elm, (fixed && 'fixed') || 'relative')

    this.destroy_ = () => {
      if (pathSatisfies(is(Function), ['ripple', 'destroy'], this.ripple)) {
        log(this.sel, '-> ripple.destroy()')

        this.ripple.ripple.destroy()
      }
    }
  }
}
