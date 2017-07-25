import { BTN_CLASS } from '../button/styles'
import { FOOTER_BTN_CLASS, STYLE_SWITCHES_FOOTER_BTN } from './styles'
import ButtonComponent from '../button/ButtonComponent'

export default class Action extends ButtonComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_FOOTER_BTN)
  }

  _makeHooks () {
    return {}
  }

  _makeClassNames () {
    return [BTN_CLASS, FOOTER_BTN_CLASS]
  }
}
