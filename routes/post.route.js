const PostController = require('../controllers/post.controller')

module.exports = function (fastify, opts, next) {
  fastify.all('/posts', PostController.all)
  fastify.get('/post/:id', PostController.get)
  fastify.post('/post/create', PostController.create)

  next()
}
