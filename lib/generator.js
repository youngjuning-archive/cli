const fs = require('fs')
const handlebars = require('handlebars')
const recursive = require('recursive-readdir')

const compile = (meta, file) => {
  const content = fs.readFileSync(file).toString()
  const result = handlebars.compile(content)(meta)
  fs.writeFileSync(file, result)
}

module.exports = (meta, src) => {
  recursive(src, (err, files) => {
    files.forEach(file => {
      compile(meta, file)
    })
  })
}
