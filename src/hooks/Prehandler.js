import { getToken, getTokenWithUser } from 'repos/TokenRepo'
import { ts } from 'helpers/String'
import { ERRORS } from 'configs/Constant'

exports.verifyToken = async (req, res) => {
  const reqToken = req.headers.token
  if (process.env.NODE_ENV === 'localhost') return true

  if (!reqToken) {
    res.code(401).send({
      status: false,
      message: ERRORS.NO_TOKEN.text,
      err_code: ERRORS.NO_TOKEN.code
    })
  }

  const token = await getToken({ token: reqToken })

  if (!token || token.expired_time < ts()) {
    res.code(401).send({
      status: false,
      message: ERRORS.INVALID_TOKEN.text,
      err_code: ERRORS.INVALID_TOKEN.code
    })
  }
}
