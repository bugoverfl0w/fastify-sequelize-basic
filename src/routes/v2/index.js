module.exports = function (fastify, opts, next) {
  require('./UserRoute')(fastify, opts, next)
  require('./PostRoute')(fastify, opts, next)
  next()
}
