import React from 'react'
import request from 'superagent'

export default class Joke extends React.Component {
  componentDidMount () {
    this.getJoke()
  }
  state = {
    joke: ''
  }

  getJoke () {
    request
  .get('https://geek-jokes.sameerkumar.website/api')
  .then(res => {
    this.setState({
      joke: res.body
    })
  })
  .catch(err => {
    console.error(err.message)
  })
  }

  render () {
    return (
      <h2>{this.state.joke}</h2>
    )
  }
}
