export default class SMCAdapter {
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
