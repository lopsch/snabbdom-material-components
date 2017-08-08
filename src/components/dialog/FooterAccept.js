import FooterAction from './FooterAction'

export default class FooterAccept extends FooterAction {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, accept: true }, children_)
  }
}
