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
import eventlistenersModule from 'snabbdom/modules/eventlisteners'
import Button from '../../src/button/Button'
console.info = function () {}

chai.use(assertarrays)
chai.use(asserttype)

const modules = [
  classModule,
  propsModule,
  attrsModule,
  styleModule,
  datasetModule,
  eventlistenersModule
]

const patch = init(modules)

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
    const fn = function () {}
    const props = {
      key: 'button',
      id: 'id',
      name: 'name',
      raised: true,
      dense: true,
      compact: true,
      primary: true,
      accent: true,
      disabled: true,
      style: { 'margin-top': '50px' },
      classNames: ['class1', ['class2'], 'class3 class4'],
      class: { red: true },
      onClick: fn
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
        name: 'name',
        id_: 'id'
      },
      on: {
        click: fn
      }
    }

    const child = 'button'
    const vnode = new Button(props, child).render()

    expect(vnode.key).to.equal('button')
    expect(vnode.sel).to.equal('button#id.mdc-button')
    expect(vnode.children[0]).to.deep.equal({ text: 'button' })
    expect(vnode.data.props).to.deep.equal(_props.props)
    expect(vnode.data.class).to.deep.equal(_props.class)
    expect(vnode.data.on).to.deep.equal(_props.on)
    expect(vnode.data.hook.insert).to.be.function()
    expect(vnode.data.hook.destroy).to.be.function()
    expect(vnode.data.hook.update).to.be.function()

    const container = document.getElementById('container')
    patch(container, vnode)
    let button = document.getElementById('id')
    let text = button.textContent || button.innerText
    let classList = button.classList
    let classes = [
      'class1',
      'class2',
      'class3',
      'class4',
      'mdc-button--raised',
      'mdc-button--dense',
      'mdc-button--compact',
      'mdc-button--primary',
      'mdc-button--accent',
      'red',
      'mdc-button',
      'f1cotxbe'
    ]
    classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
    expect(button.id).to.equal('id')
    expect(button.name).to.equal('name')
    expect(button.disabled).to.equal(true)
    expect(text).to.equal('button')

    const updatedProps = {
      ...props,
      accent: false,
      disabled: false
    }
    const updatedChild = 'button updated'
    const updatedVnode = new Button(updatedProps, updatedChild).render()
    patch(vnode, updatedVnode)
    button = document.getElementById('id')
    text = button.textContent || button.innerText
    classList = button.classList
    classes = [
      'class1',
      'class2',
      'class3',
      'class4',
      'mdc-button--raised',
      'mdc-button--dense',
      'mdc-button--compact',
      'mdc-button--primary',
      'red',
      'mdc-button',
      'f1cotxbe'
    ]
    classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
    expect(button.id).to.equal('id')
    expect(button.name).to.equal('name')
    expect(button.disabled).to.equal(false)
    expect(text).to.equal('button updated')

    const emptyVnode = {
      sel: undefined,
      data: {},
      children: [],
      text: undefined
    }
    patch(vnode, emptyVnode)
    button = document.getElementById('id')
    expect(button).to.equal(null)
  })

  it('should handle click events', done => {
    const fn = function () {
      done()
    }
    const props = { id: 'id', onClick: fn }
    const child = 'button'
    const vnode = new Button(props, child).render()
    const container = document.getElementById('container')
    patch(container, vnode)
    const button = document.getElementById('id')
    button.click()
  })
})

describe('LinkButton()', () => {
  it("should build an 'mdc-button'", () => {
    const fn = function () {}
    const props = {
      key: 'linkbutton',
      id: 'id',
      href: 'http://www.google.de/',
      raised: true,
      dense: true,
      compact: true,
      primary: true,
      accent: true,
      style: { 'margin-top': '50px' },
      classNames: ['class1', ['class2'], 'class3 class4'],
      class: { red: true },
      onClick: fn
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
        red: true,
        f1cotxbe: true // first typestyle id
      },
      props: {
        raised: true,
        dense: true,
        compact: true,
        primary: true,
        accent: true,
        href: 'http://www.google.de/',
        id_: 'id'
      },
      on: {
        click: fn
      }
    }
    const child = 'http://www.google.de/'
    const vnode = new Button(props, child).render()

    expect(vnode.key).to.equal('linkbutton')
    expect(vnode.sel).to.equal('a#id.mdc-button')
    expect(vnode.children[0]).to.deep.equal({ text: 'http://www.google.de/' })
    expect(vnode.data.props).to.deep.equal(_props.props)
    expect(vnode.data.class).to.deep.equal(_props.class)
    expect(vnode.data.hook.insert).to.be.function()
    expect(vnode.data.hook.destroy).to.be.function()
    expect(vnode.data.hook.update).to.be.function()

    const container = document.getElementById('container')
    patch(container, vnode)
    let button = document.getElementById('id')
    let text = button.textContent || button.innerText
    let classList = button.classList
    let classes = [
      'class1',
      'class2',
      'class3',
      'class4',
      'mdc-button--raised',
      'mdc-button--dense',
      'mdc-button--compact',
      'mdc-button--primary',
      'mdc-button--accent',
      'red',
      'mdc-button',
      'f1cotxbe'
    ]
    classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
    expect(button.id).to.equal('id')
    expect(button.href).to.equal('http://www.google.de/')
    expect(text).to.equal('http://www.google.de/')

    const updatedProps = {
      ...props,
      accent: false,
      href: 'http://www.google.com/'
    }
    const updatedChild = 'http://www.google.com/'
    const updatedVnode = new Button(updatedProps, updatedChild).render()
    patch(vnode, updatedVnode)
    button = document.getElementById('id')
    text = button.textContent || button.innerText
    classList = button.classList
    classes = [
      'class1',
      'class2',
      'class3',
      'class4',
      'mdc-button--raised',
      'mdc-button--dense',
      'mdc-button--compact',
      'mdc-button--primary',
      'red',
      'mdc-button',
      'f1cotxbe'
    ]
    classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
    expect(button.id).to.equal('id')
    expect(button.href).to.equal('http://www.google.com/')
    expect(text).to.equal('http://www.google.com/')

    const emptyVnode = {
      sel: undefined,
      data: {},
      children: [],
      text: undefined
    }
    patch(vnode, emptyVnode)
    button = document.getElementById('id')
    expect(button).to.equal(null)
  })

  it('should handle click events', done => {
    const fn = function () {
      done()
    }
    const props = { id: 'id', onClick: fn }
    const child = 'http://www.google.de/'
    const vnode = new Button(props, child).render()
    const container = document.getElementById('container')
    patch(container, vnode)
    const button = document.getElementById('id')
    button.click()
  })
})
