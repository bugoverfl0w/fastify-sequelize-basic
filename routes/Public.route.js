const LoginController = require('../controllers/Login.controller')
const UploadController = require('../controllers/Upload.controller')

module.exports = function (fastify, opts, next) {
  fastify.get('/ping', async function (request, reply) {
    return 'pong'
  })

  fastify.post('/login', LoginController.login)
  fastify.get('/upload', UploadController.form)

  next()
}
