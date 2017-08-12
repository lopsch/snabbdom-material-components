import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import execute from 'rollup-plugin-execute'
import rolluprc from './.rolluprc.json'

const babelConfigUMD = rolluprc.babelConfig
babelConfigUMD.exclude = []

export default [
  {
    entry: rolluprc.entryConfig,
    dest: pkg.browser,
    format: 'umd',
    moduleName: 'snabbdom-jsx-pragma',
    plugins: [
      progress({ clearLine: false }),
      resolve(),
      commonjs(),
      babel(babelConfigUMD),
      visualizer({ filename: './stats/index.html' })
    ],
    sourceMap: true
  },
  {
    entry: rolluprc.entryConfig,
    targets: [
      { dest: pkg.module, format: 'es' },
      { dest: pkg.main, format: 'cjs' }
    ],
    plugins: [
      progress({ clearLine: false }),
      babel(rolluprc.babelConfig),
      execute('babel src --out-dir lib')
      // execute('babel-node build.modules.js')
    ],
    sourceMap: true,
    external: id => rolluprc.externalConfig.includes(id)
  }
]
