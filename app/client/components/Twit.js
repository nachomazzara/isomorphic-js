import React, { Component } from 'react'
import PropTypes from 'prop-types'

const twitStyle = {
  padding: '15px',
  border: '1px solid #000',
  marginBottom: '30px',
}
const image = {
  width: '100px',
  height: 'auto',
}

export default class Twit extends Component {
  render () {
    const { twit } = this.props

    return (<div style={twitStyle}>
      <img style={image} alt={ twit['user']['name'] } src={ twit['user']['profile_image_url_https'] }/>
      <span>{ `@${twit['user']['screen_name']}` }</span>
      <p>{ twit['text'] }</p>
    </div>)
  }
}

Twit.propTypes = {
  twit: PropTypes.object.isRequired,
}
