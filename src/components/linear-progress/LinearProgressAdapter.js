import { MDCLinearProgress } from '@material/linear-progress/dist/mdc.linearProgress.min'
import { MaterialAdapter } from '../base'

export default class LinearProgressAdapter extends MaterialAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCLinearProgress(elm))
    this.linearProgress = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

    this.updateBuffer_ = props => {
      this.updateNumber_(props, 'buffer')
    }

    this.updateProgress_ = props => {
      this.updateNumber_(props, 'progress')
    }

    this.updateReverse_ = props => {
      this.updateBoolean_(props, 'reverse')
    }

    this.updateDeterminate_ = props => {
      const wanted = props && props.determinate
      if (wanted === undefined || (typeof wanted === 'boolean' && !wanted)) {
        this.linearProgress.determinate = false
      } else {
        this.updateBoolean_(props, 'determinate')
      }
    }

    this.updateBoolean_ = (props, prop) => {
      const wanted = props && props[prop]
      const active = this.linearProgress.foundation_[`${prop}_`]
      if (typeof wanted === 'boolean' && wanted !== active) {
        this.linearProgress[prop] = wanted
      }
    }

    this.updateNumber_ = (props, prop) => {
      if (
        props &&
        typeof props[prop] === 'number' &&
        props[prop] !== this.linearProgress[prop]
      ) {
        this.linearProgress[prop] = props[prop]
      }
    }

    this.updateProps_ = props => {
      this.updateBuffer_(props)
      this.updateProgress_(props)
      this.updateReverse_(props)
      this.updateDeterminate_(props)
    }

    this.updateProps_(data.props)
  }
}
