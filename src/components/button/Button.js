import { STYLE_SWITCHES } from './styles'
import ButtonComponent from './ButtonComponent'

export default class Button extends ButtonComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)
  }
}
