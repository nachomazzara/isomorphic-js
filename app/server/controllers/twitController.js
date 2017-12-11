import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import renderFullPage from '../template/renderFullPage';
import App from '../../client/components/App';
import Twit from 'twit'

const T = new Twit({
  consumer_key:         'swICkUvMpjwM8WUoXz8lxtcWU',
  consumer_secret:      'USICZ49F4HlshUzMF17y0vg1grpxzUuTkassDNchSuCcf60xkT',
  access_token:         '4134188717-yhtyS4HIIXjkN6q0FEURDmm2hu1yWjp2UsqOCPf',
  access_token_secret:  'K9d77SUBcSnd1b81NAeOpKYwnUbuZ1jurKc1VFEyvu21w',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

const performGetTwits = (q) => T.get('search/tweets', { q, count: 10 })
  .then((response) => response.data.statuses)
  .catch(err => err)

const performGetTwit = (id) => T.get(`statuses/show/${id}`)
  .then((response) => Array(response.data))
  .catch(err => err)

export async function getTwits (ctx) {
  const q = ctx.request.query.q || ''
  const twits = await performGetTwits(q)
  const html = renderToString(
    <StaticRouter context={{}} location={ctx.url}>
      <App twits={twits}/>
    </StaticRouter>
  )

  ctx.body = renderFullPage(html, '')
}

export async function getTwit (ctx) {
  const twits = await performGetTwit(ctx.params.id)
  const html = renderToString(
    <StaticRouter context={{}} location={ctx.url} >
      <App twits={twits}/>
    </StaticRouter>
  )

  ctx.body = renderFullPage(html, '')
}
