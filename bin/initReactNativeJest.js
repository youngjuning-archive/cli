const fs = require('fs')
const path = require('path')
const ncp = require('ncp')
const shell = require('shelljs')

module.exports = async () => {
  const templateDir = path.resolve(__dirname, '../templates/rn-jest')
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
    shell.exec('yarn add jest babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json  react-native-mock-render @types/enzyme @types/jest @types/react @types/react-native -D -W')
  })
}
