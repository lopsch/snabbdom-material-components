/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { DIALOG_CLASS, SURFACE_CLASS, BACKDROP_CLASS } from './styles'
import DialogAdapter from './DialogAdapter'
import { MaterialComponent } from '../base'

export default class Dialog extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children)

    const { labeledBy, describedBy, ...otherProps } = this.props
    this.hooks = this.utils.makeHooks(DialogAdapter)
    this.labeledBy = this.utils.makeKeyValue('aria-labelledby', labeledBy)
    this.describedBy = this.utils.makeKeyValue('aria-describedby', describedBy)
    this.props = otherProps
  }

  render () {
    return (
      <aside
        {...this.selector}
        classNames={DIALOG_CLASS}
        class={this.classes}
        hook={this.hooks}
        attrs={{ role: 'alertdialog', ...this.labeledBy, ...this.describedBy }}
        {...this.props}>
        <div classNames={SURFACE_CLASS}>
          {this.children}
        </div>
        <div classNames={BACKDROP_CLASS} />
      </aside>
    )
  }
}
