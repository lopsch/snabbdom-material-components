import RippleDecorator from '../ripple'
import { MaterialComponent } from '../base'

export default class AbstractButton extends MaterialComponent {
  constructor (_props, _children, _switches) {
    super(_props, _children, _switches)

    const { name, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks = this.utils.makeHooks(RippleDecorator)
    this.ons = {}
    if (typeof onClick === 'function') this.ons['click'] = onClick
    this.props = otherProps
  }
}
