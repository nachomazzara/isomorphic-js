import combineRouters from 'koa-combine-routers'
import twitRouter from './twitRouter'

const router = combineRouters([
  twitRouter,
])

export default router;
