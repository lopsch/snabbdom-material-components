import { SW_NC_CLASS, SW_DISABLED } from './styles'
import { SMCAdapter } from '../base'

export default class SwitchAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCSwitch(elm))

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
