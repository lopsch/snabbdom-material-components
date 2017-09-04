import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import progress from 'rollup-plugin-progress'
import eslint from 'rollup-plugin-eslint'
import rolluprc from './.rolluprc.json'

export default [
  {
    input: rolluprc.entryConfig,
    output: [{ file: pkg.main, format: 'cjs', sourcemap: false }],
    plugins: [
      progress({ clearLine: false }),
      eslint({ throwOnError: true, throwOnWarning: true }),
      babel(rolluprc.babelConfig),
      resolve(),
      commonjs()
    ]
  }
]
