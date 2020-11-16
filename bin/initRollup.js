const path = require('path')
const ncp = require('ncp')
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora')
const generator = require('../lib/generator.js')

const error = chalk.red
const warning = chalk.keyword('orange')
const success = chalk.greenBright

module.exports = async projectName => {
  const templateDir = path.resolve(__dirname, '../template/rollup')
  const projectDir = `${process.cwd()}/${projectName}`

  const answers = await inquirer.prompt([
    {
      type: 'version',
      message: '初始版本',
      name: 'version',
      default: '0.0.0',
    },
    {
      type: 'description',
      message: '请输入插件描述',
      name: 'description',
    },
    {
      type: 'author',
      message: '请输入作者姓名',
      name: 'author',
      validate: input => {
        if (/[/\\]/im.test(input)) {
          console.log(` ${error('姓名不能包含特殊字符')}`)
          return false
        }
        return true
      },
    },
    {
      type: 'url',
      message: '请输入作者博客链接',
      name: 'url',
    },
    {
      type: 'email',
      message: '请输入作者邮箱',
      name: 'email',
    },
  ])
  const spinner = ora(warning('项目创建中'))
  spinner.start()
  ncp(templateDir, projectDir, async err => {
    await generator(
      {
        name: projectName,
        ...answers,
      },
      projectDir
    )
    console.log('\r')
    spinner.succeed(success('项目创建成功'))
    spinner.info(`${success(`Now you can start project with`)} cd ${projectName} && yarn install`)
  })
}
