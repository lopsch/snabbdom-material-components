/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { DIALOG_CLASS, SURFACE_CLASS, BACKDROP_CLASS } from './styles'
import DialogAdapter from './DialogAdapter'
import { MaterialComponent } from '../base'

export default class Dialog extends MaterialComponent {
  constructor (props_, children_) {
    super(props_, children_)

    const {
      labeledBy,
      describedBy,
      onAccept,
      onCancel,
      ...otherProps
    } = this.props
    this.hooks = this.utils.makeHooks(DialogAdapter)
    this.ons = {}
    if (typeof onAccept === 'function') this.ons['MDCDialog:accept'] = onAccept
    if (typeof onCancel === 'function') this.ons['MDCDialog:cancel'] = onCancel
    this.attrs = {
      role: 'alertdialog',
      ...this.utils.makeKeyValue('aria-labelledby', labeledBy),
      ...this.utils.makeKeyValue('aria-describedby', describedBy)
    }
    this.props = otherProps
  }

  render () {
    return (
      <aside
        {...this.selector}
        classNames={DIALOG_CLASS}
        class={this.classes}
        hook={this.hooks}
        on={this.ons}
        attrs={this.attrs}
        {...this.props}>
        <div classNames={SURFACE_CLASS}>
          {this.children}
        </div>
        <div classNames={BACKDROP_CLASS} />
      </aside>
    )
  }
}
