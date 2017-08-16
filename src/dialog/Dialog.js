/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import {
  DIALOG_CLASS,
  SURFACE_CLASS,
  BACKDROP_CLASS,
  STYLE_SWITCHES_BODY,
  BODY_CLASS,
  FOOTER_CLASS,
  FOOTER_BTN_CLASS,
  STYLE_SWITCHES_FOOTER_BTN,
  HEADER_CLASS,
  TITLE_CLASS
} from './styles'
import { BTN_CLASS } from '../button/styles'
import Button from '../button/Button'
import DialogAdapter from './DialogAdapter'
import SMCComponent from '../base/SMCComponent'

class Dialog extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_)

    const {
      labelledBy,
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
      ...this.utils.makeKeyValue('aria-labelledby', labelledBy),
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

class Body extends SMCComponent {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_BODY)
  }

  render () {
    return (
      <section
        {...this.selector}
        classNames={BODY_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </section>
    )
  }
}

class Footer extends SMCComponent {
  render () {
    return (
      <footer
        {...this.selector}
        classNames={FOOTER_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </footer>
    )
  }
}

class FooterAction extends Button {
  constructor (props_ = {}, children_ = []) {
    super(props_, children_, STYLE_SWITCHES_FOOTER_BTN)
  }

  classNames_ () {
    return [BTN_CLASS, FOOTER_BTN_CLASS]
  }

  hooks_ () {
    return {}
  }
}

class FooterAccept extends FooterAction {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, accept: true }, children_)
  }
}

class FooterCancel extends FooterAction {
  constructor (props_ = {}, children_ = []) {
    super({ ...props_, cancel: true }, children_)
  }
}

class Header extends SMCComponent {
  render () {
    return (
      <header
        {...this.selector}
        classNames={HEADER_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </header>
    )
  }
}

class Title extends SMCComponent {
  render () {
    return (
      <h2
        {...this.selector}
        classNames={TITLE_CLASS}
        class={this.classes}
        {...this.props}>
        {this.children}
      </h2>
    )
  }
}

Dialog.FooterAccept = FooterAccept
Dialog.Body = Body
Dialog.FooterCancel = FooterCancel
Dialog.Footer = Footer
Dialog.Header = Header
Dialog.Title = Title

export default Dialog
