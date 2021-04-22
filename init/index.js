const fastifyPlugin = require('fastify-plugin')

async function init (fastify, opts) {
  fastify.register(require('../helpers/Mongoose'))

  await fastify.register(require('fastify-express'))
  fastify.use(require('cors')())

  fastify.register(require('./Middlewares'))
  fastify.register(require('../queues/workers'))
}

module.exports = fastifyPlugin(init)
