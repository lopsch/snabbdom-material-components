/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES, FAB_CLASS, ICON_CLASS, MAT_ICON_CLASS } from './styles'
import Button from '../button'
import { SMCComponent } from '../base'
import Icon from '../icon'
import { isStr, isBool, isArr } from '../utils'

class Fab extends Button {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)
  }

  attrs_ (props) {
    const { label } = props

    return isStr(label) ? { 'aria-label': label } : {}
  }

  classNames_ (classNames) {
    return classNames.concat(FAB_CLASS)
  }

  additionalProps_ (props) {
    const { fixed } = props

    return isBool(fixed) ? { fixed } : {}
  }
}

class FontAwesome extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(ICON_CLASS)
  }

  render () {
    return (
      <span {...this.props}>
        <Icon>{this.children}</Icon>
      </span>
    )
  }
}

class Material extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    this.icon = isArr(children_) && isStr(children_[0]) ? children_[0] : ''
  }

  classNames_ (classNames) {
    return classNames.concat(ICON_CLASS, MAT_ICON_CLASS)
  }

  render () {
    return <span {...this.props}>{this.icon}</span>
  }
}

Fab.Material = Material
Fab.FontAwesome = FontAwesome

export default Fab
