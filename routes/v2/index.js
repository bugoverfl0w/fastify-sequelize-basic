module.exports = function (fastify, opts, next) {
  require('./user.route')(fastify, opts, next)
  require('./post.route')(fastify, opts, next)
}
