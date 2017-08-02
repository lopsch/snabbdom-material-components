import { STYLE_SWITCHES, BTN_CLASS } from './styles'
import ButtonAdapter from './ButtonAdapter'
import ButtonComponent from './ButtonComponent'

export default class Button extends ButtonComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(ButtonAdapter)
    this.classNames = BTN_CLASS
  }
}
