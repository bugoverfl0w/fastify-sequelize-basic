import { User, Post } from 'models'
import { UserRedis } from 'cache/redis'
import { CACHE } from 'configs/Constant'

exports.getUsers = async () => {
  let users = await UserRedis.getUsers(true)
  if (users) {
    return users
  }

  users = await User.findAll()
  await UserRedis.setUsers(users, CACHE.MINUTE(30), true)

  return users
}

exports.getUser = async (id) => {
  return (await User.findByPk(id, {
    include: [{
      model: Post,
      as: 'posts'
    }]
  }))
}

exports.getUserByConditions = async (conditions) => {
  return (await User.findOne({ where: conditions }))
}

exports.createUser = async (data) => {
  return (await User.create(data))
}
