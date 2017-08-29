import { MDCLinearProgress } from '@material/linear-progress'
import { SMCAdapter } from '../base'

export default class LinearProgressAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCLinearProgress(elm))

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
        this.component.determinate = false
      } else {
        this.updateBoolean_(props, 'determinate')
      }
    }

    this.update_ = props => {
      this.updateBuffer_(props)
      this.updateProgress_(props)
      this.updateReverse_(props)
      this.updateDeterminate_(props)
    }

    this.update_(data.props)
  }
}
