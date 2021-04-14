const { uploader } = require('../configs/env')
const { upload } = require('../services/aws.s3')

exports.awsS3Upload = async (fileStream) => {
  const url = await upload(fileStream)
  return url
}
