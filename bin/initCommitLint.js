const fs = require('fs')
const path = require('path')
const ncp = require('ncp')
const shell = require('shelljs')

module.exports = async () => {
  const templateDir = path.resolve(__dirname, '../templates/conventional')
  const projectDir = `${process.cwd()}`

  ncp(templateDir, projectDir, async () => {
    console.log('\n')
    const origin = JSON.parse(fs.readFileSync(`${projectDir}/package.json`, 'utf8'))

    const config = {
      ...origin,
      scripts: {
        ...origin.scripts,
        commit: 'git cz',
      },
      config: origin.config
        ? {
            ...origin.config,
            commitizen: {
              path: 'cz-customizable',
            },
          }
        : {
            commitizen: {
              path: 'cz-customizable',
            },
          },
      husky:
        origin.husky && origin.husky.hooks
          ? {
              ...origin.husky,
              hooks: {
                ...origin.husky.hooks,
                'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
              },
            }
          : {
              hooks: {
                'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
              },
            },
    }

    fs.writeFileSync(`${projectDir}/package.json`, JSON.stringify(config))
    shell.exec('yarn add commitizen cz-customizable @commitlint/cli commitlint-config-cz husky -D -W')
  })
}
