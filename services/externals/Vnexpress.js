const request = require('../../helpers/Request')

exports.getDetail = async (url) => {
  const html = await request.get(url)

  return html
}
