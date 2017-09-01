/* eslint-env mocha */
/* eslint-disable no-unused-vars */
import html from 'snabbdom-jsx-pragma'
/* eslint-enable no-unused-vars */
import { Fab } from '../../lib'

export default function test (expect, patch) {
  describe('class Fab()', () => {
    it("should build an 'mdc-fab'", () => {
      const fn = function () {}
      const props = {
        key: 'fab',
        id: 'id',
        name: 'name',
        label: 'fab',
        mini: true,
        plain: true,
        disabled: true,
        ripple: true,
        style: { 'margin-top': '50px' },
        classNames: ['class1'],
        class: { red: true },
        onClick: fn
      }
      const _props = {
        class: {
          class1: true,
          'mdc-fab--mini': true,
          'mdc-fab--plain': true,
          red: true,
          f1cotxbe: true // first typestyle id
        },
        props: {
          mini: true,
          plain: true,
          disabled: true,
          name: 'name',
          id_: 'id'
        },
        attrs: {
          'aria-label': 'fab'
        },
        on: {
          click: fn
        }
      }

      const child = 'fab'
      const vnode = (
        <Fab {...props}>
          {child}
        </Fab>
      )

      expect(vnode.key).to.equal('fab')
      expect(vnode.sel).to.equal('button#id.mdc-fab')
      expect(vnode.children[0]).to.deep.equal({ text: 'fab' })
      expect(vnode.data.props).to.deep.equal(_props.props)
      expect(vnode.data.class).to.deep.equal(_props.class)
      expect(vnode.data.on).to.deep.equal(_props.on)
      expect(vnode.data.attrs).to.deep.equal(_props.attrs)
      expect(vnode.data.hook.insert).to.be.function()
      expect(vnode.data.hook.destroy).to.be.function()
      expect(vnode.data.hook.update).to.be.function()

      const container = document.getElementById('container')
      patch(container, vnode)
      let fab = document.getElementById('id')
      let text = fab.textContent || fab.innerText
      let classList = fab.classList
      let classes = [
        'class1',
        'mdc-fab--mini',
        'mdc-fab--plain',
        'red',
        'mdc-fab',
        'f1cotxbe'
      ]
      classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
      expect(fab.id).to.equal('id')
      expect(fab.name).to.equal('name')
      expect(fab.disabled).to.equal(true)
      expect(text).to.equal('fab')
      expect(fab.tagName.toLowerCase()).to.equal('button')

      const updatedProps = {
        ...props,
        mini: false,
        disabled: false
      }
      const updatedChild = 'fab updated'
      const updatedVnode = (
        <Fab {...updatedProps}>
          {updatedChild}
        </Fab>
      )
      patch(vnode, updatedVnode)
      fab = document.getElementById('id')
      text = fab.textContent || fab.innerText
      classList = fab.classList
      classes = ['class1', 'mdc-fab--plain', 'red', 'mdc-fab', 'f1cotxbe']
      classes.forEach(clazz => expect(classList.contains(clazz)).to.equal(true))
      expect(fab.id).to.equal('id')
      expect(fab.name).to.equal('name')
      expect(fab.disabled).to.equal(false)
      expect(text).to.equal('fab updated')

      const emptyVnode = {
        sel: undefined,
        data: {},
        children: [],
        text: undefined
      }
      patch(vnode, emptyVnode)
      fab = document.getElementById('id')
      expect(fab).to.equal(null)
    })
  })

  describe('class Fab.FontAwesome()', () => {
    it("should build an 'mdc-fab__icon'", () => {})
  })

  describe('class Fab.Material()', () => {
    it("should build an 'mdc-fab__icon material-icons'", () => {})
  })
}
