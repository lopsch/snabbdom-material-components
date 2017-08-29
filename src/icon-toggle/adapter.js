import { MDCIconToggle } from '@material/icon-toggle'
import { SMCAdapter } from '../base'

export default class IconToggleAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCIconToggle(elm), { toggled: 'on' })

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateOn_ = props => {
      this.updateBoolean_(props, 'toggled')
    }

    this.update_ = props => {
      this.updateDisabled_(props)
      this.updateOn_(props)
      // this.component.refreshToggleData()
    }

    this.update_(data.props)
  }
}
