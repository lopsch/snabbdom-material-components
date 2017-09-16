import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import progress from 'rollup-plugin-progress'
import eslint from 'rollup-plugin-eslint'
import minify from 'rollup-plugin-babel-minify'
import rolluprc from './.rolluprc.json'

export default [
  {
    input: rolluprc.entryConfig,
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'snabbdom-material-components',
        sourcemap: true
      }
    ],
    plugins: [
      progress({ clearLine: false }),
      eslint({ throwOnError: true, throwOnWarning: true }),
      babel(rolluprc.babelConfig),
      resolve(),
      commonjs()
    ]
  },
  {
    input: rolluprc.entryConfig,
    output: [
      {
        file: pkg.min,
        format: 'umd',
        name: 'snabbdom-material-components',
        sourcemap: true
      }
    ],
    plugins: [
      progress({ clearLine: false }),
      eslint({ throwOnError: true, throwOnWarning: true }),
      babel(rolluprc.babelConfig),
      resolve(),
      commonjs(),
      minify({ comments: false, removeConsole: true, removeDebugger: true })
    ]
  },
  {
    input: rolluprc.entryConfig,
    output: [
      { file: pkg.module, format: 'es', sourcemap: true },
      { file: pkg.main, format: 'cjs', sourcemap: true }
    ],
    plugins: [
      progress({ clearLine: false }),
      eslint({ throwOnError: true, throwOnWarning: true }),
      babel(rolluprc.babelConfig),
      resolve()
    ],
    external: id => rolluprc.externalConfig.find(ext => id.includes(ext))
  }
]
