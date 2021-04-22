const { uploader } = require('../configs/Env')
const { upload } = require('../services/Aws.s3')

exports.awsS3Upload = async (fileStream) => {
  const url = await upload(fileStream)
  return url
}
