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

  const isGyazoUrl = !!gyazoIdFromUrl(href)
  const hasChildren = el.children.length > 0
  if (isGyazoUrl && !hasChildren) {
    const imageUrl = href + '.png'
    el.insertAdjacentHTML('afterend', `<p><a href=${ href } target="_blank"><img src=${ imageUrl } /></p></a>`)
  }
})
