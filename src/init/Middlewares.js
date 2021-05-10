import FastifyPlugin from 'fastify-plugin'
import FastifyFormbody from 'fastify-formbody'
import FastifyHelmet from 'fastify-helmet'
import FastifyMultipart from 'fastify-multipart'
import FastifyCompress from 'fastify-compress'
import FastifyRateLimit from 'fastify-rate-limit'
import { LIMIT } from 'configs/Constant'

async function loadMiddleWares (fastify, opts) {
  fastify.register(FastifyFormbody)
  fastify.register(FastifyHelmet, { contentSecurityPolicy: false })
  fastify.register(FastifyMultipart, { limits: { fileSize: LIMIT.UPLOAD.SIZE } })
  fastify.register(FastifyCompress, { threshold: 1024 })
  fastify.register(FastifyRateLimit, { max: LIMIT.REQUEST.NUMBER, timeWindow: LIMIT.REQUEST.TIME_RANGE })
}

module.exports = FastifyPlugin(loadMiddleWares)
