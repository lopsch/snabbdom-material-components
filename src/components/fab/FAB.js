import { STYLE_SWITCHES, FAB_CLASS } from './styles'
import { ButtonAdapter, ButtonComponent } from '../button'

export default class FAB extends ButtonComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    const { label, ...otherProps } = this.props
    this.hooks = this.utils.makeHooks(ButtonAdapter)
    this.classNames = FAB_CLASS
    this.attrs = this.utils.makeKeyValue('aria-label', label)
    this.props = otherProps
  }
}
