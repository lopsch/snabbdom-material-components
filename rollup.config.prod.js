import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import progress from 'rollup-plugin-progress'
import execute from 'rollup-plugin-execute'
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
      babel(rolluprc.babelConfig),
      execute('npm run build:modules')
      // execute('babel-node build.modules.js')
    ],
    sourceMap: true,
    external: id => rolluprc.externalConfig.includes(id)
  }
]
