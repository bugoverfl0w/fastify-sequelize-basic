import { getUsers, getUser, createUser } from 'repos/UserRepo'

exports.all = async (req, res) => {
  const users = await getUsers()
  res.send(users)
}

exports.create = async (req, res) => {
  const user = await createUser({
    name: 'dis',
    password: 'hehe'
  })

  res.send(user)
}

exports.get = async (req, res) => {
  const user = await getUser(req.params.id)
  res.send(user)
}
