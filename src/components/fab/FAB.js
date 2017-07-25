import { STYLE_SWITCHES, FAB_CLASS } from './styles'
import ButtonComponent from '../button/ButtonComponent'

export default class FAB extends ButtonComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES)
  }

  _makeClassNames () {
    return FAB_CLASS
  }

  _makeAttrs (props) {
    const { ariaLabel, ...remainingProps } = props
    return {
      attrs: this.utils.makeKeyValue('aria-label', ariaLabel),
      remainingProps
    }
  }
}
