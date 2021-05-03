import fs from 'fs'
import path from 'path'

const basename = path.basename(__filename)

const files = []

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && file !== 'index.js' && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    files.push(require(path.join(__dirname, file.replace('.js', ''))))
  })

module.exports = function (fastify, opts, next) {
  files.forEach(function (item) {
    item(fastify, opts, next)
  })

  next()
}
