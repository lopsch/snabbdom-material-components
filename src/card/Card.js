/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  CARD_CLASS,
  ACTION_CLASS,
  STLYE_SWITCHES_ACTIONS,
  ACTIONS_CLASS,
  HB_CLASS,
  MEDIA_CLASS,
  MEDIA_ITEM_CLASS,
  STYLE_SWITCHES_MEDIA_ITEM,
  PRIMARY_CLASS,
  SUBTITLE_CLASS,
  ST_CLASS,
  STYLE_SWITCHES_TITLE,
  TITLE_CLASS
} from './styles'
import SMCComponent from '../base/SMCComponent'
import { BTN_CLASS } from '../button/styles'
import Button from '../button/Button'

class Card extends SMCComponent {
  render () {
    return (
      <div
        {...this.selector}
        classNames={CARD_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </div>
    )
  }
}

class Action extends Button {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, compact: true }, children_)
  }

  classNames_ () {
    return [BTN_CLASS, ACTION_CLASS]
  }
}

class Actions extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STLYE_SWITCHES_ACTIONS)
  }

  render () {
    return (
      <section
        {...this.selector}
        classNames={ACTIONS_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}

class HorizontalBlock extends SMCComponent {
  render () {
    return (
      <div
        {...this.selector}
        classNames={HB_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </div>
    )
  }
}

class Media extends SMCComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={MEDIA_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}

class MediaItem extends SMCComponent {
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

class Primary extends SMCComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={PRIMARY_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}

class Subtitle extends SMCComponent {
  render () {
    return (
      <h2
        {...this.selector}
        classNames={SUBTITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h2>
    )
  }
}

class SupportingText extends SMCComponent {
  render () {
    return (
      <section
        {...this.selector}
        classNames={ST_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}

class Title extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_TITLE)
  }

  render () {
    return (
      <h1
        {...this.selector}
        classNames={TITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h1>
    )
  }
}

Card.SupportingText = SupportingText
Card.Primary = Primary
Card.Subtitle = Subtitle
Card.Title = Title
Card.Actions = Actions
Card.Action = Action
Card.HorizontalBlock = HorizontalBlock
Card.Media = Media
Card.MediaItem = MediaItem

export default Card
