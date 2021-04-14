const UserController = require('../../controllers/user.controller')

module.exports = function (fastify, opts, next) {
  fastify.get('/users', UserController.all)
  fastify.get('/user/:id', UserController.get)
  fastify.post('/user/:id', UserController.get)
  fastify.post('/user/create', UserController.create)

  next()
}
