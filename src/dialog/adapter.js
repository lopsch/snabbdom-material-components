import { MDCDialog } from '@material/dialog'
import { SMCAdapter } from '../base'

export default class DialogAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCDialog(elm))

    this.update_ = props => {
      const show = props && typeof props.show === 'boolean' && props.show
      const open = this.component.open

      if (show && !open) {
        this.component.show()
      } else if (!show && open) {
        this.component.close()
      }
    }

    this.update_(data.props)
  }
}
