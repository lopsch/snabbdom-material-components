import { STYLE_SWITCHES, FAB_CLASS } from './styles'
import Button from '../button/Button'
import Material from './Material'
import FontAwesome from './FontAwesome'

class Fab extends Button {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES)
  }

  classNames_ () {
    return FAB_CLASS
  }

  attrs_ () {
    if (!this.label) {
      const { label, ...otherProps } = this.props
      this.label = label
      this.props = otherProps
    }

    return this.utils.makeKeyValue('aria-label', this.label)
  }
}

Fab.Material = Material
Fab.FontAwesome = FontAwesome

export default Fab
