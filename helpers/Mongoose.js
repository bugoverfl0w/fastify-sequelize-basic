const mongoose = require('mongoose')
const env = require('../configs/Db')

module.exports = function (fastify, opts, next) {
  mongoose.connect(env[process.env.NODE_ENV].mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true })
  next()
}
