import { redis } from 'cache'

const KEYS = {
  ALL_POSTS: 'get_all_posts',
  POST: (id) => {
    return `post_${id}`
  }
}

const getPosts = async (parse = false) => {
  const data = await redis.get(KEYS.ALL_POSTS)
  return parse ? JSON.parse(data) : data
}

const setPosts = async (posts, seconds = 900, encode = false) => {
  posts = encode ? JSON.stringify(posts) : posts
  return await redis.set(KEYS.ALL_POSTS, posts, 'EX', seconds)
}

module.exports = {
  getPosts,
  setPosts
}
