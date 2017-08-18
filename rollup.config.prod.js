import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import progress from 'rollup-plugin-progress'
import rolluprc from './.rolluprc.json'

export default [
  {
    entry: rolluprc.entryConfig,
    targets: [
      { dest: pkg.module, format: 'es' },
      { dest: pkg.main, format: 'cjs' }
    ],
    plugins: [
      progress({ clearLine: false }),
      resolve(),
      babel(rolluprc.babelConfig)
    ],
    sourceMap: true,
    external: id => rolluprc.externalConfig.includes(id)
  }
]
