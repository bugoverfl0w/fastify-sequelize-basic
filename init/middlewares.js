const fastifyPlugin = require('fastify-plugin')

async function loadMiddleWares (fastify, opts) {
  fastify.register(require('fastify-formbody'))
  fastify.register(require('fastify-helmet'), { contentSecurityPolicy: false })
  fastify.register(require('fastify-multipart'), { limits: { fileSize: 102400000 } })
  fastify.register(require('fastify-compress'), { threshold: 1024 })
  fastify.register(require('fastify-rate-limit'), { max: 10, timeWindow: '1 second' })
}

module.exports = fastifyPlugin(loadMiddleWares)
