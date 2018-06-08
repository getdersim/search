const algoliasearch = require('algoliasearch');
const client = algoliasearch('W69XAGVDFM', 'ee09f84e8fc1021b9336fd5d5e6d246c')
const ALGOLIA_INDEX_NAME = 'documents'
const index = client.initIndex(ALGOLIA_INDEX_NAME)

const moment = require('moment')
moment.locale('tr')

index.searchCacheEnabled = true
index.searchCacheExpiringTimeInterval = 300

module.exports = options => {
  return new Promise((resolve, reject) => {
    index.search(options, (err, content) => {
      if (err) {
        reject(err)
      }
      let response = content.hits.map(content => ({
        title: content.title,
        displayName: content.displayName,
        thumbnail: content.thumbnail.url,
        date: moment(parseInt(content.date)).fromNow(),
        url: `https://ders.im/dokuman/${content.slug}`
      }))
      resolve(response)
    });
  });
}
