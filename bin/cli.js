#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
const initCommitLint = require('./initCommitLint.js')
const initReactJest = require('./initReactJest.js')
const initReactNativeJest = require('./initReactNativeJest.js')
const initLerna = require('./initLerna.js')

program.version(pkg.version, '-v, --version').description('又一个 Node Cli 工具')

program
  .command('init-commitlint')
  .description('初始化为符合Conventional Commits的项目')
  .action(() => initCommitLint())

program
  .command('init-react-jest')
  .description('让 React 项目接入 Jest 最佳实践')
  .action(() => initReactJest())

program
  .command('init-rn-jest')
  .description('让 React Native 项目接入 Jest 最佳实践')
  .action(() => initReactNativeJest())

program
  .command('init-lerna <name>')
  .description('lerna 最佳实践')
  .action((name) => {
    initLerna(name)
  })

program.parse(process.argv)
