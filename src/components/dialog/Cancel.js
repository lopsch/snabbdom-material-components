import Action from './Action'

export default class Cancel extends Action {
  constructor (_props, _children) {
    super({ ..._props, cancel: true }, _children)
  }
}
