import { MDCLinearProgress } from '@material/linear-progress/dist/mdc.linearProgress'
import { MaterialAdapter } from '../base'

export default class LinearProgressAdapter extends MaterialAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCLinearProgress(elm))
    this.linearProgress = this.component

    this._update = (oldVnode, vnode) => {
      this._updateProps(vnode.data.props)
    }

    this._updateBuffer = props => {
      this._callUpdate(props, 'buffer')
    }

    this._updateProgress = props => {
      this._callUpdate(props, 'progress')
    }

    this._updateProps = props => {
      this._updateBuffer(props)
      this._updateProgress(props)
    }

    this._callUpdate = (props, prop) => {
      if (props && typeof props[prop] === 'number') {
        this[prop] = props[prop]
        this.linearProgress[prop] = this[prop]
      }
    }

    this._updateProps(data.props)
  }
}
