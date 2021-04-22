const UploadController = require('../controllers/Upload.controller')

module.exports = function (fastify, opts, next) {
  fastify.post('/upload/new', UploadController.new)

  next()
}
