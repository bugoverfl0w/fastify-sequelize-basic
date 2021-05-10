import FastifyPlugin from 'fastify-plugin'
import { verifyToken } from 'hooks/Prehandler'

async function allRoutes (fastify, opts) {
  fastify.register((instance, opts, next) => {
    instance.addHook('preHandler', async (req, res) => {
      await verifyToken(req, res)
    })

    instance.register(require('./UserRoute'))
    instance.register(require('./PostRoute'))
    instance.register(require('./UploadRoute'))
    instance.register(require('./v2'), { prefix: '/v2' })

    next()
  })

  fastify.register(require('./PublicRoute'))
}

module.exports = FastifyPlugin(allRoutes)
