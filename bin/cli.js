#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const initRollup = require('./initRollup.js')

program.version(pkg.version, '-v, --version').description('又一个 Node Cli 工具')

program
  .command('create <projectName>')
  .option('-t, --template <templateName>')
  .description('创建 veronica 模块')
  .action(async (projectName = 'business', options) => {
    if (options.template === 'rollup') {
      initRollup(projectName)
    } else {
      console.log('missing required option \'-t, --template <templateName>\'')
    }
  })

program.parse(process.argv)
