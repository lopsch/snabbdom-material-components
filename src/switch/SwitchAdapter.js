import { SW_NC_CLASS, SW_DISABLED } from './styles'
import SMCAdapter from '../base/SMCAdapter'

export default class SwitchAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCSwitch(elm))
    this.switch = this.component

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
      const active = this.switch.value

      if (wanted && wanted !== active) {
        this.switch.value = wanted
      }
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const active = this.switch[prop]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.switch[prop] = wanted
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

class MDCSwitch {
  constructor (elm_) {
    this.root = elm_
  }

  get checked () {
    return this.native_.checked
  }

  set checked (checked) {
    this.native_.checked = checked
  }

  get indeterminate () {
    return this.native_.indeterminate
  }

  set indeterminate (indeterminate) {
    this.native_.indeterminate = indeterminate
  }

  get disabled () {
    return this.native_.disabled
  }

  set disabled (disabled) {
    this.native_.disabled = disabled

    if (disabled) {
      this.root.classList.add(SW_DISABLED)
    } else {
      this.root.classList.remove(SW_DISABLED)
    }
  }

  get value () {
    return this.native_.value
  }

  set value (value) {
    this.native_.value = value
  }

  get native_ () {
    return this.root.querySelector(`.${SW_NC_CLASS}`)
  }
}
