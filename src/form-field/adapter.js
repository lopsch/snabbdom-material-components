import { MDCFormField } from '@material/form-field'
import { SMCAdapter } from '../base'

export default class FormFieldAdapter extends SMCAdapter {
  constructor ({ sel, elm, children }) {
    super(sel, new MDCFormField(elm))

    this.component.input = children[0].data.material.component

    this.destroy_ = () => {
      if (
        this.component.input &&
        typeof this.component.input.destroy === 'function'
      ) {
        if (process.env.NODE_ENV !== 'production') {
          console.info(this.sel, '-> input.destroy()')
        }
        this.component.input.destroy()
      }
    }
  }
}
