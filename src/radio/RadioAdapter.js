import { MDCRadio } from '@material/radio/dist/mdc.radio.min'
import { SMCAdapter } from '../base'

export default class RadioAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCRadio(elm))
    this.radio = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateChecked_ = props => {
      this.updateBoolean_(props, 'checked')
    }

    this.updateValue_ = props => {
      const wanted = props && props.value
      const active = this.radio.value

      if (wanted && wanted !== active) {
        this.radio.value = wanted
      }
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const active = this.radio[prop]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.radio[prop] = wanted
      }
    }

    this.updateProps_ = props => {
      this.updateDisabled_(props)
      this.updateChecked_(props)
      this.updateValue_(props)
    }

    this.updateProps_(data.props)
  }
}
