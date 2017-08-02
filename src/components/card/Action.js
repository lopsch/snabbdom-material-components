import { BTN_CLASS, STYLE_SWITCHES } from '../button/styles'
import { ACTION_CLASS } from './styles'
import { ButtonAdapter, ButtonComponent } from '../button'

export default class Action extends ButtonComponent {
  constructor (props_, children_) {
    super({ ...props_, compact: true }, children_, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(ButtonAdapter)
    this.classNames = [BTN_CLASS, ACTION_CLASS]
  }
}
