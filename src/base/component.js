import { SnabbdomComponent } from 'snabbdom-jsx-pragma'
import { ClassesExtractor } from '../utils'

export default class SMCComponent extends SnabbdomComponent {
  constructor (props_ = {}, children_ = [], switches_ = {}) {
    super(props_, children_)

    this.ripple = props_.ripple === true

    const { classes, classNames } = new ClassesExtractor(
      props_,
      switches_
    ).extracted

    const { key, id, sel, style } = props_

    this.props = {
      class: classes,
      attrs: this.attrs_(props_),
      on: this.on_(props_),
      hook: this.hook_(props_),
      dataset: this.dataset_(props_),
      classNames: this.classNames_(classNames),
      style: this.style_(style),
      key,
      id,
      sel,
      ...this.props_(props_)
    }
  }

  style_ (style) {
    return style
  }

  attrs_ (props) {
    return {}
  }

  on_ (props) {
    return {}
  }

  hook_ (props) {
    return {}
  }

  dataset_ (props) {
    return {}
  }

  classNames_ (classNames) {
    return classNames
  }

  props_ (props) {
    return {}
  }
}
