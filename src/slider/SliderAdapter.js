import { MDCSlider } from '@material/slider'
import SMCAdapter from '../base/SMCAdapter'

export default class SliderAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCSlider(elm))
    this.slider = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

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
      const wanted = props && props.step
      const active = this.slider.step

      if (typeof wanted === 'number' && wanted >= 0 && wanted !== active) {
        this.slider.step = wanted
      }
    }

    this.updateValue_ = props => {
      const wanted = props && props.value
      const active = this.slider.value

      if (typeof wanted === 'number' && wanted !== active) {
        this.slider.value = wanted
      }
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const active = this.slider[prop]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.slider[prop] = wanted
      }
    }

    this.updateNumber_ = (props, prop) => {
      if (
        props &&
        typeof props[prop] === 'number' &&
        props[prop] !== this.slider[prop]
      ) {
        this.slider[prop] = props[prop]
      }
    }

    this.updateProps_ = props => {
      this.updateDisabled_(props)
      this.updateMin_(props)
      this.updateMax_(props)
      this.updateValue_(props)
      this.updateStep_(props)
    }

    this.updateProps_(data.props)
    window.setTimeout(() => {
      this.slider.layout()
    }, 0)
  }
}
