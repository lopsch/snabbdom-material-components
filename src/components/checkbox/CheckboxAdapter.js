import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox'
import { FormFieldDecorator } from '../form-field'

export default class CheckboxAdapter extends FormFieldDecorator {
  constructor ({ sel, elm }) {
    super(sel, elm, MDCCheckbox)
    this.checkbox = this.component
  }
}
