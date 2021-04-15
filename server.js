const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 3000

const server = async () => {
  fastify.register(require('./init'))
  fastify.register(require('./routes'))

  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (e) {
    fastify.log.error(e)
    process.exit(1)
  }
}

module.exports = server
