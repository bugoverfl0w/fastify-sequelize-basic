const configs = require('../configs/env')
const asyncRedis = require('async-redis')

const redisUri = configs.redis.uri ? configs.redis.uri : 'localhost:6379'
const redis = asyncRedis.createClient(`redis://${redisUri}/0`, { prefix: configs.redis.prefix })

module.exports = {
  redis
}
