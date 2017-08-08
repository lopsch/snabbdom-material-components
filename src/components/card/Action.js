import { BTN_CLASS } from '../button/styles'
import { ACTION_CLASS } from './styles'
import Button from '../button'

export default class Action extends Button {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, compact: true }, children_)
  }

  classNames_ () {
    return [BTN_CLASS, ACTION_CLASS]
  }
}
