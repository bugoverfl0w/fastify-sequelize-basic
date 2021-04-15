const { getToken, getTokenWithUser } = require('../repos/token.repo')
const { ts } = require('../helpers/string')
const { NO_TOKEN, INVALID_TOKEN } = require('../configs/constant').ERRORS

exports.verifyToken = async (req, res) => {
  const reqToken = req.headers.token
  if (process.env.NODE_ENV === 'localhost' && false) return true

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
}
