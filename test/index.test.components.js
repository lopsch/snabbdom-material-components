/* eslint-env mocha */
// import chalk from 'chalk'
import chai, { expect } from 'chai'
import assertarrays from 'chai-arrays'
import asserttype from 'chai-asserttype'
import { JSDOM } from 'jsdom'
import { init } from 'snabbdom'
import classModule from 'snabbdom/modules/class'
import propsModule from 'snabbdom/modules/props'
import attrsModule from 'snabbdom/modules/attributes'
import styleModule from 'snabbdom/modules/style'
import datasetModule from 'snabbdom/modules/dataset'
import eventlistenersModule from 'snabbdom/modules/eventlisteners'
import buttonTest from './button'
import fabTest from './fab'
import checkboxTest from './checkbox'
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

buttonTest(expect, patch)
fabTest(expect, patch)
checkboxTest(expect, patch)
