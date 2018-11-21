import React from 'react'
import {connect} from 'react-redux'

const JokeDisplay = ({joke}) => (
  <h1>{joke}</h1>
)

const mapStateToProps = (state) => {
  return {
    joke: state.joke
  }
}

export default connect(
  mapStateToProps
)(JokeDisplay)
