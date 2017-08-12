/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { CARD_CLASS } from './styles'
import SMCComponent from '../base/SMCComponent'
import Actions from './Actions'
import Action from './Action'
import SupportingText from './SupportingText'
import Primary from './Primary'
import HorizontalBlock from './HorizontalBlock'
import Media from './Media'
import MediaItem from './MediaItem'
import Subtitle from './Subtitle'
import Title from './Title'

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
