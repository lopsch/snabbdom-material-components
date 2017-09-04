import { MDCCheckbox } from '@material/checkbox'
import { SMCAdapter } from '../base'

export default class CheckboxAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCCheckbox(elm))

    this.updateDisabled_ = props => {
      this.updateBool_(props, 'disabled')
    }

    this.updateIndeterminate_ = props => {
      this.updateBool_(props, 'indeterminate')
    }

    this.updateChecked_ = props => {
      this.updateBool_(props, 'checked')
    }

    this.updateValue_ = props => {
      this.updateVal_(props, 'value')
    }

    this.update_ = props => {
      this.updateDisabled_(props)
      this.updateIndeterminate_(props)
      this.updateChecked_(props)
      this.updateValue_(props)
    }

    this.update_(data.props)
  }
}
