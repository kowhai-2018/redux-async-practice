import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
    state = {
      subreddit: ''
    }

  
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input type="text" name='subreddit' value={this.state.subreddit} onChange={this.changeHandler} />
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
