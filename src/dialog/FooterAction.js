import { BTN_CLASS } from '../button/styles'
import { FOOTER_BTN_CLASS, STYLE_SWITCHES_FOOTER_BTN } from './styles'
import Button from '../button/Button'

export default class FooterAction extends Button {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_FOOTER_BTN)
  }

  classNames_ () {
    return [BTN_CLASS, FOOTER_BTN_CLASS]
  }

  hooks_ () {
    return {}
  }
}
