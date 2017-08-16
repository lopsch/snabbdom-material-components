/* eslint-env mocha */
import chai, { expect } from 'chai'
import asserttype from 'chai-asserttype'
import {
  PropsNormalizer,
  makeSelector,
  makeKeyValue,
  uuid,
  makeHooks,
  SMCAdapter
} from '../../lib'

chai.use(asserttype)

describe('class PropsNormalizer', () => {
  it('should sanitize props and classes', () => {
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

    const { props, classes } = new PropsNormalizer(_props, _switches).normalized
    expect(props).to.deep.equal({ type: 'button', red: true, blue: true })
    const {
      bottom,
      left,
      class1,
      class2,
      class3,
      class4,
      class5,
      class6,
      classRed,
      classYellow,
      classBlue,
      ...style
    } = classes
    expect(bottom).to.equal(true)
    expect(left).to.equal(false)
    expect(class1).to.equal(true)
    expect(class2).to.equal(true)
    expect(class3).to.equal(true)
    expect(class4).to.equal(true)
    expect(class5).to.equal(true)
    expect(class6).to.equal(true)
    expect(classRed).to.equal(true)
    expect(classYellow).to.equal(false)
    expect(classBlue).to.equal(true)
    Object.keys(style).forEach(key => expect(style[key]).to.equal(true))
  })
})

describe('makeSelector()', () => {
  it("should make an 'object' with 'key' ('selector') and 'value' ('#<id>')", () => {
    expect(makeSelector()).to.deep.equal({})
    expect(makeSelector('id')).to.deep.equal({ selector: '#id' })
  })
})

describe('makeKeyValue()', () => {
  it("should make an 'object' with 'key' and 'value'", () => {
    expect(makeKeyValue()).to.deep.equal({})
    expect(makeKeyValue('type', 'button')).to.deep.equal({ type: 'button' })
  })
})

describe('uuid()', () => {
  it('should generate a UUID', () => {
    const regEx = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[8-9a-b]{1}[0-9a-f]{3}-[0-9a-f]{12}$/g
    const _uuid = uuid()
    expect(regEx.test(_uuid)).to.equal(true)
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
    expect(vnode).with.deep.nested.property('data.hook.insert').to.be.function()
    expect(vnode).with.deep.nested
      .property('data.hook.destroy')
      .to.be.function()
    expect(vnode).with.deep.nested.property('data.hook.update').to.be.function()
  })
})
