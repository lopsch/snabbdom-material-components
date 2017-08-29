import { MDCRadio } from '@material/radio'
import { SMCAdapter } from '../base'

export default class RadioAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCRadio(elm))

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateChecked_ = props => {
      this.updateBoolean_(props, 'checked')
    }

    this.updateValue_ = props => {
      this.updateOther_(props, 'value')
    }

    this.update_ = props => {
      this.updateDisabled_(props)
      this.updateChecked_(props)
      this.updateValue_(props)
    }

    this.update_(data.props)
  }
}
