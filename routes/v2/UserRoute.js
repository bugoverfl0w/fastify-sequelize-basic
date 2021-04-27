const UserController = require('../../controllers/UserController')

module.exports = function (fastify, opts, next) {
  fastify.get('/users', UserController.all)
  fastify.get('/user/:id', UserController.get)
  fastify.post('/user/:id', UserController.get)
  fastify.post('/user/create', UserController.create)

  next()
}
