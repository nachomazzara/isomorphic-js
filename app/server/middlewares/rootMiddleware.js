export default async function rootMiddleware (ctx, next) {
  try {
    await next() // next is now a function
  } catch (err) {
    console.log(err)
    let message = ""; // normalize message if fail on http request
    if(err.response && err.response.statusText){
      message = {message : err.response.statusText}
    }
    ctx.body = message || err.message
    ctx.status = err.status || 500
  }
}
