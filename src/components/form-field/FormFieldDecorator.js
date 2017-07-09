import { MDCFormField } from '@material/form-field/dist/mdc.formField'
import { FF_CLASS } from './styles'
import { MaterialAdapter } from '../base'

export default class FormFieldDecorator extends MaterialAdapter {
  constructor (sel, elm, Decorate) {
    super(sel, new Decorate(elm))

    const parent = elm.parentElement

    if (parent && parent.classList.contains(FF_CLASS)) {
      this.parent = parent
      this.formField = new MDCFormField(this.parent)

      this.formField.input = this.component
    }
  }
}
