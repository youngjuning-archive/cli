#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const initConventional = require('./initConventional.js')

program.version(pkg.version, '-v, --version').description('又一个 Node Cli 工具')

program
  .command('initConventional')
  .description('初始化为符合Conventional Commits的项目')
  .action(() => initConventional())

program.parse(process.argv)
