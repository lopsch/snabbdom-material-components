import pathSatisfies from 'ramda/es/pathSatisfies'
import isNil from 'ramda/es/isNil'
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
      const wanted = pathSatisfies(
        determinate => isNil(determinate) || determinate === false,
        ['determinate'],
        props
      )
      if (wanted) {
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
