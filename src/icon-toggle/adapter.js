import { MDCIconToggle } from '@material/icon-toggle'
import { SMCAdapter } from '../base'

export default class IconToggleAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCIconToggle(elm))
    this.iconToggle = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

    this.updateDisabled_ = props => {
      this.updateBoolean_(props, 'disabled')
    }

    this.updateOn_ = props => {
      this.updateBoolean_(props, 'toggled')
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const mapped = this.mapped_(prop)
      const active = this.iconToggle[mapped]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.iconToggle[mapped] = wanted
      }
    }

    this.updateProps_ = props => {
      this.updateDisabled_(props)
      this.updateOn_(props)
      // this.iconToggle.refreshToggleData()
    }

    this.updateProps_(data.props)
  }

  mapped_ (prop) {
    return PROPS_MAPPINGS[prop] || prop
  }
}

const PROPS_MAPPINGS = { toggled: 'on' }
