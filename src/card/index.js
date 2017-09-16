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
import { SMCComponent } from '../base'
import { BTN_CLASS } from '../button/styles'
import Button from '../button'
import { isStr } from '../utils'

class Card extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(CARD_CLASS)
  }

  render () {
    return <div {...this.props}>{this.children}</div>
  }
}

class Action extends Button {
  constructor (props_ = {}, children_) {
    super({ ...props_, compact: true }, children_)
  }

  classNames_ (classNames) {
    return classNames.concat(BTN_CLASS, ACTION_CLASS)
  }
}

class Actions extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STLYE_SWITCHES_ACTIONS)
  }

  classNames_ (classNames) {
    return classNames.concat(ACTIONS_CLASS)
  }

  render () {
    return <section {...this.props}>{this.children}</section>
  }
}

class HorizontalBlock extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(HB_CLASS)
  }

  render () {
    return <div {...this.props}>{this.children}</div>
  }
}

class Media extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(MEDIA_CLASS)
  }

  render () {
    return <section {...this.props}>{this.children}</section>
  }
}

class MediaItem extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_MEDIA_ITEM)
  }

  classNames_ (classNames) {
    return classNames.concat(MEDIA_ITEM_CLASS)
  }

  props_ (props) {
    const { src } = props

    return isStr(src) ? { src } : {}
  }

  render () {
    return <img {...this.props}>{this.children}</img>
  }
}

class Primary extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(PRIMARY_CLASS)
  }

  render () {
    return <section {...this.props}>{this.children}</section>
  }
}

class Subtitle extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(SUBTITLE_CLASS)
  }

  render () {
    return <h2 {...this.props}>{this.children}</h2>
  }
}

class SupportingText extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(ST_CLASS)
  }

  render () {
    return <section {...this.props}>{this.children}</section>
  }
}

class Title extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_TITLE)
  }

  classNames_ (classNames) {
    return classNames.concat(TITLE_CLASS)
  }

  render () {
    return <h1 {...this.props}>{this.children}</h1>
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
