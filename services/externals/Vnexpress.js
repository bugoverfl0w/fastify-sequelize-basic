import request from 'helpers/Request'

exports.getDetail = async (url) => {
  const html = await request.get(url)

  return html
}
