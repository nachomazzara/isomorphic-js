import server from '../../index'
import request from 'supertest'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../../../client/components/App'
import renderFullPage from '../../template/renderFullPage'
import {performGetTwits, performGetTwit} from '../../services/twitterServices'


jest.mock('../../services/twitterServices')

performGetTwits.mockReturnValueOnce([])
performGetTwit.mockReturnValueOnce([])

afterEach(() => {
  server.close()
})

const responsePage = (ctx, twits) => renderFullPage(renderToString(
  <StaticRouter context={{}} location={ctx.url} >
    <App twits={twits || []}/>
  </StaticRouter>
), [])

describe("routes: ", () => {
  test("should respond / as expected", async () => {
    const response = await request(server).get("/")
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("text/html")
    expect(response.text).toEqual(responsePage({}, []))
  })
  test("should respond /twit/:id as expected", async () => {
    const response = await request(server).get("/twit/123")
    expect(response.status).toEqual(200)
    expect(response.type).toEqual("text/html")
    expect(response.text).toEqual(responsePage({}, []))
  })
})
