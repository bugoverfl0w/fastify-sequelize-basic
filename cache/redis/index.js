const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

const objects = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const obj = require(path.join(__dirname, file))
    const key = file.replace(/.js$/g, '')
      .split('.')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    objects[key] = obj
  })

module.exports = objects
