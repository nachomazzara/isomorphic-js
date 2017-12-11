import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Twit from './Twit'

export default class TwitList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search : 'sssssss'
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({search: 'e.target.value'});
  }

  search () {
    window.location.href = `?q=${this.state.search}`
  }

  render () {
    return (<div>
      <p>{this.state.search}</p>
      <input value={ this.state.search } type={'text'} onChange={this.onChange} placeholder={'Enter Search Criteria'} />
      <button onClick={this.search}>{ 'Search' }</button>
       <ul>
         { this.props.twits.map((twit) => <li key={twit['id_str']}> <Twit twit={twit} /> </li>) }
       </ul>
    </div>)
  }
}

TwitList.propTypes = {
  twits: PropTypes.array.isRequired,
}
