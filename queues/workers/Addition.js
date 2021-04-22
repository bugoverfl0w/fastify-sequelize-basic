const Queue = require('../Bee')

module.exports = function (fastify, opts, next) {
  const addQueue = new Queue('addition')
  addQueue.process(async (job) => {
    console.log(`Processing job ${job.id}`)
    return job.data.x + job.data.y
  })
  next()
}
