import Router from 'koa-router'
// import KoaBody from 'koa-body' // Needs to be imported
import { getTwits, getTwit } from '../controllers/twitController'

const router = new Router({ prefix: '/' })

/* GET /twits based on search */
router.get('/', getTwits)

/* GET /twit by id */
router.get('twit/:id', getTwit)

export default router
