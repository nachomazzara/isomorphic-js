import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const twitStyle = {
  padding: '15px',
  border: '3px solid #b9e0ff',
  marginBottom: '30px',
  display: 'flex',
  borderRadius: '10px',

}
const image = {
  width: '50px',
  height: 'auto',
  borderRadius: '50%',
}

const view = {
  'margin': '15px 0',
  'color': '#7abd70',
  'fontSize': '16px',
  'textDecoration': 'none',
  'border': '2px solid #7abe84',
  'textAlign': 'center',
  'padding': '5px 20px',
  'borderRadius': '5px',
}

const remove = {
  'margin': '15px 10px',
  'color': '#bd7070',
  'fontSize': '16px',
  'textDecoration': 'none',
  'border': '2px solid #bd7070',
  'textAlign': 'center',
  'padding': '5px 20px',
  'borderRadius': '5px',
  'background': 'transparent',
  'cursor': 'pointer',
}

export default class Twit extends Component {
  render () {
    const { twit } = this.props

    return (<div style={twitStyle}>
      <div>
        <img style={image} alt={twit['user']['name']} src={twit['user']['profile_image_url_https']}/>
      </div>
      <div style={{marginLeft:' 20px'}}>
        <span style={{'fontSize': '14px'}}><strong>{twit['user']['name']}</strong>{ ` @${twit['user']['screen_name']}` }</span>
        <p style={{'marginTop': '10px'}}>{ twit['text'] }</p>
        <a style={view} href={`/twit/${twit['id_str']}`}> {'View'} </a>
        <button style={remove}
                onClick={() => this.props.handleDelete(twit['id_str'])}>
          {'Delete'}
        </button>
      </div>
    </div>)
  }
}

Twit.propTypes = {
  twit: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
