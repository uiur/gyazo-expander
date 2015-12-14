const gyazoIdFromUrl = require('./lib/gyazo-id-from-url')

setTimeout(() => {
  Array.from(document.querySelectorAll('a')).forEach((el) => {
    const href = el.getAttribute('href')

    if (gyazoIdFromUrl(href)) {
      const imageUrl = href + '.png'
      el.insertAdjacentHTML('afterend', `<img src=${ imageUrl } />`)
    }
  })
}, 5000)
