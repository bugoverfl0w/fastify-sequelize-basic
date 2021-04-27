const LoginController = require('../controllers/LoginController')
const UploadController = require('../controllers/UploadController')

module.exports = function (fastify, opts, next) {
  fastify.get('/ping', async function (request, reply) {
    return 'pong'
  })

  fastify.post('/login', LoginController.login)
  fastify.get('/upload', UploadController.form)

  next()
}
