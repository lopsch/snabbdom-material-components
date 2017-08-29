import { MDCSlider } from '@material/slider'
import { SMCAdapter } from '../base'

export default class SliderAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCSlider(elm))

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateMin_ = props => {
      this.updateNumber_(props, 'min')
    }

    this.updateMax_ = props => {
      this.updateNumber_(props, 'max')
    }

    this.updateStep_ = props => {
      this.updateNumber_(props, 'step', true)
    }

    this.updateValue_ = props => {
      this.updateNumber_(props, 'value')
    }

    this.update_ = props => {
      this.updateDisabled_(props)
      this.updateMin_(props)
      this.updateMax_(props)
      this.updateValue_(props)
      this.updateStep_(props)
    }

    this.update_(data.props)
    window.setTimeout(() => {
      this.component.layout()
    }, 0)
  }
}
