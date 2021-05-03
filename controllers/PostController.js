import { getPosts, getPost, createPost } from 'repos/PostRepo'

exports.all = async (req, res) => {
  const Posts = await getPosts()
  res.send(Posts)
}

exports.create = async (req, res) => {
  const post = await createPost({
    title: 'this is blog ',
    content: 'content',
    user_id: 1
  })

  res.send(post)
}

exports.get = async (req, res) => {
  const post = await getPost(req.params.id)
  res.send(post)
}
