const UploadController = require('../controllers/upload.controller')

module.exports = function (fastify, opts, next) {
  fastify.post('/upload/new', UploadController.new)

  next()
}
