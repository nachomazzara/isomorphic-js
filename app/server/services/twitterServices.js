import Twit from 'twit'

import config from '../config'

const T = new Twit(config)

export function performGetTwits (q) {
  return T.get('search/tweets', { q, count: 10 })
  .then((response) => response.data.statuses)
  .catch(err => err)
}

export function performGetTwit (id) {
  return T.get(`statuses/show/${id}`)
  .then((response) => Array(response.data))
  .catch(err => err)
}
