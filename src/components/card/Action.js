import { BTN_CLASS, STYLE_SWITCHES } from '../button/styles'
import { ACTION_CLASS } from './styles'
import ButtonComponent from '../button/ButtonComponent'

export default class Action extends ButtonComponent {
  constructor (_props, _children) {
    super({ ..._props, compact: true }, _children, STYLE_SWITCHES)
  }

  _makeClassNames () {
    return [BTN_CLASS, ACTION_CLASS]
  }
}
