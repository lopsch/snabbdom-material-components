/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { STYLE_SWITCHES } from './styles'
import { MaterialComponent } from '../base'
import IconToggleAdapter from './IconToggleAdapter'

export default class IconToggle extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES)

    this.hooks = this.utils.makeHooks(IconToggleAdapter)
    const { materialIcons, ...otherProps } = this.props
    this.materialIcons =
      materialIcons === undefined ||
      (typeof materialIcons === 'boolean' && materialIcons)
    this.props = otherProps
  }

  render () {
    if (this.materialIcons) {
      return 'MI'
      // <i
      //   class='mdc-icon-toggle material-icons'
      //   role='button'
      //   aria-pressed='false'
      //   aria-label='Add to favorites'
      //   tabindex='0'
      //   data-toggle-on='{&quot;label&quot;: &quot;Remove from favorites&quot;, &quot;content&quot;: &quot;favorite&quot;}'
      //   data-toggle-off='{&quot;label&quot;: &quot;Add to favorites&quot;, &quot;content&quot;: &quot;favorite_border&quot;}'>
      //   favorite_border
      // </i>
    } else {
      return 'FA'
      //       <span class="mdc-icon-toggle" role="button" aria-pressed="false"
      //       aria-label="Star this item" tabindex="0"
      //       data-icon-inner-selector=".fa"
      //       data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
      //       data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'>
      //   <i class="fa fa-star-o" aria-hidden="true"></i>
      // </span>
    }
  }
}
