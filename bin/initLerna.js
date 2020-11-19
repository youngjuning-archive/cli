const chalk = require('chalk')
const path = require('path')
const ncp = require('ncp')
const shell = require('shelljs')

module.exports = async (name) => {
  const templateDir = path.resolve(__dirname, '../templates/lerna')
  const projectDir = `${process.cwd()}/${name}`
  shell.mkdir(name)
  shell.cd(projectDir)
  shell.exec(`git init && lerna init --independent`)
  ncp(templateDir, projectDir, async () => {
    try {
      shell.exec(`yarn install`)
    } catch (error) {
      shell.exec(`npm install`)
    }
    console.log(chalk.greenBright(`Initial Success!\nenjoy it`))
  })
}
