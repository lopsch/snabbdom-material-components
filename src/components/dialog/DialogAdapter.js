import { MDCDialog } from '@material/dialog/dist/mdc.dialog'
import { MaterialAdapter } from '../base'

export default class DialogAdapter extends MaterialAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCDialog(elm))
    this.dialog = this.component

    this._update = (oldVnode, vnode) => {
      this._updateProps(vnode.data.props)
    }

    this._updateShow = props => {
      this._callUpdate(props, 'show')
    }

    this._updateHide = props => {
      this._callUpdate(props, 'close')
    }

    this._updateProps = props => {
      this._updateShow(props)
      this._updateHide(props)
    }

    this._callUpdate = (props, prop) => {
      if (
        props &&
        props[prop] &&
        typeof props[prop] === 'boolean' &&
        typeof this.dialog[prop] === 'function'
      ) {
        this.dialog[prop]()
      }
    }

    this._updateProps(data.props)
  }
}
