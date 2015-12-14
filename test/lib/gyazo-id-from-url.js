const test = require('ava')
const gyazoIdFromUrl = require('../../src/lib/gyazo-id-from-url')

test((t) => {
  t.true(gyazoIdFromUrl('https://gyazo.com/79a3a0f0544d132fe9d1a5ed5612d1b4') === '79a3a0f0544d132fe9d1a5ed5612d1b4')
  t.true(gyazoIdFromUrl('https://nota.gyazo.com/47f75eaa863e63dd2808109d01866ea5') === '47f75eaa863e63dd2808109d01866ea5')

  t.true(gyazoIdFromUrl('https://google.com/hoge') === undefined)
  t.true(gyazoIdFromUrl('not url') === undefined)
})
