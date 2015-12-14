'use strict'
const url = require('url')

module.exports = function gyazoIdFromUrl (str) {
  let parsedUrl

  try {
    parsedUrl = url.parse(str)
  } catch (e) {
    return
  }

  if ((/^(.+\.)?gyazo\.com$/).test(parsedUrl.host) && (/^\/[0-9a-f]+$/).test(parsedUrl.path)) {
    return parsedUrl.path.slice(1)
  }
}
