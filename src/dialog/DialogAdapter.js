import { MDCDialog } from '@material/dialog/dist/mdc.dialog.min'
import { SMCAdapter } from '../base'

export default class DialogAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCDialog(elm))
    this.dialog = this.component

    this.update_ = (oldVnode, vnode) => {
      this.updateProps_(vnode.data.props)
    }

    this.updateProps_ = props => {
      const show = props && typeof props.show === 'boolean' && props.show
      const open = this.dialog.open

      if (show && !open) {
        this.dialog.show()
      } else if (!show && open) {
        this.dialog.close()
      }
    }

    this.updateProps_(data.props)
  }
}
