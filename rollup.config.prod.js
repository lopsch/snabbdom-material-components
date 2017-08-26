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
      resolve(),
      commonjs(),
      babel(rolluprc.babelConfig)
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
      resolve(),
      commonjs(),
      babel(rolluprc.babelConfig),
      minify()
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
      resolve(),
      babel(rolluprc.babelConfig)
    ],
    external: id => rolluprc.externalConfig.includes(id)
  }
]
