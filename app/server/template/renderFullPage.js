export default function renderFullPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
  <head>
      <title>Your SSR React Router Node App initialised with data!</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </head>
  <body>
  <div id="root">${html}</div>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>  
  <script src="/bundle.js"></script>
  </body>
  </html>
  `
}
