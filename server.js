import FastifyServer from 'fastify'
import init from 'init'
import routes from 'routes'

const fastify = FastifyServer({ logger: true })

const PORT = process.env.PORT || 3000

const server = async () => {
  fastify.register(init)
  fastify.register(routes)

  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (e) {
    fastify.log.error(e)
    process.exit(1)
  }
}

module.exports = server
