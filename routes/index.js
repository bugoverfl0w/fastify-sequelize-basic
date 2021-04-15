const fastifyPlugin = require('fastify-plugin')
const { verifyToken } = require('../hooks/prehandler')

async function allRoutes (fastify, opts) {
  fastify.register((instance, opts, next) => {
    instance.addHook('preHandler', async (req, res) => {
      await verifyToken(req, res)
    })

    instance.register(require('./user.route'))
    instance.register(require('./post.route'))
    instance.register(require('./upload.route'))
    instance.register(require('./v2'), { prefix: '/v2' })

    next()
  })

  fastify.register(require('./public.route'))
}

module.exports = fastifyPlugin(allRoutes)
