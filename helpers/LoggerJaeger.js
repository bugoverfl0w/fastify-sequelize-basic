import tracerClient from 'jaeger-client'
import opentracing from 'opentracing'
import { JAEGER } from 'configs/Constant'

const initTracer = tracerClient.initTracer

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
