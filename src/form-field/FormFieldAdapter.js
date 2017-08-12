import { MDCFormField } from '@material/form-field'
import SMCAdapter from '../base/SMCAdapter'

export default class FormFieldAdapter extends SMCAdapter {
  constructor ({ sel, elm, children }) {
    super(sel, new MDCFormField(elm))
    this.formField = this.component
    const input_ =
      Array.isArray(children) &&
      children.length > 0 &&
      typeof children[0] === 'object' &&
      children[0].data.material &&
      children[0].data.material.component
        ? children[0].data.material.component
        : undefined

    if (input_) {
      this.formField.input = input_
    }

    this.destroy_ = () => {
      if (
        this.formField.input &&
        typeof this.formField.input.destroy === 'function'
      ) {
        if (process.env.NODE_ENV !== 'production') {
          console.info(this.sel, '-> input.destroy()')
        }
        this.formField.input.destroy()
      }
    }
  }
}
