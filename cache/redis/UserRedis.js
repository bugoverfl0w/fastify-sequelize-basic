const { redis } = require('../')

const KEYS = {
  ALL_USERS: 'get_all_users'
}

const getUsers = async (parse = false) => {
  const data = await redis.get(KEYS.ALL_USERS)
  return parse ? JSON.parse(data) : data
}

const setUsers = async (users, seconds = 900, encode = false) => {
  users = encode ? JSON.stringify(users) : users
  return await redis.set(KEYS.ALL_USERS, users, 'EX', seconds)
}

module.exports = {
  getUsers,
  setUsers
}
