const initTracer = require('jaeger-client').initTracer
const opentracing = require('opentracing')

const config = {
  serviceName: 'local-jaeger',
  reporter: {
    collectorEndpoint: 'http://localhost:14268/api/traces',
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
