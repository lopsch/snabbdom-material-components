import { SnabbdomComponent } from 'snabbdom-jsx-pragma'
import * as utils from '../../utils'

export default class MaterialComponent extends SnabbdomComponent {
  constructor (_props, _children, _switches) {
    super(_props, _children)
    this.switches = _switches || []
    this.utils = utils
    const { id, ...otherProps } = this.props

    const { classes, props } = new this.utils.PropsNormalizer(
      otherProps,
      this.switches
    ).normalized

    this.id = id
    this.props = props
    this.classes = classes
    this.selector = this.utils.makeSelector(id)
  }
}
