import { MDCLinearProgress } from '@material/linear-progress'
import { SMCAdapter } from '../base'

export default class LinearProgressAdapter extends SMCAdapter {
  constructor ({ sel, elm, data }) {
    super(sel, new MDCLinearProgress(elm))

    this.updateBuffer_ = props => {
      this.updateNum_(props, 'buffer')
    }

    this.updateProgress_ = props => {
      this.updateNum_(props, 'progress')
    }

    this.updateReverse_ = props => {
      this.updateBool_(props, 'reverse')
    }

    this.updateDeterminate_ = props => {
      const wanted = props && props.determinate
      if (wanted == null || wanted === false) {
        this.component.determinate = false
      } else {
        this.updateBool_(props, 'determinate')
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
