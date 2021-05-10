import { CACHE } from 'configs/Constant'
import { get, putJson } from 'helpers/Request'
import { es_host as ES_HOST } from 'configs/Env'
import { removeSpecialChars } from 'helpers/String'

exports.findItem = async (id) => {
  const url = `${ES_HOST}_doc/${id}`
  const data = await get(url)
  console.log(url, data)
  return JSON.parse(data)
}

exports.addItem = async (id, name) => {
  const url = `${ES_HOST}_doc/${id}`
  const data = await putJson(url, { name: name, id: id })
  return data
}

exports.searchItems = async (text) => {
  text = removeSpecialChars(text)
  const query = {
    query: {
      match: {
        name: {
          query: text
        }
      }
    },
    from: 0,
    size: 30
  }

  const url = `${ES_HOST}_search`
  const data = await get(url, { 'content-type': 'application/json' }, query)
  return data.hits.hits
}

exports.lastItem = async (text) => {
  const query = {
    sort: [{
      id: {
        order: 'desc'
      }
    }
    ],
    size: 1
  }

  const url = `${ES_HOST}_search`
  let data = await get(url, { 'content-type': 'application/json' }, query)
  data = data.hits.hits
  return data.length == 0 ? 0 : data[0]._source.id
}
