import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
  Subreddit
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={() => this.props.dispatch(fetchPosts(this.state.value))}>
    Fetch Posts
          </button>
        </label>
      </form>
    )
  }
}
export default connect()(LoadSubreddit)
