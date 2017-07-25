import { MaterialComponent } from '../base'

export default class InputComponent extends MaterialComponent {
  constructor (_props, _children, _switches) {
    super(_props, _children, _switches)

    const { name, value, onChange, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.value = this.utils.makeKeyValue('value', value)
    this.hooks = this._makeHooks()
    this.ons = {}
    if (typeof onChange === 'function') this.ons['change'] = onChange
    if (typeof onClick === 'function') this.ons['click'] = onClick
    this.props = otherProps
  }

  _makeHooks () {
    return {}
  }
}
