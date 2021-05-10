import LoginController from 'controllers/LoginController'
import UploadController from 'controllers/UploadController'

module.exports = function (fastify, opts, next) {
  fastify.get('/ping', async function (request, reply) {
    return 'pong'
  })

  fastify.post('/login', LoginController.login)
  fastify.get('/upload', UploadController.form)

  next()
}
