import 'babel-polyfill'
import'babel-register'
import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import path from 'path'
import router from './routes'
import middleWares from './middlewares'

const app = new Koa()
app
.use(logger('dev'))
.use(bodyParser())
.use(...middleWares)
.use(router)
.use(serve(path.join(__dirname, '../')))

const port = process.env.PORT || 3333
const server = app.listen(port)
console.log('Listening to port ' + port)

export default server
