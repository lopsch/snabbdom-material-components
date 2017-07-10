export default class Dialog extends MaterialComponent {
  constructor (_props, _children) {
    super(_props, _children, STYLE_SWITCHES_FAB)

    const { labeledBy, ...otherProps } = this.props
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
