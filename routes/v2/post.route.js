const PostController = require('../../controllers/post.controller')

module.exports = function (fastify, opts, next) {
  fastify.get('/posts', PostController.all)
  fastify.get('/post/:id', PostController.get)
  fastify.post('/post/create', PostController.create)

  next()
}
