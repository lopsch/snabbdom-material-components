import { SnabbdomComponent } from 'snabbdom-jsx-pragma'
import * as utils from '../utils'

export class SMCComponent extends SnabbdomComponent {
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
    this.props = { ...props, id_: id }
    this.classes = classes
    this.selector = this.utils.makeSelector(id)
  }
}

export class SMCAdapter {
  constructor (sel_, component_) {
    this.sel = sel_
    this.component = component_

    if (process.env.NODE_ENV !== 'production') {
      console.info(this.sel, '-> init()')
    }

    this.destroy = () => {
      if (this.component && typeof this.component.destroy === 'function') {
        if (process.env.NODE_ENV !== 'production') {
          console.info(this.sel, '-> destroy()')
        }

        this.component.destroy()
      }

      this.destroy_()
    }

    this.update = (oldVnode, vnode) => {
      if (process.env.NODE_ENV !== 'production') {
        console.info(this.sel, '-> update()')
      }

      this.update_(oldVnode, vnode)
    }

    this.destroy_ = () => {}
    this.update_ = (oldVnode, vnode) => {}
  }
}
