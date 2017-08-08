import { SnabbdomComponent } from 'snabbdom-jsx-pragma'
import * as utils from '../../utils'

export default class SMCComponent extends SnabbdomComponent {
  constructor (props_ = {}, children_ = [], switches_ = {}) {
    super(props_, children_)
    this.switches = switches_
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
