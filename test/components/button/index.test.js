/* eslint-env mocha */
import chai, { expect } from 'chai'
// import chalk from 'chalk'
import assertarrays from 'chai-arrays'
import asserttype from 'chai-asserttype'
/* eslint-disable no-unused-vars */
import html, { SnabbdomComponent } from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { JSDOM } from 'jsdom'
import { init } from 'snabbdom'
import classModule from 'snabbdom/modules/class'
import propsModule from 'snabbdom/modules/props'
import attrsModule from 'snabbdom/modules/attributes'
import styleModule from 'snabbdom/modules/style'
import datasetModule from 'snabbdom/modules/dataset'
import { Button, LinkButton } from '../../../src'

chai.use(assertarrays)
chai.use(asserttype)

const modules = [
  classModule,
  propsModule,
  attrsModule,
  styleModule,
  datasetModule
]

const patch = init(modules)

// mdc-ripple-upgraded
// html-looks-like

beforeEach(() => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="app">
          <div id="container"></div>
        </div>
      </body>
    </html>`)
  global.window = dom.window
  global.document = global.window.document
  global.navigator = global.window.navigator
  global.HTMLElement = global.window.HTMLElement
  // console.log(chalk.yellow.bold('\nDOM -> STARTED \n'))
})

afterEach(() => {
  if (window && typeof window.close === 'function') {
    window.close()
    delete global.HTMLElement
    delete global.navigator
    delete global.document
    delete global.window
  }
  // console.log(chalk.yellow.bold('\nDOM -> STOPPED'))
})

describe('Button()', () => {
  it("should build an 'mdc-button'", () => {
    const props = {
      key: 'button',
      id: 'id',
      raised: true,
      dense: true,
      compact: true,
      primary: true,
      accent: true,
      disabled: true,
      action: true,
      style: { 'margin-top': '50px' },
      classNames: ['class1', ['class2'], 'class3 class4'],
      class: { red: true }
    }
    const _props = {
      class: {
        class1: true,
        class2: true,
        class3: true,
        class4: true,
        'mdc-button--raised': true,
        'mdc-button--dense': true,
        'mdc-button--compact': true,
        'mdc-button--primary': true,
        'mdc-button--accent': true,
        'mdc-card__action': true,
        red: true,
        f1cotxbe: true // first typestyle id
      },
      props: {
        raised: true,
        dense: true,
        compact: true,
        primary: true,
        accent: true,
        disabled: true,
        action: true
      }
    }

    const child = 'button'
    const vnode = new Button(props, child).render()

    expect(vnode.key).to.equal('button')
    expect(vnode.sel).to.equal('button#id.mdc-button')
    expect(vnode.children[0]).to.deep.equal({ text: 'button' })
    expect(vnode.data.props).to.deep.equal(_props.props)
    expect(vnode.data.class).to.deep.equal(_props.class)
    expect(vnode.data.hook.insert).to.be.function()

    const container = document.getElementById('container')
    patch(container, vnode)

    const updatedProps = {
      ...props,
      accent: false,
      disabled: false
    }
    const updatedChild = 'button updated'
    const updatedVnode = new Button(updatedProps, updatedChild).render()
    patch(vnode, updatedVnode)

    const emptyVnode = {
      sel: undefined,
      data: {},
      children: [],
      text: undefined
    }
    patch(vnode, emptyVnode)
  })
})

describe('LinkButton()', () => {
  it("should build an 'mdc-button'", () => {
    const props = {
      key: 'linkbutton',
      id: 'id',
      href: 'http://www.google.de',
      raised: true,
      dense: true,
      compact: true,
      primary: true,
      accent: true,
      action: true,
      style: { 'margin-top': '50px' },
      classNames: ['class1', ['class2'], 'class3 class4'],
      class: { red: true }
    }
    const _props = {
      class: {
        class1: true,
        class2: true,
        class3: true,
        class4: true,
        'mdc-button--raised': true,
        'mdc-button--dense': true,
        'mdc-button--compact': true,
        'mdc-button--primary': true,
        'mdc-button--accent': true,
        'mdc-card__action': true,
        red: true,
        f1cotxbe: true // first typestyle id
      },
      props: {
        raised: true,
        dense: true,
        compact: true,
        primary: true,
        accent: true,
        action: true,
        href: 'http://www.google.de'
      }
    }
    const child = 'http://www.google.de'
    const vnode = new LinkButton(props, child).render()

    expect(vnode.key).to.equal('linkbutton')
    expect(vnode.sel).to.equal('a#id.mdc-button')
    expect(vnode.children[0]).to.deep.equal({ text: 'http://www.google.de' })
    expect(vnode.data.props).to.deep.equal(_props.props)
    expect(vnode.data.class).to.deep.equal(_props.class)
    expect(vnode.data.hook.insert).to.be.function()

    const container = document.getElementById('container')
    patch(container, vnode)

    const updatedProps = {
      ...props,
      accent: false
      // href: 'http://www.google.com'
    }
    const updatedChild = 'http://www.google.com'
    const updatedVnode = new LinkButton(updatedProps, updatedChild).render()
    patch(vnode, updatedVnode)

    const emptyVnode = {
      sel: undefined,
      data: {},
      children: [],
      text: undefined
    }
    patch(vnode, emptyVnode)
  })
})
