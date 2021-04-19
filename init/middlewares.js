const fastifyPlugin = require('fastify-plugin')
const { LIMIT } = require('../configs/constant')

async function loadMiddleWares (fastify, opts) {
  fastify.register(require('fastify-formbody'))
  fastify.register(require('fastify-helmet'), { contentSecurityPolicy: false })
  fastify.register(require('fastify-multipart'), { limits: { fileSize: LIMIT.UPLOAD.SIZE } })
  fastify.register(require('fastify-compress'), { threshold: 1024 })
  fastify.register(require('fastify-rate-limit'), { max: LIMIT.REQUEST.NUMBER, timeWindow: LIMIT.REQUEST.TIME_RANGE })
}

module.exports = fastifyPlugin(loadMiddleWares)
