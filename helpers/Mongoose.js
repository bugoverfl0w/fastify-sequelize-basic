import mongoose from 'mongoose'
import env from 'configs/Db'

module.exports = function (fastify, opts, next) {
  mongoose.connect(env[process.env.NODE_ENV].mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true })
  next()
}
