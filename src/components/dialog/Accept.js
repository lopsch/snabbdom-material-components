import Action from './Action'

export default class Accept extends Action {
  constructor (_props, _children) {
    super({ ..._props, accept: true }, _children)
  }
}
