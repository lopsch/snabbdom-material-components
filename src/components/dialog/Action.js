import { BTN_CLASS } from '../button/styles'
import { FOOTER_BTN_CLASS, STYLE_SWITCHES_FOOTER_BTN } from './styles'
import { ButtonComponent } from '../button'

export default class Action extends ButtonComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_FOOTER_BTN)

    this.classNames = [BTN_CLASS, FOOTER_BTN_CLASS]
  }
}
