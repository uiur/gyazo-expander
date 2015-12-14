const url = require('url')
setTimeout(() => {
  Array.from(document.querySelectorAll('a')).forEach((el) => {
    const href = el.getAttribute('href')
    let parsedUrl

    try {
      parsedUrl = url.parse(href)
    } catch (e) {
      return
    }

    if (parsedUrl.host === 'gyazo.com' && (/^\/[0-9a-f]+$/).test(parsedUrl.path)) {
      const imageUrl = href + '.png'
      el.insertAdjacentHTML('afterend', `<img src=${ imageUrl } />`)
    }
  })
}, 5000)
