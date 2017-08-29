export default class SMCAdapter {
  constructor (sel_, component_, mappings_ = {}) {
    this.sel = sel_
    this.component = component_
    this.mappings = mappings_

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

      this.update_(vnode.data.props)
    }

    this.destroy_ = () => {}
    this.update_ = props => {}

    this.mapped_ = prop => {
      return this.mappings[prop] || prop
    }

    this.updateBoolean_ = (props, prop) => {
      this.updateProp_(props, prop, wanted => typeof wanted === 'boolean')
    }

    this.updateOther_ = (props, prop) => {
      this.updateProp_(props, prop, wanted => wanted || false)
    }

    this.updateNumber_ = (props, prop, positive = false) => {
      this.updateProp_(
        props,
        prop,
        wanted => typeof wanted === 'number' && (!positive || wanted >= 0)
      )
    }

    this.updateProp_ = (props, prop, condition) => {
      const wanted = props && props[prop]
      const mapped = this.mapped_(prop)
      const active = this.component[mapped]

      if (condition(wanted) && wanted !== active) {
        this.component[mapped] = wanted
      }
    }
  }
}
