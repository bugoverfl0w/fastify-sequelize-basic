const initTracer = require('jaeger-client').initTracer
const opentracing = require('opentracing')
const { JAEGER } = require('../configs/Constant')

const config = {
  serviceName: JAEGER.SERVICE_NAME,
  reporter: {
    collectorEndpoint: JAEGER.COLLECTED_ENDPOINT,
    logSpans: true
  },
  sampler: {
    type: 'const',
    param: 1
  }
}
const options = {
  tags: {
    'my-awesome-service.version': '1.1.2'
  },
  logger: console
}
const tracer = initTracer(config, options)

module.exports = {
  tracer,
  opentracing
}
