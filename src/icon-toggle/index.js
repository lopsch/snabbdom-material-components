/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import isNil from 'ramda/es/isNil'
import { STYLE_SWITCHES, ICON_CLASS, MAT_ICON_CLASS } from './styles'
import { SMCComponent } from '../base'
import { FA_CLASS } from '../icon/styles'
import Icon from '../icon'
import IconToggleAdapter from './adapter'
import { makeHooks, isObj, isNum, isFn, isStr, isBool, isArr } from '../utils'

class IconToggle extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)
  }

  parseToggle_ (toggle) {
    return isObj(toggle) ? JSON.stringify(toggle) : JSON.stringify({})
  }

  attrs_ (props) {
    const { tabIndex, label } = props

    return {
      role: 'button',
      ...(isNum(tabIndex) ? { tabindex: tabIndex } : {}),
      ...(isStr(label) ? { 'aria-label': label } : {})
    }
  }

  on_ (props) {
    const { onChange } = props

    return isFn(onChange) ? { 'MDCIconToggle:change': onChange } : {}
  }

  hook_ (props) {
    return makeHooks(IconToggleAdapter)
  }

  dataset_ (props) {
    const { toggleOn, toggleOff } = props

    return {
      ...(!isNil(toggleOn) ? { toggleOn: this.parseToggle_(toggleOn) } : {}),
      ...(!isNil(toggleOff) ? { toggleOff: this.parseToggle_(toggleOff) } : {}),
      ...this.additionalDataset_(props)
    }
  }

  additionalDataset_ (props) {
    return {}
  }

  props_ (props) {
    const { toggled, disabled } = props

    return {
      ...(isBool(disabled) ? { disabled } : {}),
      ...(isBool(toggled) ? { toggled } : {})
    }
  }
}

class FontAwesome extends IconToggle {
  additionalDataset_ (props) {
    return { iconInnerSelector: `.${FA_CLASS}` }
  }

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

class Material extends IconToggle {
  constructor (props_, children_) {
    super(props_, children_)

    this.icon = isArr(children_) && isStr(children_[0]) ? children_[0] : ''
  }

  classNames_ (classNames) {
    return classNames.concat(ICON_CLASS, MAT_ICON_CLASS)
  }

  render () {
    return <i {...this.props}>{this.icon}</i>
  }
}

IconToggle.Material = Material
IconToggle.FontAwesome = FontAwesome

export default IconToggle
