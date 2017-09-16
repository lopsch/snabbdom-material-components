/* eslint-env mocha */
import chai, { expect } from 'chai'
import asserttype from 'chai-asserttype'
import assertarrays from 'chai-arrays'
import { ClassesExtractor, makeHooks, SMCAdapter } from '../../lib'

chai.use(asserttype)
chai.use(assertarrays)

export default function test () {
  describe('class ClassesExtractor', () => {
    it('should extract classes', () => {
      const _props = {
        style: {
          'margin-top': '50px'
        },
        class: {
          bottom: true,
          left: false
        },
        classNames: ['class1', 'class2 class3', ['class4', 'class5 class6']],
        type: 'button',
        red: true,
        blue: true
      }

      const _switches = {
        red: 'classRed',
        yellow: 'classYellow',
        blue: 'classBlue'
      }

      const { classes, classNames } = new ClassesExtractor(
        _props,
        _switches
      ).extracted

      expect(classes).to.deep.equal({
        bottom: true,
        left: false,
        classRed: true,
        classYellow: false,
        classBlue: true
      })
      expect(classNames).to.be.equalTo([
        'class1',
        'class2',
        'class3',
        'class4',
        'class5',
        'class6'
      ])
    })
  })

  describe('makeHooks()', () => {
    it("should make hook 'object'", () => {
      const MyAdapter = class MyAdapter extends SMCAdapter {
        constructor ({ sel }) {
          super(sel)
        }
      }

      const hooks = makeHooks(MyAdapter)
      const vnode = { data: { hook: hooks }, sel: 'myadapter' }
      expect(vnode)
        .with.deep.nested.property('data.hook.insert')
        .to.be.function()
      expect(vnode)
        .with.deep.nested.property('data.hook.destroy')
        .to.be.function()
      expect(vnode)
        .with.deep.nested.property('data.hook.update')
        .to.be.function()
    })
  })
}
