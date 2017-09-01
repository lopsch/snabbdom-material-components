/* eslint-env mocha */
/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { Button } from '../../lib'

export default function test (expect, patch) {
  describe('class Button()', () => {
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
        unelevated: true,
        stroked: true,
        ripple: true,
        style: { 'margin-top': '50px' },
        classNames: ['class1'],
        class: { red: true },
        onClick: fn
      }
      const _props = {
        class: {
          class1: true,
          'mdc-button--raised': true,
          'mdc-button--dense': true,
          'mdc-button--compact': true,
          'mdc-button--primary': true,
          'mdc-button--accent': true,
          'mdc-button--unelevated': true,
          'mdc-button--stroked': true,
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
          unelevated: true,
          stroked: true,
          name: 'name',
          id_: 'id'
        },
        on: {
          click: fn
        }
      }

      const child = 'button'
      const vnode = (
        <Button {...props}>
          {child}
        </Button>
      )

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
        'mdc-button--raised',
        'mdc-button--dense',
        'mdc-button--compact',
        'mdc-button--primary',
        'mdc-button--accent',
        'mdc-button--unelevated',
        'red',
        'mdc-button',
        'f1cotxbe'
      ]
      classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
      expect(button.id).to.equal('id')
      expect(button.name).to.equal('name')
      expect(button.disabled).to.equal(true)
      expect(text).to.equal('button')
      expect(button.tagName.toLowerCase()).to.equal('button')

      const updatedProps = {
        ...props,
        accent: false,
        disabled: false
      }
      const updatedChild = 'button updated'
      const updatedVnode = (
        <Button {...updatedProps}>
          {updatedChild}
        </Button>
      )
      patch(vnode, updatedVnode)
      button = document.getElementById('id')
      text = button.textContent || button.innerText
      classList = button.classList
      classes = [
        'class1',
        'mdc-button--raised',
        'mdc-button--dense',
        'mdc-button--compact',
        'mdc-button--primary',
        'mdc-button--unelevated',
        'mdc-button--stroked',
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
      const vnode = (
        <Button {...props}>
          {child}
        </Button>
      )
      const container = document.getElementById('container')
      patch(container, vnode)
      const button = document.getElementById('id')
      button.click()
    })

    it("should build an 'mdc-button' with href", () => {
      const fn = function () {}
      const props = {
        key: 'link',
        id: 'id',
        href: 'http://www.google.de/',
        raised: true,
        dense: true,
        compact: true,
        primary: true,
        accent: true,
        unelevated: true,
        stroked: true,
        ripple: true,
        style: { 'margin-top': '50px' },
        classNames: ['class1'],
        class: { red: true },
        onClick: fn
      }
      const _props = {
        class: {
          class1: true,
          'mdc-button--raised': true,
          'mdc-button--dense': true,
          'mdc-button--compact': true,
          'mdc-button--primary': true,
          'mdc-button--accent': true,
          'mdc-button--unelevated': true,
          'mdc-button--stroked': true,
          red: true,
          f1cotxbe: true // first typestyle id
        },
        props: {
          raised: true,
          dense: true,
          compact: true,
          primary: true,
          accent: true,
          unelevated: true,
          stroked: true,
          href: 'http://www.google.de/',
          id_: 'id'
        },
        on: {
          click: fn
        }
      }
      const child = 'http://www.google.de/'
      const vnode = (
        <Button {...props}>
          {child}
        </Button>
      )

      expect(vnode.key).to.equal('link')
      expect(vnode.sel).to.equal('a#id.mdc-button')
      expect(vnode.children[0]).to.deep.equal({ text: 'http://www.google.de/' })
      expect(vnode.data.props).to.deep.equal(_props.props)
      expect(vnode.data.class).to.deep.equal(_props.class)
      expect(vnode.data.hook.insert).to.be.function()
      expect(vnode.data.hook.destroy).to.be.function()
      expect(vnode.data.hook.update).to.be.function()

      const container = document.getElementById('container')
      patch(container, vnode)
      let link = document.getElementById('id')
      let text = link.textContent || link.innerText
      let classList = link.classList
      let classes = ['class1', 'red', 'mdc-button', 'f1cotxbe']
      classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
      expect(link.id).to.equal('id')
      expect(link.href).to.equal('http://www.google.de/')
      expect(text).to.equal('http://www.google.de/')
      expect(link.tagName.toLowerCase()).to.equal('a')

      const updatedProps = {
        ...props,
        accent: false,
        href: 'http://www.google.com/'
      }
      const updatedChild = 'http://www.google.com/'
      const updatedVnode = (
        <Button {...updatedProps}>
          {updatedChild}
        </Button>
      )
      patch(vnode, updatedVnode)
      link = document.getElementById('id')
      text = link.textContent || link.innerText
      classList = link.classList
      classes = [
        'class1',
        'mdc-button--raised',
        'mdc-button--dense',
        'mdc-button--compact',
        'mdc-button--primary',
        'mdc-button--unelevated',
        'mdc-button--stroked',
        'red',
        'mdc-button',
        'f1cotxbe'
      ]
      classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
      expect(link.id).to.equal('id')
      expect(link.href).to.equal('http://www.google.com/')
      expect(text).to.equal('http://www.google.com/')

      const emptyVnode = {
        sel: undefined,
        data: {},
        children: [],
        text: undefined
      }
      patch(vnode, emptyVnode)
      link = document.getElementById('id')
      expect(link).to.equal(null)
    })

    it('should handle click events on href', done => {
      const fn = function () {
        done()
      }
      const props = { id: 'id', onClick: fn, href: 'http://www.google.de/' }
      const child = 'http://www.google.de/'
      const vnode = (
        <Button {...props}>
          {child}
        </Button>
      )
      const container = document.getElementById('container')
      patch(container, vnode)
      const button = document.getElementById('id')
      button.click()
    })
  })
}
