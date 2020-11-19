const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const ncp = require('ncp')
const shell = require('shelljs')

const success = chalk.greenBright

module.exports = async () => {
  const templateDir = path.resolve(__dirname, '../templates/react-jest')
  const projectDir = `${process.cwd()}`
  ncp(templateDir, projectDir, async () => {
    console.log('\n')
    const origin = JSON.parse(fs.readFileSync(`${projectDir}/package.json`, 'utf8'))

    const config = {
      ...origin,
      scripts: {
        ...origin.scripts,
        test: 'jest',
      },
    }
    fs.writeFileSync(`${projectDir}/package.json`, JSON.stringify(config))

    shell.exec('yarn add jest babel-jest @babel/preset-env @babel/preset-react enzyme enzyme-adapter-react-16 enzyme-to-json @types/enzyme @types/jest @types/react -D -W')
    console.log(success('请添加 @babel/preset-env @babel/preset-react 到 babel presets 中'))
  })
}
