import { uploader } from 'configs/Env'
import { upload } from 'services/AwsS3'

exports.awsS3Upload = async (fileStream) => {
  const url = await upload(fileStream)
  return url
}
