exports.ts = () => {
  return Math.round((new Date()).getTime() / 1000)
}

exports.randomString = (max = 20) => {
  return Math.random().toString(36).substr(2, max)
}

exports.removeSpecialChars = (str) => {
  return str.replace(/[^a-zA-Z0-9]/g, '')
}
