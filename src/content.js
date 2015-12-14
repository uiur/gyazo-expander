const gyazoIdFromUrl = require('./lib/gyazo-id-from-url')

function onNewElement (cb) {
  setInterval(() => {
    Array.from(document.querySelectorAll('a')).forEach((el) => {
      if (!el.getAttribute('data-gyazo-id')) {
        el.setAttribute('data-gyazo-id', 'checked')
        cb(el)
      }
    })
  }, 1000)
}

onNewElement((el) => {
  const href = el.getAttribute('href')

  if (gyazoIdFromUrl(href)) {
    const imageUrl = href + '.png'
    el.insertAdjacentHTML('afterend', `<img src=${ imageUrl } />`)
  }
})
