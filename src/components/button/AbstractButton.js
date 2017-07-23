import ButtonAdapter from './ButtonAdapter'
import { MaterialComponent } from '../base'

export default class AbstractButton extends MaterialComponent {
  constructor (_props, _children, _switches) {
    super(_props, _children, _switches)

    const { name, onClick, ...otherProps } = this.props
    this.name = this.utils.makeKeyValue('name', name)
    this.hooks = this.utils.makeHooks(ButtonAdapter)
    this.onClick = typeof onClick === 'function' ? { click: onClick } : {}
    this.props = otherProps
  }
}