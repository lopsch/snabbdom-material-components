import Action from './Action'

export default class Cancel extends Action {
  constructor (props_, children_) {
    super({ ...props_, cancel: true }, children_)
  }
}
