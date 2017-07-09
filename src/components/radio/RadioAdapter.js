import { MDCRadio } from '@material/radio/dist/mdc.radio'
import { FormFieldDecorator } from '../form-field'

export default class RadioAdapter extends FormFieldDecorator {
  constructor ({ sel, elm }) {
    super(sel, elm, MDCRadio)
    this.radio = this.component
  }
}
