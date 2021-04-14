const { getToken } = require('../repos/token.repo')
const { ts } = require('../helpers/string')
const { NO_TOKEN, INVALID_TOKEN } = require('../configs/constant').ERRORS
// const { tracer, opentracing } = require('../helpers/logger.jaeger')

exports.verifyToken = async (req, res) => {
  /*
  const span = tracer.startSpan('http_request')
  span.addTags({
    [opentracing.Tags.SPAN_KIND]: opentracing.Tags.SPAN_KIND_MESSAGING_PRODUCER,
    [opentracing.Tags.HTTP_METHOD]: req.method,
    [opentracing.Tags.HTTP_URL]: req.url
  })
  span.setTag(opentracing.Tags.HTTP_STATUS_CODE, res.statusCode)
  */

  const reqToken = req.headers.token
  if (process.env.NODE_ENV === 'localhost') return true

  if (!reqToken) {
    res.code(401).send({
      status: false,
      message: NO_TOKEN.text,
      err_code: NO_TOKEN.code
    })
  }

  const token = await getToken({ token: reqToken })

  if (!token || token.expired_time < ts()) {
    res.code(401).send({
      status: false,
      message: INVALID_TOKEN.text,
      err_code: INVALID_TOKEN.code
    })
  }

  // span.finish()
  // req.span = span

  // assign something to req object here
  // req.token = token; // then try to print on controller handler
  // let tokenWithUser = await getTokenWithUser({ token: reqToken });
  // req.tokenWithUser = tokenWithUser;
}
