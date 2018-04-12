#!/usr/bin/env node
const { spawnSync } = require('child_process')

function runCommand(command, options = []) {
  spawnSync(command, options, {
    stdio: 'inherit',
    shell: true,
  })
  process.exit(0)
}

// 获取命令的参数
const args = process.argv.slice(2)

const help = `
Commands List
---------------
start :webpack --config webpack/webpack.dll.js && webpack-dev-server --config webpack/webpack.dev.js
dll   :webpack --config webpack/webpack.dll.js
fix   :eslint src --ext .js,.vue --fix
build :webpack --config webpack/webpack.dll.js && webpack-dev-server --config webpack/webpack.prod.js
help  :show help
---------------
`

if (args.length) {
  const arg = args[0]
  switch (arg) {
    case '-h':
    case 'help':
      console.error(help)
      process.exitCode = 1
      break
    case 'start':
      runCommand('webpack --config webpack/webpack.dll.js && webpack-dev-server --config webpack/webpack.dev.js')
      break
    case 'dll':
      runCommand('webpack --config webpack/webpack.dll.js')
      break
    case 'fix':
      runCommand('eslint src --ext .js,.vue --fix')
      break
    case 'build':
      runCommand('webpack --config webpack/webpack.dll.js && webpack --config webpack/webpack.prod.js')
      break
    default:
      console.log('Bad command parameters！Run help to get help')
      process.exitCode = 1
  }
} else {
  console.log('Missing command parameters！Run help to get help')
  process.exitCode = 1
}