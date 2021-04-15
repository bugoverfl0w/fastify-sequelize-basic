const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 3000
const { verifyToken } = require('./hooks/prehandler')

const start = async () => {
  fastify.register(require('./init'))

  fastify.register((instance, opts, next) => {
    instance.addHook('preHandler', async (req, res) => {
      await verifyToken(req, res)
    })

    instance.register(require('./routes/user.route'))
    instance.register(require('./routes/post.route'))
    instance.register(require('./routes/upload.route'))
    instance.register(require('./routes/v2'), { prefix: '/v2' })

    next()
  })

  fastify.register(require('./routes/public.route'))

  /*
  fastify.addHook('onResponse', (request, reply, done) => {
    request.span.finish()
    done()
  })
  */

  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (e) {
    fastify.log.error(e)
    process.exit(1)
  }
}

module.exports = start
