const fastifyPlugin = require('fastify-plugin')

async function init (fastify, opts) {
  await fastify.register(require('fastify-express'))
  fastify.use(require('cors')())

  fastify.register(require('./middlewares'))
  fastify.register(require('../queues/workers'))
}

module.exports = fastifyPlugin(init)
