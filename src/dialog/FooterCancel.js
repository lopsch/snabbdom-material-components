import FooterAction from './FooterAction'

export default class FooterCancel extends FooterAction {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, cancel: true }, children_)
  }
}
