import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox.min'
import { SMCAdapter } from '../base'

export default class CheckboxAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCCheckbox(elm))
    this.checkbox = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateIndeterminate_ = props => {
      this.updateBoolean_(props, 'indeterminate')
    }

    this.updateChecked_ = props => {
      this.updateBoolean_(props, 'checked')
    }

    this.updateValue_ = props => {
      const wanted = props && props.value
      const active = this.checkbox.value

      if (wanted && wanted !== active) {
        this.checkbox.value = wanted
      }
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const active = this.checkbox[prop]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.checkbox[prop] = wanted
      }
    }

    this.updateProps_ = props => {
      this.updateDisabled_(props)
      this.updateIndeterminate_(props)
      this.updateChecked_(props)
      this.updateValue_(props)
    }

    this.updateProps_(data.props)
  }
}
