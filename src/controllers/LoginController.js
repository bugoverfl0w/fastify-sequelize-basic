import { getUserByConditions } from 'repos/UserRepo'
import { createToken } from 'repos/TokenRepo'
import { ts, randomString } from 'helpers/String'

exports.login = async (req, res) => {
  const user = await getUserByConditions({
    name: req.body.name,
    password: req.body.password
  })

  if (!user) {
    res.send({
      status: false,
      message: 'invalid user'
    })

    return
  }

  console.log('dis')
  const token = await createToken({
    token: randomString(),
    user_id: user.id,
    created_time: ts(),
    expired_time: ts() + 7 * 24 * 3600
  })

  res.send({
    status: true,
    token: token,
    user: user
  })
}
