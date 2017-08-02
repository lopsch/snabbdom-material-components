import { MDCFormField } from '@material/form-field/dist/mdc.formField.min'
import { FF_CLASS } from './styles'

export default class FormFieldDecorator {
  constructor (elm_, component_) {
    const parent = elm_.parentElement

    if (parent && parent.classList.contains(FF_CLASS)) {
      this.parent = parent
      this.formField = new MDCFormField(this.parent)

      this.formField.input = component_
    }
  }
}
