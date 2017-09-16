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
import Button from '../button'
import DialogAdapter from './adapter'
import { SMCComponent } from '../base'
import { makeHooks, isStr, isFn, isBool } from '../utils'

class Dialog extends SMCComponent {
  attrs_ (props) {
    const { labelledBy, describedBy } = props

    return {
      role: 'alertdialog',
      ...(isStr(labelledBy) ? { 'aria-labelledby': labelledBy } : {}),
      ...(isStr(describedBy) ? { 'aria-describedby': describedBy } : {})
    }
  }

  on_ (props) {
    const { onAccept, onCancel } = props

    return {
      ...(isFn(onAccept) ? { 'MDCDialog:accept': onAccept } : {}),
      ...(isFn(onCancel) ? { 'MDCDialog:cancel': onCancel } : {})
    }
  }

  hook_ (props) {
    return makeHooks(DialogAdapter)
  }

  classNames_ (classNames) {
    return classNames.concat(DIALOG_CLASS)
  }

  props_ (props) {
    const { show } = props

    return isBool(show) ? { show } : {}
  }

  render () {
    return (
      <aside {...this.props}>
        <div classNames={SURFACE_CLASS}>{this.children}</div>
        <div classNames={BACKDROP_CLASS} />
      </aside>
    )
  }
}

class Body extends SMCComponent {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_BODY)
  }

  classNames_ (classNames) {
    return classNames.concat(BODY_CLASS)
  }

  render () {
    return <section {...this.props}>{this.children}</section>
  }
}

class Footer extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(FOOTER_CLASS)
  }

  render () {
    return <footer {...this.props}>{this.children}</footer>
  }
}

class FooterAction extends Button {
  constructor (props_, children_) {
    super(props_, children_, STYLE_SWITCHES_FOOTER_BTN)
  }

  classNames_ (classNames) {
    return classNames.concat(BTN_CLASS, FOOTER_BTN_CLASS)
  }
}

class FooterAccept extends FooterAction {
  constructor (props_ = {}, children_) {
    super({ ...props_, accept: true }, children_)
  }
}

class FooterCancel extends FooterAction {
  constructor (props_ = {}, children_) {
    super({ ...props_, cancel: true }, children_)
  }
}

class Header extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(HEADER_CLASS)
  }

  render () {
    return <header {...this.props}>{this.children}</header>
  }
}

class Title extends SMCComponent {
  classNames_ (classNames) {
    return classNames.concat(TITLE_CLASS)
  }

  render () {
    return <h2 {...this.props}>{this.children}</h2>
  }
}

Dialog.FooterAccept = FooterAccept
Dialog.Body = Body
Dialog.FooterCancel = FooterCancel
Dialog.Footer = Footer
Dialog.Header = Header
Dialog.Title = Title

export default Dialog
