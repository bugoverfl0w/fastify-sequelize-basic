import UploadController from 'controllers/UploadController'

module.exports = function (fastify, opts, next) {
  fastify.post('/upload/new', UploadController.new)

  next()
}
