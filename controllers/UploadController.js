const { localUpload } = require('../uploaders/Local')
const { awsS3Upload } = require('../uploaders/S3')

exports.new = async (req, res) => {
  const data = await req.file()
  const url = await awsS3Upload(data.file)
  res.send(url)
}

exports.form = async (req, res) => {
  const text = `<form action="http://localhost:3333/upload/new" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>`
  res.type('text/html').send(text)
}
