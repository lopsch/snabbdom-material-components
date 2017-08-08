/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { MEDIA_ITEM_CLASS, STYLE_SWITCHES_MEDIA_ITEM } from './styles'
import { SMCComponent } from '../base'

export default class MediaItem extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_MEDIA_ITEM)

    const { src, ...otherProps } = this.props
    this.src = this.utils.makeKeyValue('src', src)
    this.props = otherProps
  }

  render () {
    return (
      <img
        {...this.selector}
        classNames={MEDIA_ITEM_CLASS}
        class={this.classes}
        {...this.src}
        {...this.props}>
        {this.children}
      </img>
    )
  }
}
