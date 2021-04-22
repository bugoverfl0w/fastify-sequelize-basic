const fastifyPlugin = require('fastify-plugin')
const { verifyToken } = require('../hooks/Prehandler')

async function allRoutes (fastify, opts) {
  fastify.register((instance, opts, next) => {
    instance.addHook('preHandler', async (req, res) => {
      await verifyToken(req, res)
    })

    instance.register(require('./User.route'))
    instance.register(require('./Post.route'))
    instance.register(require('./Upload.route'))
    instance.register(require('./v2'), { prefix: '/v2' })

    next()
  })

  fastify.register(require('./Public.route'))
}

module.exports = fastifyPlugin(allRoutes)
