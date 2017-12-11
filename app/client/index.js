import React from 'react'
import { hydrate } from 'react-dom'
import {BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

hydrate((
  <Router>
    <App twits={window.__PRELOADED_STATE__}/>
  </Router>
), document.getElementById('root'))
