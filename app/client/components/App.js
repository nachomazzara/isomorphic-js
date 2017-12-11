import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import TwitList from './TwitList'
import Twit from './Twit'

const appStyle = {
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto',
  fontFamily: 'Roboto',
}

export default function App (props) {

  const { twits } = props
  return (
    <div style={appStyle}>
      <Switch>
        <Route path="/" render={(location) => (<TwitList twits={twits} location={location} />)} />
      </Switch>
    </div>
  )
}
