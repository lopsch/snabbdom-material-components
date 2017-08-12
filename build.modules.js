import spawn from 'cross-spawn'
// import fs from 'fs-extra'
// import path from 'path'

const modules = [
  'base',
  'button',
  'card',
  'checkbox',
  'dialog',
  'fab',
  'form-field',
  'grid-list',
  'icon',
  'icon-toggle',
  'input',
  'linear-progress',
  'radio',
  'ripple',
  'slider',
  'switch',
  'utils'
]

modules.forEach(module => {
  const inDir = `src/${module}`
  const outDir = `lib/${module}`
  // fs.mkdirSync(path.join(process.cwd(), `lib/${module}`))
  spawn.sync('babel', [inDir, '--out-dir', outDir], { stdio: 'inherit' })
})
