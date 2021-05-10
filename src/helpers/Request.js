import request from 'request'

exports.get = async (url, headers = {}, json = false) => {
  return new Promise(async (resolve, reject) => {
    headers = Object.keys(headers).length == 0 ? {} : headers

    const options = {
      uri: url,
      method: 'GET',
      headers: headers
    }

    if (json !== false) options.json = json

    request(options, function (error, response, body) {
      if (error) { resolve(false) } else { resolve(body) }
    })
  })
}

exports.post = async (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    headers = Object.keys(headers).length == 0 ? {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    } : headers

    const options = {
      uri: url,
      method: 'POST',
      form: data,
      headers: headers,
      timeout: 5000
    }

    request(options, function (error, response, body) {
      if (error) { resolve(false) } else { resolve(body) }
    })
  })
}

exports.putJson = async (url, json = {}) => {
  return new Promise((resolve, reject) => {
    const options = {
      uri: url,
      method: 'PUT',
      json: json,
      headers: {
        'content-type': 'application/json'
      },
      timeout: 5000
    }

    request(options, function (error, response, body) {
      if (error) { resolve(false) } else { resolve(body) }
    })
  })
}
