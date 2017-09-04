import { MDCRadio } from '@material/radio'
import { SMCAdapter } from '../base'

export default class RadioAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCRadio(elm))

    this.updateDisabled_ = props => {
      this.updateBool_(props, 'disabled')
    }

    this.updateChecked_ = props => {
      this.updateBool_(props, 'checked')
    }

    this.updateValue_ = props => {
      this.updateVal_(props, 'value')
    }

    this.update_ = props => {
      this.updateDisabled_(props)
      this.updateChecked_(props)
      this.updateValue_(props)
    }

    this.update_(data.props)
  }
}
