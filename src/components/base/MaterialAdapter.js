export default class MaterialAdapter {
  constructor (sel, component) {
    this.sel = sel
    this.component = component

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
    }

    this.update = (oldVnode, vnode) => {
      if (process.env.NODE_ENV !== 'production') {
        console.info(this.sel, '-> update()')
      }

      this._update(oldVnode, vnode)
    }

    this._update = (oldVnode, vnode) => {}
  }
}
