import Benchmark from 'benchmark'
import { PropsNormalizer } from '../src/utils'

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

const normalizeSuite = new Benchmark.Suite()
normalizeSuite
  .add('class PropsNormalizer', function () {
    return new PropsNormalizer(_props, _switches).normalized
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({})
