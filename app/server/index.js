import 'babel-polyfill'
import'babel-register'
import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import router from './routes'
import middleWares from './middlewares'

const app = new Koa()
app
.use(logger('dev'))
.use(bodyParser())
.use(...middleWares)
.use(router)

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to port ' + port);
