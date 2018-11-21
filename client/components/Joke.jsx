import React from 'react'
import {connect} from 'react-redux'
import {fetchJoke} from '../actions'

class Joke extends React.Component {

  render () {
    return (
      <button onClick={() => this.props.dispatch(fetchJoke())}>Fetch Joke</button>
    )
  }
}

export default connect()(Joke)
