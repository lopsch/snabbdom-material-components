import propOr from 'ramda/es/propOr'
import pathSatisfies from 'ramda/es/pathSatisfies'
import path from 'ramda/es/path'
import is from 'ramda/es/is'
import isNil from 'ramda/es/isNil'
import { log, isBool, isNum, isPosNum } from '../utils'

export default class SMCAdapter {
  constructor (sel_ = '', component_ = {}, mappings_ = {}) {
    this.sel = sel_
    this.component = component_
    this.mappings = mappings_

    log(this.sel, '-> init()')

    this.destroy = () => {
      if (pathSatisfies(is(Function), ['destroy'], this.component)) {
        log(this.sel, '-> destroy()')

        this.component.destroy()
      }

      this.destroy_()
    }

    this.update = (oldVnode, vnode) => {
      log(this.sel, '-> update()')

      this.update_(vnode.data.props)
    }

    this.destroy_ = () => {}
    this.update_ = props => {}

    this.mapped_ = prop => {
      return propOr(prop, [prop], this.mappings)
    }

    this.updateBool_ = (props, prop) => {
      this.updateProp_(props, prop, isBool)
    }

    this.updateVal_ = (props, prop) => {
      this.updateProp_(props, prop, newVal => !isNil(newVal))
    }

    this.updateNum_ = (props, prop, positive = false) => {
      this.updateProp_(props, prop, positive ? isPosNum : isNum)
    }

    this.updateProp_ = (props, prop, checkNewVal) => {
      if (!isNil(this.component)) {
        const newVal = path([prop], props)
        const mappedProp = this.mapped_(prop)
        const oldVal = this.component[mappedProp]

        if (checkNewVal(newVal) && newVal !== oldVal) {
          this.component[mappedProp] = newVal
        }
      }
    }
  }
}
