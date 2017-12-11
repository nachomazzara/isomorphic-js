import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import renderFullPage from '../template/renderFullPage'
import App from '../../client/components/App'
import {performGetTwits, performGetTwit} from '../services/twitterServices'

const responsePage = (ctx, twits) => renderToString(
  <StaticRouter context={{}} location={ctx.url} >
    <App twits={twits || []}/>
  </StaticRouter>
)

export async function getTwits (ctx) {
  const q = ctx.request.query.q || ''
  const twits = await performGetTwits(q)
  const html = responsePage(ctx, twits)
  ctx.body = renderFullPage(html, twits || [])
}

export async function getTwit (ctx) {
  const twits = await performGetTwit(ctx.params.id)
  const html = responsePage(ctx, twits)
  ctx.body = renderFullPage(html, twits || [])
}
