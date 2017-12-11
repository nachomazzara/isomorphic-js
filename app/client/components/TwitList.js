import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Twit from './Twit'

const styleContainer = {
  'marginTop': '30px'
}

const input = {
  'margin': '0 20px 0 40px',
  'fontSize': '18px',
  'borderRadius': '5px',
  'padding': '3px',
  'minWidth': '380px',
}

const search = {
  'fontSize': '18px',
  'color': '#70a9bd',
  'textDecoration': 'none',
  'border': '2px solid #70a9bd',
  'textAlign': 'center',
  'padding': '5px 20px',
  'borderRadius': '5px',
  'cursor': 'pointer',
}

export default class TwitList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search : '',
      twits: this.props.twits
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  onChange (e) {
    this.setState({search: e.target.value})
  }

  search () {
    if (this.state.search)
      window.location.href = `?q=${this.state.search}`
  }

  handleDelete (id) {
    this.setState({
      twits: this.state.twits.filter(twit => twit['id_str'] !== id)
    })
  }

  render () {
    return (<div style={styleContainer}>
      <input style={input} value={this.state.search} type={'text'} onChange={this.onChange} placeholder={'Enter Search Criteria'} />
      <button style={search} onClick={this.search} >{ 'Search' }</button>
      <div>
        { this.state.twits.length > 0 ? <ul>
        { this.state.twits.map((twit) =>
          <li style={{'listStyle': 'none'}} key={twit['id_str']}> <Twit handleDelete={this.handleDelete} twit={twit} /> </li>) }
        </ul> : <p style={{margin: '40px 0 0 40px'}}>{'Enter  Search criteria in order to retrieve Twits...'}</p> }
      </div>
    </div>)
  }
}

TwitList.propTypes = {
  twits: PropTypes.array.isRequired,
}
