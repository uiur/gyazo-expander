'use strict'
const url = require('url')

module.exports = function gyazoIdFromUrl (str) {
  let parsedUrl

  try {
    parsedUrl = url.parse(str)
  } catch (e) {
    return
  }

  if (parsedUrl.host === 'gyazo.com' && (/^\/[0-9a-f]+$/).test(parsedUrl.path)) {
    return parsedUrl.path.slice(1)
  }
}
