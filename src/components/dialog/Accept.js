import Action from './Action'

export default class Accept extends Action {
  constructor (props_, children_) {
    super({ ...props_, accept: true }, children_)
  }
}
